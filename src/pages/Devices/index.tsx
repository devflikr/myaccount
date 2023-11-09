import { useDocumentTitle } from 'react-unique-hooks';
import { useAuthCurrentUser, useAuthUserSessions } from 'react-devflikrauth-hooks';
import { useEffect, useState } from 'react';
import sortBy from 'sort-by';
import { UserSession } from 'devflikrauth';
import DeviceBox from './Device';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function DevicesPage() {

    const [user] = useAuthCurrentUser();

    useDocumentTitle("Devices");

    const [allSessions, removeSession, sessionError] = useAuthUserSessions();

    const [showAll, setAll] = useState(false);

    const [devices, setDevices] = useState<UserSession[]>([]);
    const [current, setCurrent] = useState<UserSession | null>(null);

    useEffect(() => {
        if (!allSessions.length) return;
        const sessions = [...allSessions.filter((item => showAll || !item.expiredAt)).sort(sortBy("-createdAt"))];
        const currentIndex = sessions.findIndex((item) => item.current);
        setCurrent(sessions.splice(currentIndex, 1)[0]);
        setDevices(sessions);
    }, [allSessions, showAll]);

    useEffect(() => {
        console.log(current, devices);
    }, [current, devices]);

    useEffect(() => {
        if (sessionError) toast.error(String(sessionError));
    }, [sessionError]);

    if (!user) return null;

    function toggleAll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        setCurrent(null);
        setDevices([]);
        setTimeout(() => {
            setAll(all => !all);
        }, 300);
    }

    async function removeOne(token: string) {
        if (!user) return;
        setCurrent(null);
        setDevices([]);
        await removeSession(token);
    }

    return (
        <>
            <header className="flex flex-col gap-5 items-center mb-5">
                <img className="w-16 aspect-square" src="/assets/devices.png" alt="Devices" />
                <h1 className="text-gray-300 font-medium text-center">
                    <span className="text-red-600 text-2xl font-bold">Devices</span><br />
                    Take control of your linked devices and remove any that you do not recognize.
                </h1>
            </header>
            {current && (allSessions.length - 1 !== devices.length || showAll) && <h2 className="text-blue-200">Showing {showAll ? ` all ${devices.length + 1} sessions` : `${devices.length + 1} active sessions only`}. Show <Link to="#all-sessions" className="text-blue-600" onClick={toggleAll}>{showAll ? `active sessions only` : `all session`}</Link>.</h2>}
            {!current && <div className="h-[30dvh] flex all-center"><l-tailspin size="40" stroke="4" speed="1" color="white" /></div>}
            {current && <DeviceBox
                index={1}
                {...current}
                remove={removeOne}
            />}
            {devices.map((device, index) => <DeviceBox
                index={index + 2}
                key={device.sessionToken}
                remove={removeOne}
                {...device}
            />)}
        </>
    );
}

export default DevicesPage;
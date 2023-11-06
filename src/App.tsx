import React from "react";
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import SidePanel from "./layouts/SidePanel";
import Header from "./layouts/Header";
import Initialize from "./FlikrUI/Initialize";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PersonalInfoPage from "./pages/PersonalInfo";
import ContactInfoPage from "./pages/ContactInfo";
import LoginInfoPage from "./pages/LoginInfo";
import SecurityPage from "./pages/Security";
import AccountPage from "./pages/Account";
import DevicesPage from "./pages/Devices";

function App() {

    const [user, loading, error] = useAuthCurrentUser();

    React.useEffect(() => {
        console.log(user, loading, error);
    }, [error, loading, user]);


    return (
        <Routes>
            <Route path="/u/:authUser/*" element={<InitializeApp />} />
            <Route path="/*" element={<InitializeApp index={0} />} />
        </Routes>
    );
}

export default App;

const MainApp = () => {
    const [user, loading] = useAuthCurrentUser();

    if (loading) return <div className="h-screen flex all-center"><l-tailspin size="60" stroke="6" speed="1" color="white" /></div>;

    return (<>
        <Header />
        <div className="flex flex-nowrap items-start min-h-[calc(100dvh_-_72px)] relative">

            {user && <>
                <SidePanel />
                <div className="flex-[4] p-5 md:px-20">
                    <main className="relative w-full lg:max-w-3xl">
                        <Routes>
                            <Route path="/profile" element={<PersonalInfoPage />} />
                            <Route path="/contact" element={<ContactInfoPage />} />
                            <Route path="/login" element={<LoginInfoPage />} />
                            <Route path="/security" element={<SecurityPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            <Route path="/devices" element={<DevicesPage />} />
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </main>
                </div>
            </>}
        </div>
    </>
    )
};


const InitializeApp = ({ index }: { index?: number }) => {
    return (<><Initialize index={index} /><MainApp /></>);
};
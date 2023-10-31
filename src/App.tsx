import React from "react";
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import SidePanel from "./layouts/SidePanel";
import Header from "./layouts/Header";
import Initialize from "./FlikrUI/Initialize";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import PersonalInfoPage from "./pages/PersonalInfo";

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
    const [user] = useAuthCurrentUser();
    return (<>
        <Header />
        <div className="flex flex-nowrap items-start min-h-[100dvh] relative">
            {user && <>
                <SidePanel />
                <div className="flex-[4] py-5 px-20">
                    <main className="relative w-full max-w-3xl">
                        <Routes>
                            <Route path="/personal-info" element={<PersonalInfoPage />} />
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
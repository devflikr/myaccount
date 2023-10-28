import React from "react";
import { useAuthCurrentUser } from "react-devflikrauth-hooks";
import SidePanel from "./layouts/SidePanel";
import Header from "./layouts/Header";
import Initialize from "./FlikrUI/Initialize";
import { Link, Route, Routes } from "react-router-dom";

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

const MainApp = () => (
    <>
        <Header />
        <SidePanel>
        </SidePanel>
        <Link to="./">Some link</Link>
        <Link to="./some-path-1">Some link</Link>
        <Link to="./some-path-2">Some link</Link>
        <Link to="./some-path-3">Some link</Link>
        <Link to="./some-path-4">Some link</Link>
        <Link to="./some-path-5">Some link</Link>
        <Link to="./some-path-6">Some link</Link>
        <Link to="./some-path-7">Some link</Link>
    </>
);


const InitializeApp = ({ index }: { index?: number }) => (<><Initialize index={index} /><MainApp /></>);
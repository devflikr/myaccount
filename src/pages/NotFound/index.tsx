import { useDocumentTitle } from 'react-unique-hooks';
import PageNotFound from "../../components/404-not-found.svg?react";
import { Link, useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

function NotFOundPage() {

    const navigate = useNavigate();

    useDocumentTitle("Page not found");

    return (
        <div className="flex flex-col items-center mt-10">
            <PageNotFound />
            <div className="-mt-32 text-lg text-center">It seems like this page doesn't exist.<br /> <Link to="" className="text-blue-500 inline-flex gap-5 items-center" onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}><MoveLeft />Go back</Link></div>
        </div>
    );
}

export default NotFOundPage;
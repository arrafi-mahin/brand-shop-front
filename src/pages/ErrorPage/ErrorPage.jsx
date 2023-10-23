import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-20">
            <h2  className="font-bold text-3xl mb-8">Page not found</h2>
            <Link to="/" className="px-8 py-2 border">Go Home</Link>
        </div>
    );
};

export default ErrorPage;
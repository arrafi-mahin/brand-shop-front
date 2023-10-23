import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading, createUser, signInWithGoogle, signInUser} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex items-center justify-center min-h-screen py-16"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;
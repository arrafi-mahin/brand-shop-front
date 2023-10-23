import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(result =>{
            console.log('Logged In Successful')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const links = <>
        <li>
            <NavLink className='text-white bg-transparent border border-white hover:bg-white hover:text-black' to="/">Home</NavLink>
        </li>
        <li>
            <NavLink  className='text-white bg-transparent border border-white hover:bg-white hover:text-black' to="/addProduct">Add Product</NavLink>
        </li>
        <li>
            <NavLink  className='text-white bg-transparent border border-white hover:bg-white hover:text-black h-full' to="/cart"><FaShoppingCart/></NavLink>
        </li>
    </>
    return (
        <header className="header z-10 relative bg-blue-950">
            <div className="max-w-[1280px] mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost italic text-xl text-white">RAFI AUTOS</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flexitems-center gap-2">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        
                        {
                            user ? <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL ? <>
                                            <img src={user.photoURL} />
                                        </>
                                        : <img src="https://i.ibb.co/TH1VvtS/585e4bf3cb11b227491c339a.png" />
                                    }
                                
                                </div>
                            </label>
                            <span>{user.displayName ? user.displayName : user.email}</span>
                            <button onClick={handleLogout} className="btn ml-2">Logout</button>
                            </> 
                            : <Link to="/login"><button onClick={handleLogout} className="btn ml-2">Login</button></Link>
                        }
                        <Link to="/registration"><button className="btn ml-2">Register</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from "react-router-dom";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    
    const [loginErr, setLoginErr] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            setLoginSuccess('Logged In Successful');
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            setLoginErr(error.message);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email, password);

        setLoginErr('');
        setLoginSuccess('');

        signInUser(email, password)
        .then(result =>{
            setLoginSuccess('Logged In Successful');
            e.target.reset();
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            setLoginErr(error.message);
        })
    }
    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-[540px] mx-auto px-4">
                <h2 className="card-title text-4xl font-bold text-blue-950 text-center mb-6">Login Form</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-blue-950">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-950">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control my-6">
                        <button className="btn bg-blue-950">Login</button>
                    </div>
                </form>
                {
                    loginErr && <p className="text-red-600">{loginErr}</p>
                }
                {
                    loginSuccess && <p className="text-green-600">{loginSuccess}</p>
                }
                <p className="mt-5">Did not registered yet! Please <Link to="/registration" className="underline text-gray-600">Register Now</Link></p>
                <br/><p>OR</p><br/>
                <button onClick={handleGoogleSignIn} className="btn">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
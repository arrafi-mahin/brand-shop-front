import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider'
import Swal from "sweetalert2";


const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const [registrationErr, setRegistrationErr] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const handleRegistration = e => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email, password);
        

        if(password.length < 6){
            setRegistrationErr('Password should be at least 6 characters or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegistrationErr('Password should be at least 1 uppercase character');
            return;
        }
        else if(!/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(password)){
            setRegistrationErr('Password should be at least 1 special character');
            return;
        }

        setRegistrationErr('');
        setRegistrationSuccess('');

        createUser(email, password).then(result =>{
            const newUser = {email};
            // send data to the server
            fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                        })
                }
            })
        })
        .catch(error =>{
            setRegistrationErr(error.message);
        })

    }
    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-[540px] mx-auto px-4">
                <h2 className="card-title text-4xl font-bold text-blue-950 text-center mb-6">Registration Form</h2>
                <form onSubmit={handleRegistration}>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-blue-950">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered bg-white" required />
                    </div>
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
                        <button className="btn bg-blue-950">Submit</button>
                    </div>
                </form>
                {
                    registrationErr && <p className="text-red-600">{registrationErr}</p>
                }
                {
                    registrationSuccess && <p className="text-green-600">{registrationSuccess}</p>
                }
                <p className="mt-5">Already registered! Please <Link to="/login" className="underline text-gray-600">Login</Link></p>
            </div>
        </div>
        
    );
};

export default Registration;
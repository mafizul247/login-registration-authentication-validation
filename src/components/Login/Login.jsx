import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const auth = getAuth(app);

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        if (!/(?=.*[a-z])/.test(password)) {
            return toast.error('Password must contain at least 1 lowercase alphabetical character');
        } else if (!/(?=.*[A-Z])/.test(password)) {
            return toast.error('Password must contain at least 1 uppercase alphabetical character');
        } else if (!/(?=.*[0-9])/.test(password)) {
            return toast.error('Password must contain at least 1 numeric character');
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return toast.error('Password must contain at least one special character !@#$%^&*')
        } else if (!/(?=.{6,})/.test(password)) {
            return toast.error(`Passowrd must be 6 characters or longer`);
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                if (!logedUser.emailVerified) {
                    signOut(auth).then(() => {
                        toast.error('Please verify your email');
                        return;
                    }).catch(error => toast.error(error.message));
                } else {
                    toast(`${logedUser.email} login succefully`);
                    navigate('/');
                }
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const userPasswordReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast.error('Please provide valid email');
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Please check your email');
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <div className="bg-light p-3" style={{ width: '400px' }}>
                <h2 className="text-center">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email:</label>
                        <input ref={emailRef} type="email" name="email" className="form-control" placeholder="Entry Your Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password:</label>
                        <input type="password" name="password" className="form-control" placeholder="Entry Your Passwrod" />
                    </div>
                    <input type="submit" className="btn btn-primary w-100" value="Login" />
                </form>
                <p className="my-2 "><small>Forgot your password Please <button onClick={userPasswordReset} className="btn btn-link">Reset Password!</button></small></p>
                <SocialLogin />
                <div className="text-center mt-2">
                    <p>Do not an Account? <Link to='/register'>Please Register!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
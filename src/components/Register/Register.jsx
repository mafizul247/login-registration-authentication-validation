import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
// import SocialLogin from "../SocialLogin/SocialLogin";

const auth = getAuth(app);

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        console.log(name, photo, email, password, confirm);

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
        } else if (password !== confirm) {
            return toast.error('Password and confirm password dose not match');
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                toast(`${logedUser.email} registraion succefully`);
                emailVerification(result.user);
                userProfileUpdate(result.user, name, photo);
                signOut(auth).then(() => {
                    navigate('/login');
                }).catch(error => toast.error(error.message));
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const emailVerification = (user) => {
        sendEmailVerification(user)
            .then(() => {
                toast('Please verify your email');
            }).catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    const userProfileUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                // toast('Your profile has been updated')
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
                        <label className="form-label fw-bold">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Entry Your Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Photo URL:</label>
                        <input type="url" name="photoURL" className="form-control" placeholder="Entry Your Photo URL" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Entry Your Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Password:</label>
                        <input type="password" name="password" className="form-control" placeholder="Entry Your Passwrod" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Confirm Password:</label>
                        <input type="password" name="confirm" className="form-control" placeholder="Entry Your Confirm Passwrod" />
                    </div>
                    <input type="submit" className="btn btn-primary w-100" value="Register" />
                </form>
                {/* <div className="mt-2">
                    <SocialLogin />
                </div> */}
                <div className="text-center mt-2">
                    <p>Alreday Have an Account? <Link to='/login'>Please Login!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
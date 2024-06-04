import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import googleIcon from './../../assets/google-icon.png'
import gitHubIcon from './../../assets/gitHub-icon.png'
// import facebookIcon from './../../assets/facebook-icon.png'
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                toast(`${logedUser.email} login successfully`);
                navigate('/');
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const handleGitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                toast('Login successfully');
                navigate('/');
            }).catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <div className='border border-1px solid rounded p-2 text-center bg-white d-flex justify-content-center gap-3'>
            <div >
                <img onClick={handleGoogleLogin} className='rounded-circle' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={googleIcon} alt="Google" />
            </div>
            <div>
                <img onClick={handleGitHubLogin} className='rounded-circle' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={gitHubIcon} alt="GitHub" />
            </div>
            {/* <div>
                <img className='rounded-circle mr-3' style={{ height: '40px', width: '40px', cursor: 'pointer' }} src={facebookIcon} alt="Facebook" />
            </div> */}
        </div>
    );
};

export default SocialLogin;
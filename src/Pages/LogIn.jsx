import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthContext/AuthProvider";
import auth from "../firebase/firebase.config";
import picture from '../../public/banner.png'


const LogIn = () => {
    
    const provider = new GoogleAuthProvider();
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
   

    const handleSubmit = e =>{       
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;        
        logIn(email,password)
        .then(result=>{
            console.log(result)
            navigate(location.state ? location.state : '/')
                     
        })
        .catch((error)=>{
            swal(`${error.message}`)
        })
    }

    const handleClickGoogle = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
                navigate(location.state ? location.state : '/')
        })
        .catch(error=>console.log(error.message))
    }
    const handleClickGithub = () => {
        // signInWithPopup(auth,provider)
        // .then(result =>{
        //         navigate(location.state ? location.state : '/')
        // })
        // .catch(error=>console.log(error.message))
        console.log('github')
    }
    return (
        <div className="py-20" style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <form onSubmit={handleSubmit} className=" w-80 md:w-96 bg-black bg-opacity-50 mx-auto card-body border-2 bg- border-green-500">
            <div className="form-control">
            <span className="text-2xl text-center font-semibold text-white">Please Log In</span>
            <label className="label">
                <span className="label-text text-white">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-white">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-4 ">
            <button className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In</button>
            </div>
            <div  className="form-control mt-2">
            <button onClick={handleClickGoogle} className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In With Google</button>
            </div>
            <div  className="form-control mt-2">
            <button onClick={handleClickGithub} className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In With GitHub</button>
            </div>
            <div className="mb-6 mx-auto">
            <p className='text-white'>Do not Have Account? <Link className="text-blue-500 font-bold" to='/registration'>Go Register</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default LogIn;
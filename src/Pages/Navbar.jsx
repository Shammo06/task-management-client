import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
          <div className="navbar bg-slate-400 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
                    <NavLink to='/'><li><a >Home</a></li></NavLink>
                    <NavLink><li><a>About Us</a></li></NavLink>
                    <NavLink><li><a>Contact Us</a></li></NavLink>
                    <li> {
                        user ?                  
                        <NavLink to='/dashboard'> <a >Management Dashboard</a></NavLink>
                        :
                        <NavLink to='/LogIn'> <a >Log In</a></NavLink>
                        }     
                    </li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">SCC Technovision Inc</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <NavLink  to='/'><li><a>Home</a></li></NavLink>
                <NavLink><li><a href=''>About Us</a></li></NavLink>
                <NavLink><li><a>Contact Us</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end  hidden lg:flex">
                {
                  user ?                  
                  <NavLink to='/dashboard'> <a className="btn">Management Dashboard</a></NavLink>
                  :
                  <NavLink to='/LogIn'> <a className="btn">Log In</a></NavLink>
                }               
            </div>
            </div>  
        </div>
    );
};

export default Navbar;
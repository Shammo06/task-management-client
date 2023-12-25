import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import {FaUserEdit, FaStreetView,FaUserClock} from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthProvider";


const Dashboard = () => {
    const { user,logOut} = useContext(AuthContext);
 
    
    const handleClick = () =>{
        logOut();
    }
    return (
        <div className="flex">
            
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 pt-14">
                   
                    <>
                            <li className=''>
                                <button className='flex gap-3'> <img className='w-10 rounded-full' src={user.photoURL} /><p className='text-2xl'>{user.displayName}</p></button> 
                            </li>
                            <li className=''>
                                <button className='flex'>Email: {user.email}</button> 
                            </li>
                            <li className='pb-5'>
                                <button onClick={handleClick} className='bg-rose-700 w-28 rounded-lg text-zinc-100'>Log Out</button>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard">
                                <button className='flex gap-3'><FaUserEdit className='text-2xl'/>Add Task</button></NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/todo">
                                <button className='flex gap-3'><FaStreetView className='text-2xl'/>To Do</button>
                                </NavLink>
                            </li>
                                            
                            
                    </>
                       
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
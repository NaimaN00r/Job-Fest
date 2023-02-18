
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

// import logo from "../../../assets/BannerImg/alexa.png"


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {navigate('/login') })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" className='text-white'>Home</Link></li>
        <li><Link to="/about"className='text-white' >AboutUs</Link></li>
        <li><Link to="/contact" className='text-white'>Contact</Link></li> 
        {/* <li><Link to="/login">Login</Link></li> */}
         {/* <li><Link to="/appointment">Appointment</Link></li>  */}
         {/* <li><Link to="/about">About</Link></li>  */}
        {user?.uid ? 
            <>
            {/* {<li><Link to="/dashboard" className='text-white'>Dashboard</Link></li> } */}
            <li className='text-white'><button onClick={handleLogOut} >Sign out</button></li>
            </>
         : <li><Link to="/login" className='text-white'>Login</Link></li>}
    </React.Fragment>

    return (

<div className="navbar bg-pink-700 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-white text-xl">Job Fest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
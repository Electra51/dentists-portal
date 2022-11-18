import React, { useContext} from 'react'
import { Link} from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider'
import Lottie from 'react-lottie';
import teeth from '../teeth.json';


const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: teeth,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    const handleLogOut = () => {
        logOut()
            .then(() => { })
        .catch(err=>console.log(err))
    }
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>}
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold"><Lottie options={defaultOptions}
                    height={50}
                    width={50}
                    />Dentist-portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>


        //     <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        //         <div className='relative flex items-center justify-between'>
        //             <Link
        //                 to={'/'}
        //                 aria-label='Dentist-portal'
        //                 title='Dentist-portal'
        //                 className='inline-flex items-center'
        //             ><Lottie options={defaultOptions}
        //             height={50}
        //             width={50}
        //             /> <p className='text-xl font-bold'>Dentist-portal</p>
                       
        //             </Link>
        //             <ul className='flex items-center hidden space-x-8 lg:flex'>
        //                 <li>
        //                     <NavLink
        //                         to={'/home'}
        //                         aria-label='Home'
        //                         title='Home'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-orange-600 border-b border-b-orange-600  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                         Home
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to={'/About'}
        //                         aria-label='About'
        //                         title='About'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                         About
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to={'/appointment'}
        //                         aria-label='appointment'
        //                         title='appointment'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                         Appointment
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to={'/reviews'}
        //                         aria-label='reviews'
        //                         title='reviews'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                         Reviews
        //                     </NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink
        //                         to={'/contactUs'}
        //                         aria-label='contactUs'
        //                         title='contactUs'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                         Contact Us
        //                     </NavLink>
        //                 </li>
        //                 {user?.uid?<li>
        //                 <button> <NavLink onClick={handleLogOut}
                                
        //                         aria-label='logOut'
        //                         title='logOut'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white btn btn-error border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray btn btn-outline btn-error transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                        Log Out
                               
        //                     </NavLink></button>
        //                 </li>:<li>
        //                 <button> <NavLink
        //                         to={'/login'}
        //                         aria-label='login'
        //                         title='login'
        //                         className={({ isActive }) =>
        //                             isActive ? 'font-medium tracking-wide text-white btn btn-warning border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray btn btn-outline btn-warning transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                     >
        //                        Login
                               
        //                     </NavLink></button>
        //                 </li>}
        //             </ul>
        //             <div className='lg:hidden'>
        //                 <button
        //                     aria-label='Open Menu'
        //                     title='Open Menu'
        //                     className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
        //                     onClick={() => setIsMenuOpen(true)}
        //                 >
        //                     <svg className='w-5 text-black' viewBox='0 0 24 24'>
        //                         <path
        //                             fill='currentColor'
        //                             d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
        //                         />
        //                         <path
        //                             fill='currentColor'
        //                             d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
        //                         />
        //                         <path
        //                             fill='currentColor'
        //                             d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
        //                         />
        //                     </svg>
        //                 </button>
        //                 {isMenuOpen && (
        //                     <div className='absolute top-0 left-0 w-full'>
        //                         <div className='p-5 bg-slate-900 border rounded shadow-sm'>
        //                             <div className='flex items-center justify-between mb-4'>
        //                                 <div>
        //                                     <Link
        //                                         to={'/'}
        //                                         aria-label='Dentist-portal'
        //                                         title='Dentist-portal'
        //                                         className='inline-flex items-center'
        //                                     >Dentist-portal
        //                                         <img src='' alt="" />

        //                                     </Link>
        //                                 </div>
        //                                 <div>
        //                                     <button
        //                                         aria-label='Close Menu'
        //                                         title='Close Menu'
        //                                         className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
        //                                         onClick={() => setIsMenuOpen(false)}
        //                                     >
        //                                         <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
        //                                             <path
        //                                                 fill='currentColor'
        //                                                 d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
        //                                             />
        //                                         </svg>
        //                                     </button>
        //                                 </div>
        //                             </div>
        //                             <nav>
        //                                 <ul className='space-y-4'>
        //                                     <li className='mb-3'>
        //                                         <NavLink
        //                                             to={'/'}
        //                                             aria-label='Home'
        //                                             title='Home'
        //                                             className={({ isActive }) =>
        //                                                 isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                         >
        //                                             Home
        //                                         </NavLink>

        //                                     </li>
        //                                     <NavLink
        //                                         to={'/about'}
        //                                         aria-label='about'
        //                                         title='about'
        //                                         className={({ isActive }) =>
        //                                             isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                     >
        //                                         About
        //                                     </NavLink>
        //                                     <li>
        //                                         <NavLink
        //                                             to={'/appointment'}
        //                                             aria-label='Appointment'
        //                                             title='Appointment'
        //                                             className={({ isActive }) =>
        //                                                 isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                         >
        //                                             Appointment
        //                                         </NavLink>
        //                                     </li>
        //                                     <li>
        //                                         <NavLink
        //                                             to={'/reviews'}
        //                                             aria-label='Reviews'
        //                                             title='Reviews'
        //                                             className={({ isActive }) =>
        //                                                 isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                         >
        //                                             Reviews
        //                                         </NavLink>
        //                                     </li>
        //                                     <li>
        //                                         <NavLink
        //                                             to={'/contactUs'}
        //                                             aria-label='ContactUs'
        //                                             title='ContactUs'
        //                                             className={({ isActive }) =>
        //                                                 isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50  transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                         >
        //                                             ContactUs
        //                                         </NavLink>
        //                                     </li>
        //                                     <li>
        //                                         <NavLink
        //                                             to={'/login'}
        //                                             aria-label='Login'
        //                                             title='Login'
        //                                             className={({ isActive }) =>
        //                                                 isActive ? 'font-medium tracking-wide text-white border-b border-b-neutral-50 btn btn-warning transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide btn btn-outline btn-warning text-gray transition-colors duration-200 hover:text-deep-purple-accent-400'}
        //                                         >
        //                                             Login
        //                                         </NavLink>
        //                                     </li>
        //                                 </ul>
        //                             </nav>
        //                         </div>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header
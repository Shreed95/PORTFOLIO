import { useState } from "react";
import logo from '../Images/logo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-[#3C2A21] shadow-lg">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-center pb-1 md:pb-5">
                        <div className="flex flex-col items-center">
                            <Link to='/'>
                                <img src={logo} alt="logo" className='w-16 py-1' />
                            </Link>
                            <Link to='/'>
                                <span className='text-white text-3xl ml-4 font-mono'>Shreed Raskar</span>
                            </Link>
                        </div>   
                    </div>
                    <div className="md:hidden absolute top-6 right-7">
                            <button className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                    {navbar?(<div className="text-3xl"><AiOutlineClose></AiOutlineClose></div>):(<div className="text-3xl"><GiHamburgerMenu></GiHamburgerMenu></div>)}
                            </button>
                    </div>
                </div>
                <div className={`absolute w-full bg-black opacity-80 md:opacity-100 flex justify-center items-center md:contents md:pb-0 md:mt-0 text-xl md:text-2xl ${navbar ? "block" : "hidden"} z-30`}>
                    <ul className="flex-row md:flex justify-center items-center md:space-x-6 md:space-y-0">
                        <li className="py-6 md:p-2 text-white flex justify-center cursor-pointer">
                            <Link className="ave btn-design rounded-2xl hover:bg-[#D5CEA3] hover:text-[#1A120B] p-2" aria-current="page" to="/" onClick={() => setNavbar(!navbar)}>
                            Home
                            </Link>
                        </li>
                        <li className="py-6 md:p-2 text-white flex justify-center cursor-pointer">
                            <Link className="ave btn-design rounded-2xl hover:bg-[#D5CEA3] hover:text-[#1A120B] p-2" aria-current="page" to="/projects" onClick={() => setNavbar(!navbar)}>Projects
                            </Link>
                        </li>
                        <li className="py-6 md:p-2 text-white flex justify-center cursor-pointer">
                            <Link className="ave btn-design rounded-2xl hover:bg-[#D5CEA3] hover:text-[#1A120B] p-2" aria-current="page" to="/exp" onClick={() => setNavbar(!navbar)}>Experience
                            </Link>
                        </li>
                        <li className="py-6 md:p-2 text-white flex justify-center cursor-pointer">
                            <Link className="ave btn-design rounded-2xl hover:bg-[#D5CEA3] hover:text-[#1A120B] p-2" aria-current="page" to="/contact" onClick={() => setNavbar(!navbar)}>Contact Me
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >
    );
}
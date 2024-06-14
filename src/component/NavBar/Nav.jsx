import React, { useState } from 'react';
import newlogo from '../../assets/newlogo.png';
import Home from '../home/Home';
import Privacy from "../PrivacyPolicy/Privacy";
import Terms from '../TermsCon/Terms';
import About from '../AboutUs/About';
import Footer from '../Footer/Footer';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        console.log(`Nav is now ${isNavOpen ? 'closed' : 'open'}`);
    };

    function handleClick() {
        window.location.reload();
    }

    return (
        <div className='wrapper'>
            <div className="w-[490px] md:w-screen bg-gray-100 shadow-xl text-gray-900 md:text-white">
                <div className="flex justify-between items-center px-4 py-2">
                    <div>
                        <img src={newlogo} alt="Logo" className="h-10 md:h-12 w-10 md:w-12" />
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNav} className="text-xl focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className='hidden md:block w-[70%] ml-[100px] flex items-center'>
                        <div className='flex w-[100%] justify-around items-center font-medium text-slate-800'>
                            <a href="#home" className='hover:text-orange-800' onClick={handleClick}>Home</a>
                            <a href="#privacy" className='hover:text-orange-800' onClick={handleClick}>Privacy Policy</a>
                            <a href="#terms" className='hover:text-orange-800' onClick={handleClick}>Terms and Conditions</a>
                            <a href="#about" className='hover:text-orange-800' onClick={handleClick}>About us</a>
                            <a href="#contact" className='hover:text-orange-800' onClick={handleClick}>Contact us</a>
                            <button className='bg-orange-700 text-white h-10 w-32 rounded-lg'>Download now</button>
                        </div>
                    </div>
                </div>
                {isNavOpen && (
                    <div className="md:hidden flex flex-col items-center py-2">
                        <a href="#home" className='hover:text-orange-800 py-1' >Home</a>
                        <a href="#privacy" className='hover:text-orange-800 py-1' >Privacy Policy</a>
                        <a href="#terms" className='hover:text-orange-800 py-1' >Terms and Conditions</a>
                        <a href="#about" className='hover:text-orange-800 py-1' >About us</a>
                        <a href="#contact" className='hover:text-orange-800 py-1' >Contact us</a>
                        <button className='bg-orange-700 text-white h-10 w-32 rounded-lg'>Download now</button>
                    </div>
                )}
            </div>
            <div className='pages'>
                <div id='home'>
                    <Home />
                </div>
                <div id='privacy'>
                    <Privacy />
                </div>
                <div id='terms'>
                    <Terms />
                </div>
                <div id='about'>
                    <About />
                </div>
                <div id='contact'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Nav;

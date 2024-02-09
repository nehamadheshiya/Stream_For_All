
<div className='wrapper'>
<div className="w-screen h-14 bg-gray-100 shadow-xl text-white flex opacity-95">
    <div className='flex w-[15%]  h-14 items-center justify-center '>
        <img src={logo} alt="img" className='h-12 w-12'/>
    </div>
    <div className="md:hidden">
            <button onClick={toggleNav} className="text-xl focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
    </div>
    <div className='w-[70%]  ml-[100px] flex items-center'>
    <div className='flex w-[100%] justify-around items-center font-medium text-slate-800'>
        <a href="#home" className='hover:text-orange-800 ' onClick={handleClick}>Home</a>
        <a href="#privacy" className='hover:text-orange-800' onClick={handleClick}>Privacy Policy</a>
        <a href="#terms" className='hover:text-orange-800' onClick={handleClick}>Terms and Conditions</a>
        <a href="#about" className='hover:text-orange-800' onClick={handleClick}>About us</a>
        <a href="#contact" className='hover:text-orange-800' onClick={handleClick}>Contact us</a>
        <button className='bg-orange-700 text-white h-10 w-32 rounded-lg'>Download now</button>
    </div>
</div>
</div>

<div className='pages'>
    <div id='home' >
        <Home/>
    </div>
    <div id='privacy'>
        <Privacy/>
    </div>
    <div id='terms' >
        <Terms/>
    </div>
    <div id='about' >
        <About/>
    </div>
    <div id='contact'>
        <Contact/>
    </div>
    <div id='footer'>
        <Footer/>
    </div>
</div>
</div>
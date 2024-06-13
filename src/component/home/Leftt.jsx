import React from 'react';
function Leftt() {
  return (
    <div className='w-[115%] py-10 md:w-[50%] sm:h-[65%] text-center md:h-[100%]  md:ml-10  md:mt-24'>
      <div id="slidingDiv" className='bg-orange-700   md:px-4 m-16 md:m-4 h-12  w-80 rounded-3xl font-semibold text-white opacity-95 flex justify-center items-center text-xl'>
        <p >Welcome To Stream For All</p>
      </div>
      <div className='font-medium text-center md:font-semibold md:mt-12 text-4xl md:text-5xl ml-4 md:ml-0 text-gray-800 opacity-95'>
        <p >Socalize Your Social Media With Stream For All</p>
      </div>
      <div id="sliding"  className='text-gray-700 ml-12 md:ml-1 text-center m-8 md:m-0 px-2 md:mt-12'>
        <p>SFA is an APP which you can stream live to show your life, showcase your talent, make new friends, interact and send virtual gifts in real-time. If you are a music fan or social person, just join SFA! We are ready to welcome you.</p>
      </div>
      <div id="slidingDiv" className='bg-orange-700 text-center ml-[25%] md:ml-0 md:mt-12  px-4 m-8 md:m-4 h-12 w-56 rounded-3xl font-semibold text-white opacity-95 flex justify-center items-center text-xl'>
        <p >Become Agency</p>
      </div>
      <div className='text-end '>
        <button className='block md:hidden fixed  bottom-4 right-4 h-12 z-50 w-36 bg-orange-700 text-base rounded-3xl text-white'>Download Now</button>
      </div>
    </div>
  )
}

export default Leftt;

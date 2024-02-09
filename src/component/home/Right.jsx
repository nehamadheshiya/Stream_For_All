import React from 'react';
import girl from '../../assets/girl.png'

function Right() {
  return (

    <div className='w-[100%] md:w-[50%]  h-[50%]  md:h-[100%]  md:mt-8 bg-white flex justify-center items-center relative'>
      <div className='h-[80%] md:h-[80%] w-[100%] md:w-[90%]  bg-gradient-to-br from-orange-500 to-[#A86A56] rounded-full flex justify-center items-center '>      
        <div className='h-[80%] w-[80%] bg-gray-800  rounded-full flex justify-center items-center '>
                    <img src={girl} alt="girl" className='h-[150%]  md:h-[150%] w-[80%]'/>
        </div >
       </div>
      <div id="sliding" className="hidden md:block h-[12%] w-[30%] bg-gray-50 opacity-90 rounded-full absolute z-10 ml-[66%] mb-[60%]">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-xl'>🌐</p></div>
        <p className="font-medium text-3xl absolute ml-16 text-gray-700 mt-[-30%]">1650+</p>
        <p className="absolute ml-16 text-gray-700 mt-[-10%]">Agency Joined</p>
      </div>
      <div id="slidingDiv" className="hidden md:block h-[12%] w-[30%] bg-gray-50 opacity-90 rounded-full absolute z-10 mr-[70%] mt-[15%]">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-xl'>💶</p></div>
        <p className="font-medium text-3xl absolute ml-16 text-gray-700 mt-[-30%]">1650+</p>
        <p className="absolute ml-16 text-gray-700 mt-[-10%]">Agency Joined</p>
      </div>

    </div>
   
 

  )
}

export default Right

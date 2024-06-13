import React from 'react';
import girl2 from '../../assets/girl2.png';
// import me from "../../assets/me.jpg"
function Right() {
  return (

    <div className='w-[110%] md:w-[50%]  h-[50%]  md:h-[100%] ml-[23px] md:ml-0  md:mt-4  flex justify-center items-center relative'>
      <div className='h-[400px] w-[400px] md:h-[80%] md:w-[95%]  bg-gradient-to-br from-orange-500 to-[#A86A56] rounded-full flex justify-center items-center '>      
        <div className='h-[300px] w-[300px] md:h-[80%] md:w-[80%] bg-gray-800  rounded-full flex justify-center items-center '>
                    <img src={girl2} alt="girl" className='sm:h-[125%] ml-[-12%] md:h-[135%] w-[100%] mb-12 md:mb-20'/>
        </div >
       </div>
      <div id="sliding" className="hidden md:block h-[12%] w-[30%] bg-gray-50 opacity-90 rounded-full absolute z-10 ml-[66%] mb-[60%]">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-xl'>🌐</p></div>
        <p className="font-medium text-3xl absolute ml-16 text-gray-700 mt-[-30%]">2000+</p>
        <p className="absolute ml-16 text-gray-700 mt-[-10%]">Agency Joined</p>
      </div>
      <div id="slidingDiv" className="block h-[22%] md:h-[13%] w-[52%] md:w-[31%] bg-gray-50 opacity-90 rounded-full absolute z-10 mr-[50%] md:mr-[70%] mt-[55%]  md:mt-[25%]">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-xl'>💶</p></div>
        <p className="font-medium text-2xl md:text-3xl absolute ml-16 text-gray-700 mt-[-30%]">80%</p>
        <p className="absolute ml-16 text-gray-700 mt-[-10%] text-sm sm:text-base md:text-base lg:text-base">Commission Given to Hosts</p>
        </div>

    </div>
   
 

  )
}

export default Right

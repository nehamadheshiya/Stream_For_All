import React from 'react';
import boy3 from "../../assets/boy3.png";
import card from "../../assets/card.png"
function LeftAbt() {
  return (
    <div className='w-full md:w-[55%] ml-10 md:ml-0 h-[550px] md:h-[100%] mt-6 bg-white flex justify-center items-center relative'>
      <div className=' h-[75%] md:h-[85%] w-[100%] md:w-[90%] sm:mr-[15%] rounded-full bg-gradient-to-br from-orange-400 to-[#A86A56]'></div>
      <img src={boy3} alt="boy" className='h-[84%] md:h-[92%] w-[82%]   md:w-[68%] absolute z-10 mb-14 md:ml-[-12%]'/>
      <img  id="imgTop" src={card} alt="card" className='h-[18%] w-[22%] absolute z-10 mb-[75%] md:mb-[45%] ml-[70%]'/>
      <div id="slidingDiv" className="block h-[12%] w-[40%] md:w-[30%] bg-gray-50 opacity-90 rounded-full absolute z-10 mt-[60%] md:mt-0 mr-[65%] mb-[35%]">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-xl'>📈</p></div>
        <p className="font-medium text-3xl absolute ml-16 text-gray-700 mt-[-30%]">120%</p>
        <p className="absolute ml-16 text-gray-700 mt-[-12%]">Growth</p>
      </div>
      <div id="sliding" className="hidden md:block h-[12%] w-[30%] bg-gray-50 opacity-90 mt-[50%] rounded-full absolute z-10 ml-[66%] ">
        <div className="h-10 w-10 rounded-full bg-gray-800 ml-4 mt-6 flex items-center opacity-95 justify-center"><p className='text-3xl text-white'>⇩</p></div>
        <p className="font-medium text-3xl absolute ml-16 text-gray-700 mt-[-30%]">10M</p>
        <p className="absolute ml-16 text-gray-700 mt-[-10%]">Downloads</p>
      </div>
    </div>
  )
}

export default LeftAbt;

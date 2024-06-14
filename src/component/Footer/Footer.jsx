import React from 'react'
import logpwhite from "../../assets/logpwhite.png";
function Footer() {
  return (
    <div className='h-[85vh] mt-16 md:h-[90vh] w-[490px] md:w-full  bg-gray-800 relative'>
      <div id="slidingDiv" className=' h-auto md:h-[70%] w-[90%] md:w-[25%] bg-orange-800 rounded-3xl ml-[5%] md:ml-[10%] absolute mt-14'>
        <div className='pl-[10%] pt-[20%] md:pt-[10%]'>
            <img src={logpwhite} alt="img" className='h-20 w-20'/>
            <p className='text-4xl font-semibold text-white py-6'>SFA LIVE</p>
            <p className='text-lg text-white py-6'>✉ sfaliveuk01@gmail.com</p>
            <p className='text-lg text-white '>📞 +447473787349</p>
            <p className='block md:hidden text-lg text-white py-6'>
            ⌂ 
            UNIT 17 CARIOCCA BUSINESS PARK,
            2 SAWLEY ROAD,MANCHESTER,
            M40 8BB,United Kingdom
            </p>
            
        </div>
      </div>

      <div id="sliding"  className='hidden md:block h-[35%] w-[30%] bg-orange-800 rounded-3xl absolute ml-[60%] mt-[12%]'>
        <p className=' pl-[9%] absolute mt-6 font-medium text-base text-white'>
            <p className='text-4xl'>⌂</p>
            UNIT 17 CARIOCCA BUSINESS PARK,
            2 SAWLEY ROAD,MANCHESTER,
            M40 8BB,United Kingdom
        </p>
      </div>
    </div>
  )
}

export default Footer

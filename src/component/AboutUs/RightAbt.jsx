import React from 'react'

function LeftAbt() {
  return (
    <div className='w-[100%] md:w-[50%] h-[30%]  md:h-[100%]  bg-white  relative mt-10 md:ml-12'>
      <div id="slidingDiv" className='bg-orange-700 my-10 px-4  h-12 w-56 rounded-3xl font-semibold text-white opacity-95 flex justify-center items-center text-xl'>
        <p >About Stream For All</p>
      </div>
      <div className='font-semibold text-5xl px-2 my-10 text-gray-800 opacity-95'>
        <p >2+ Years Of Amazing Service</p>
      </div>
      <div id="sliding"  className='text-gray-700 px-2 mt-6 '>
        <p>SFA Live is the most popular group voice chat online community and live stream app, where you can share happiness, surprises, and inspirations in your life.
SFA Live allows you to live stream to share your life, tell your stories, show yourself and make friends from all around the world. It will help you escape boredom, chat with people and make each moment valuable.</p>
      </div>
    </div>
  )
}

export default LeftAbt

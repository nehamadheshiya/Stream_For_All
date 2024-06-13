import React from 'react'
import LeftAbt from "./LeftAbt";
import RightAbt from "./RightAbt";
function About() {
  return (
    <div>
        <div className='sm:h-auto md:h-[120vh] w-full md:flex'>
            <LeftAbt/>
            <RightAbt/>
        </div>
    </div>
  )
}

export default About

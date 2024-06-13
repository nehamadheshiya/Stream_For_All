import React from 'react';
import Right from './Right';
import Leftt from './Leftt'


function Home() {
  return (
    <div className='sm:h-auto md:h-[130vh] w-full md:flex'>
      <Leftt/>
      <Right/>
    </div>
  )
}

export default Home;

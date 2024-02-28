import React from "react";

const card = () => {
  return (
    <div className='flex justify-center place-items-center h-fit '>  
     {/* // card-section */}
      <footer className='flex flex-col  justify-evenly md:items-center md:flex-row md:w-1211 md:h-232 w-326 h-196 rounded-2xl bg-gradient-to-r from-gradient1 to-gradient2'>
        <div className='flex items-center w-281 h-113  ml-23 mt-14 md:w-667 md:h-232  '>
          <p className=' flex font-primary text-xl   md:text-3xl font-extrabold  md:font-semibold text-white leading-noraml text-left'>
            Crack the 21 day wake-up-athon to become a 5 AM Club Member
          </p>
        </div>
        <div className=' bg-white  grid rounded-md w-167 h-37 md:w-235 md:h-55 shadow-lg shadow-bshadow ml-23  '>
          <p className='font-primary font-bold text-xl md:text-2xl leading-10 grid items-center justify-center text-orange-500 '>
            Register Now
          </p>
        </div>
      </footer>
    </div>
  );
}

export default card;


import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import img1 from "../components/mobile1.png";
import img2 from "../components/mobile2.png";
import img3 from "../components/mobile3.png";
import Carousel from 'react-elastic-carousel';
const Hero = () => {
  useEffect(() => {
    var data = {};
    data.opacityIn = [0, 1];
    data.scaleIn = [0.2, 1];
    data.scaleOut = 1.2;
    data.durationIn = 1000;
    data.durationOut = 2000;
    data.delay = 2500;
    anime
      .timeline({ loop: true })
      .add({
        targets: ".animation .letters-1",
        opacity: data.opacityIn,
        scale: data.scaleIn,
        duration: data.durationIn,
      })
      .add({
        targets: ".animation .letters-1",
        opacity: 0,
        scale: data.scaleOut,
        duration: data.durationOut,
        easing: "easeInExpo",
        delay: data.delay,
      })
      .add({
        targets: ".animation .letters-2",
        opacity: data.opacityIn,
        scale: data.scaleIn,
        duration: data.durationIn,
      })
      .add({
        targets: ".animation .letters-2",
        opacity: 0,
        scale: data.scaleOut,
        duration: data.durationOut,
        easing: "easeInExpo",
        delay: data.delay,
      })
      .add({
        targets: ".animation .letters-3",
        opacity: data.opacityIn,
        scale: data.scaleIn,
        duration: data.durationIn,
      })
      .add({
        targets: ".animation .letters-3",
        opacity: 0,
        scale: data.scaleOut,
        duration: data.durationOut,
        easing: "easeInExpo",
        delay: data.delay,
      })
      .add({
        targets: ".animation",
        delay: 500,
      });

  }, [0])

  return (
    <section className='overflow-hidden'>    
     {/* main header section */}
      <div className=" flex text-black ml-5 mr-41 md:p-10 ">         
        <h1 className="font-primary text-xl md:text-3xl leading-7  text-[black] underline 
             decoration-underline decoration-4 underline-offset-8">
          Crack wake-up-athon & become member
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row place-items-center m-2 h-fit p-4 overflow-hidden  gap-10 bg-red-500">

         {/* //text-animation section */}

        <div className='flex sm:order-2 md:order-2 items-center justify-center m-4 w-full md:ml-36 lg:ml-36 md:w-1/2 lg:w-1/2 h-450 sm:h-465 md:h-650 lg:h-700  gap-10 '>
          <div className="flex  justify-center items-center w-300 h-286 sm:w-300 sm:h-286 md:w-450 md:h-450 lg:w-469 lg:h-465 bg-orange-circle rounded-full  ">
            <Carousel showArrows={false} enableAutoPlay={true} autoPlaySpeed={3000} pagination={false} verticalMode={true}>
              <img src={img1} alt=""
                className="h-390 m:h-400 md:w-271 md:h-650 lg:h-650 " />
              <img src={img2} alt=""
                className="h-390 sm:h-400 md:w-271 md:h-650 lg:h-650  " />
              <img src={img3} alt=""
                className="h-390 sm:h-400 md:w-271 md:h-650 lg:h-650 " />
            </Carousel>
          </div>
        </div>

        {/* //image-animation section */}

        <div className='animation flex md:order-1 flex-col justify-center items-center overflow-hidden md:text-2xl lg:text-3xl 
              w-309 h-147  sm:w-610 sm:h-147 md:w-430 md:h-180 lg:w-580 lg:h-228 text-orange-letter font-primary'>
          <span className='letters letters-1 absolute'>
            Find your soulmate for specific <br /> interests like art, yoga, travel, <br /> technology &  more...
          </span>
          <span className='letters letters-2 absolute'>
            Experience the thrill and <br /> spontaneity of meeting 5AMers <br /> with no set agendas...
          </span>
          <span className='letters letters-3 absolute'>
            Engage in diverse, dynamic <br />interest groups and shine your <br />hidden talents
          </span>
        </div>

      </div>
    </section>
  )
}

export default Hero


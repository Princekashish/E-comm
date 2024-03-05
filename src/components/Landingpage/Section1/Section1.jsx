import React from 'react';

function Section1() {
  return (
    <>
      <div className='bg-white h-36'>
        {/* Placeholder for fixed content above the image */}
      </div>
      <div className='relative bg-[url("/Img/Section01.jpg")] bg-cover bg-center bg-no-repeat h-[100vh] pl-9 pr-96 py-72 flex-col items-start gap-2.5 bg-local'>
        {/* Fixed text overlay */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white gap-5 p-5 h-52 w-[632px]'>
          <div className='self-stretch h-36 flex-col justify-start text-start items-center gap-3.5 flex'>
            <h1 className='w-[632px] h-[56px] text-center text-5xl font-semibold font-["Maison Neue"] leading-10 tracking-wide'>Your Cozy Era</h1>
            <h3 className='text-center text-white text-xl font-normal font-["Maison Neue"] leading-none'>Get peak comfy-chic <br /> with new winter essentials.</h3>
            <button className='uppercase leading-none tracking-tight bg-white hover:bg-[#DDDBDC] text-center text-neutral-800 text-sm font-normal w-[240px] h-[45px] rounded-sm font-["Maison Neue"] '>Shop now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;

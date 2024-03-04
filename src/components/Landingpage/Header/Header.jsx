import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="w-full  h-[142px]">
      <div className="bg-black self-stretch w-full px-7 py-1.5 text-white leading-none flex  justify-between items-center">
        <div className="flex justify-center grow shrink  w-[1340px] h-4   gap-1  items-center text-xs font-['Maison Neue']">
          <h1>Get early access on launching and offers.</h1>
          <a
            href="#"
            className="flex gap-2 cursor-pointer underline leading-none tracking-tight"
          >
            Sign Up For Texts <FaArrowRightLong />
          </a>
        </div>
        <div className=" text-xs font-normal font-['Maison Neue'] leading-none tracking-tight ">
            IND
        </div>
      </div>
      <div className="border-b self-stretch border-zinc-300   flex h-[59px] w-[294] px-16 justify-between items-center">
        <div className="flex  justify-start items-start  gap-3 px-3 py-5   text-neutral-800 leading-none tracking-tight font-['Maison Neue'] font-normal text-xs">
          {["Women", "Men", "About", "Everworld Stories"].map((item, i) => {
            return (
              <div key={i}>
                <h1 className="hover:text-blue-600">{item}</h1>
              </div>
            );
          })}
        </div>
        <div className="  w-32 h-3.5 px-1 py-7">
          <img src=".\Img\Logo.png" alt="" />
        </div>
        <div className="flex gap-2.5 text-lg  p-3 ">
          {[<CiSearch />, <FaRegUser />, <FiShoppingCart />].map((item, i) => {
            return <div key={i} className="h-4 w-4">{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;

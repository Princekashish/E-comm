import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { motion, useAnimation } from "framer-motion";

function Everworldstories() {
  return (
    <div>
      <div className=" bg-white h-36  ">
        <Header frame1={[]} />
      </div>

      {/* section1 */}
      <div className="w-full h-[376px] px-14 py-16 ">
        <div className=" flex-col justify-start items-start gap-5 inline-flex">
          <div className="Rectangle3 self-stretch h-[14px] w-[1280px] bg-neutral-800" />
          <div className="Frame1 self-stretch h-[243px] w-[1280px] flex-col justify-start items-start flex">
            <h1 className="self-stretch text-black text-9xl font-semibold font-['Maison Neue'] ">
              everworld
            </h1>
            <h3 className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] tracking-tight leading-loose">
              We’re on a mission to clean up a dirty industry.
              <br />
              These are the people, stories, and ideas that will help us get
              there.
            </h3>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="h-[1683px] self-stretch  px-14  flex-col justify-start items-start ">
        <h1 className="w-[1280px]  px-[60px] py-[120px]   text-black text-5xl font-semibold font-['Maison Neue'] leading-10">
          The Latest
        </h1>
        <div className="w-[1280px] h-[359px] ">
          <div className="h-[1259px] w-[1280px]  gap-[120px]">
            <div className="h-[589px] w-[1280px] flex gap-6">
              <div className="w-[410.67px] h-[509px]">
                <img src="../Img/image (7).png" alt="" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    How to Style Winter Whites
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="../Img/image (8).png" alt="" className="h-[413px]" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    How to Style Winter Whites
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="../Img/image (9).png" alt="" className="h-[413px]" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    How to Style Winter Whites
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-6 inline-flex   h-[594px]">
              <div>
                <img src="../Img/image (10).png" alt="" className="h-[413px]" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    Black Friday Fund 2024
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="../Img/image (11).png" alt="" className="h-[413px]" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    What to Wear this Season : <br /> Holiday Outfit & Ideas
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="../Img/image (12).png" alt="" className="h-[413px]" />
                <div className="h-[76px] py-[4px] pt-4 space-y-8">
                  <h1 className="  text-black text-3xl font-normal font-['Maison Neue'] leading-10 ">
                    Thanksgiving Outfilt Ideas
                  </h1>
                  <Link to={"/style"}>
                    <button className="text-center  px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
                      Style
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <a href="/everworld-stories/blog">
                {" "}
                <Link to="/everworld-stories/blog-post">
                  <button className=" text-center text-white text-sm font-semibold font-['Maison Neue'] leading-tight tracking-wide w-60 h-16  py-5 bg-neutral-800 rounded-lg  gap-2.5 ">
                    Load More Articals{" "}
                  </button>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* marquee */}

      {/* <div className="inline-flex whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 2 }}
          className=" items-center flex "
        >
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 2 }}
          className=" flex items-center  "
        >
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
          <h1 className="font-bold text-4xl">Keep it clean</h1>
          <img src=".\Img\recycle.avif" alt="img" className="h-20" />
        </motion.div>
      </div> */}

      {/* section3 */}
      <div
        className=" w-fit h-[682px] self-stretch px-14 py-20 flex-col justify-start items-start  gap-7 flex 
         "
      >
        <h1 className="  text-black text-5xl font-semibold font-['Maison Neue'] leading-10">
          Our Progress
        </h1>
        <div className="  h-[358px] self-stretch flexwarp flex justify-center gap-6 ">
          <div className="h-[358px] w-[410.67px] flex-col justify-start items-start gap-3 flex">
            <img className="  h-[306px]" src="./Img/image (15).png" />
            <h1 className=" text-black text-2xl font-normal font-['Maison Neue'] leading-10">
              Carbon Commitment
            </h1>
          </div>
          <div className=" h-[358px] w-[410.67px]  flex-col justify-start items-start gap-3 flex">
            <img className="  h-[306px]" src="./Img/image (16).png" />
            <h1 className=" text-black text-2xl font-normal font-['Maison Neue'] leading-10">
              Environmental Initiatives
            </h1>
          </div>
          <div className="h-[358px] w-[410.67px]  flex-col justify-start items-start gap-3 flex">
            <img className="  h-[306px]" src="./Img/image (17).png" />
            <h1 className=" text-black text-2xl font-normal font-['Maison Neue'] leading-10">
              Better Factories
            </h1>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className=" self-stretch h-80 px-14 py-24 bg-black flex-col justify-start items-start gap-8 flex">
        <div className="  text-white text-5xl font-semibold font-['Maison Neue'] leading-10">
          Follow us on social for more
        </div>
        <div className="  px-24 py-5 bg-white rounded-lg justify-center  gap-2.5 ">
          <a
            href="https://www.instagram.com/prince_kashish_?igsh=MWhqemd5ZjJqMTJ1dA== "
            target="_blank"
          >
            <button className="text-center text-black text-sm font-semibold font-['Maison Neue'] leading-tight tracking-wide">
              @Everlane Instagram
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Everworldstories;

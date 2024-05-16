import React, { useState } from "react";
import Header from "../Header/Header";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import productData from "./clothscoll";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { BiFilter } from "react-icons/bi";

function Collection() {
  const navigate = useNavigate();

  const [Category, setCategory] = useState(false);
  const [viewmore, setViewmore] = useState(false);
  const [size, setSize] = useState(false);
  const Categorytogg = () => {
    setCategory(!Category);
  };
  const Vewmoretogg = () => {
    setViewmore(!viewmore);
  };
  const sizetogg = () => {
    setSize(!size);
  };

  return (
    <div className="font-['Maison Neue']">
      <div className="h-28 bg-white">
        <Header
          frame1={[
            { text: "About", link: "/about" },
            { text: "Stories", link: "/about/stories" },
            { text: "Factories", link: "/Factories" },
            {
              text: "Enviromental Initiative",
              link: "/Enviromental-Initiative",
            },
            { text: "Our Carban Commitment", link: "/Our-Carban-Commitment" },
            { text: "Annual Imapct Repot", link: "/Annual-Imapct-Repot" },
            { text: "Cleaner Faction", link: "/cleanerfashion" },
            { text: "Sale", link: "/#" },
          ]}
        />
      </div>
      <section className="min-h-screen  flex   gap-5   ">
        <div className="hidden sticky top-[176px] overflow-y-auto scroll-smooth  w-[230px]  max-h-[80vh]   py-[30px]">
          <div className="border-b h-[48px]  border-zinc-300 w-full  py-3 ">
            <h1 className="font-['Maison Neue']"> totoal Prduct </h1>
          </div>
          <div className="flex h-[53px] justify-between items-center py-3">
            <h1 className="font-['Maison Neue']">Category</h1>
            <h1>
              {Category ? (
                <MdKeyboardArrowDown
                  size={25}
                  className="cursor-pointer font-['Maison Neue']"
                  onClick={Categorytogg}
                />
              ) : (
                <MdKeyboardArrowUp
                  size={25}
                  className="cursor-pointer font-['Maison Neue']"
                  onClick={Categorytogg}
                />
              )}
            </h1>
          </div>
          {/* Category list */}
          <div
            className={`${
              viewmore ? "min-h-[50vh]" : ""
            } flex flex-col gap-5 items-center w-[196px] h-[169px] overflow-hidden ${
              Category ? "hidden" : ""
            }`}
          >
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
            <div className="w-48 h-8 justify-start items-center gap-2 inline-flex">
              <input
                type="checkbox"
                className="w-8 h-8 bg-white rounded border border-black checked:bg-blue-300"
              />
              <h1 className="grow shrink basis-0 text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Everyone - All Gender Collection
              </h1>
            </div>
          </div>
          <div className="py-3 font-['Maison Neue'] text-xs">
            <h1
              className="font-['Maison Neue'] cursor-pointer"
              onClick={Vewmoretogg}
            >
              {viewmore ? `View more -` : `View more +`}
            </h1>
          </div>

          {/* color */}
          <div className=" font-['Maison Neue']  w-[196px] h-[50px] ">
            <h1>Color</h1>
          </div>
          <div className="Frame2  w-48 h-44 flex-col flex gap-3 justify-center items-center">
            <div className="flex justify-between  w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border-gray-200 border-3 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue']  tracking-tight">
                  Black
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-white border-black border-2 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  White
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-blue-900  border-gray-200 border-2 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  Blue
                </h1>
              </div>
            </div>
            <div className="flex justify-between   w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-pink-900  border-gray-200 border-2 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue']  tracking-tight">
                  Pink
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-800  border-gray-200 border-2 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  Brown
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-stone-600  border-gray-200 border-2 hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  olive
                </h1>
              </div>
            </div>
            <div className="flex justify-between   w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-zinc-200  border-gray-200 border hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue']  tracking-tight">
                  Gray
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-orange-400  border-gray-200 border hover:border-black hover:border-1" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  Orange
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-stone-400  hover:border-black hover:border-1 border-gray-200 border-2" />
                <h1 className="text-sm  font-['Maison Neue'] tracking-tight">
                  Tan
                </h1>
              </div>
            </div>
          </div>

          {/* size */}
          <div className="flex justify-between items-start py-5">
            <h1 className="font-['Maison Neue']  ">Size</h1>
            <h1 onClick={sizetogg}>
              {size ? (
                <MdKeyboardArrowDown
                  className="cursor-pointer font-['Maison Neue']"
                  size={25}
                />
              ) : (
                <MdKeyboardArrowUp
                  size={25}
                  className="cursor-pointer font-['Maison Neue']"
                />
              )}
            </h1>
          </div>
          <div
            className={`Frame2 w-48 h-32 pb-6 flex-col justify-start items-start gap-2 inline-flex ${
              size ? "hidden" : ""
            }`}
          >
            <div className="Waist self-stretch text-neutral-600 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
              Waist
            </div>
            <div className="Frame2 self-stretch justify-start items-start gap-1 inline-flex">
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  36
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  38
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  40
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  42
                </div>
              </div>
            </div>
            <div className="Frame4 self-stretch justify-start items-start gap-1 inline-flex">
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  44
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  46
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  48
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  50
                </div>
              </div>
            </div>
          </div>
          <div
            className={`Frame7 w-48 h-32 pb-6 flex-col justify-start items-start gap-2 inline-flex ${
              size ? "hidden" : ""
            }`}
          >
            <div className="Clothing self-stretch text-neutral-600 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
              Clothing
            </div>
            <div className="Frame3 self-stretch justify-start items-start gap-1 inline-flex">
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XXS
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XS
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  S
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  M
                </div>
              </div>
            </div>
            <div className="Frame4 self-stretch justify-start items-start gap-1 inline-flex">
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  L
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XL
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XXL
                </div>
              </div>
              <div className="TabButton grow shrink basis-0 h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XXXL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="space-y-2 flex flex-col justify-center items-center  min-h-[4%] ">
            <p className=" text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
              Home / Men
            </p>
            <h1 className=" text-black text-xl text-center font-normal leading-none font-['Maison Neue'] ">
              Men’s Clothing & <br /> Apparel - New Arrivals
            </h1>
            <p className="hidden text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              Featured
            </p>
          </div>
          <div className=" flex justify-between items-center  p-4">
            <div className="flex border px-3 py-2 border-black  justify-center items-center gap-2">
              <h1 className="uppercase ">Filter</h1>
              <BiFilter />
            </div>
            <div>
              <h1 className="text-xs text-[#737373]">120 Products</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3  p-4 ">
            {productData.map((items) => (
              <div
                key={items.id}
                className=" hover:shadow-xl hover:rounded-md duration-1000 "
              >
                <img
                  src={items.image}
                  className=" "
                  onClick={() => navigate(`/productinfo/${items.id}`)}
                />
                {/* <div className="absolute    ">
                  <p className=" text-center text-red-700 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                    30% off
                  </p>
                </div> */}
                <div className=" ">
                  <div className="flex justify-between   gap-3 p-[03px]  ">
                    <p className=" text-neutral-800 text-start   text-xs font-normal font-['Maison Neue'] leading-none ">
                      {items.title}
                    </p>
                    <div className="flex justify-end ">
                      <p className="  text-neutral-500 text-xs font-normal font-['Maison Neue'] line-through leading-none tracking-tight">
                        $188
                      </p>
                      <div className=" text-right text-neutral-800 text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
                        {items.price}
                      </div>
                    </div>
                  </div>
                  <div className=" p-[03px] text-neutral-500 text-xs ">
                    Black
                  </div>
                  {/* <div className="ColorSelection pt-3 flex gap-3">
                    {[
                      "stone-700",
                      "neutral-700",
                      "stone-500",
                      "neutral-800",
                    ].map((color, index) => (
                      <div
                        key={index}
                        className={`Selection relative w-5 h-5 border border-black rounded-full bg-${color}`}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Collection;

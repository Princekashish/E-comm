import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Men() {
  const shopping = [
    {
      img: "../Img/image0(31).png",
      text: "Shirt",
    },
    {
      img: "../Img/image0(32).png",
      text: "Shirt",
    },
    {
      img: "../Img/image0(33).png",
      text: "Shirt",
    },
    {
      img: "../Img/image0(34).png",
      text: "Shirt",
    },
    {
      img: "../Img/image(32).png",
      text: "Shirt",
    },
    {
      img: "../Img/image(33).png",
      text: "Shirt",
    },
    {
      img: "../Img/image(34).png",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
    {
      img: "https://via.placeholder.com/213x263",
      text: "Shirt",
    },
  ];
  return (
    <div>
      <div className="h-36 bg-white">
        <Header
          frame1={[
            { text: "New Arrivals", link: "/about" },
            { text: "Best-Sellers", link: "/#" },
            { text: "Clothing", link: "/#" },
            { text: "Tops & Jeans", link: "/#" },
            { text: "Pants & Jeans", link: "/#" },
            { text: "Outwear", link: "/#" },
            { text: "Shoes & Bags", link: "/#" },
            { text: "Sale", link: "/#" },
          ]}
        />
      </div>
      <div className=" bg-[url('../Img/Section01.jpg')] px-[32px] py-[270px]  bg-cover bg-center bg-no-repeat   h-screen w-full ">
        <div className=" h-52 w-[638px]  flex justify-center items-center ">
          <div className="self-stretch h-36 flex-col justify-start items-center gap-3.5 flex">
            <div className="px-12">
              <h1 className="self-stretch text-center text-white text-5xl font-normal font-['Maison Neue'] leading-10 tracking-wide">
                Your Cozy Era
              </h1>
              <h1 className="self-stretch text-center text-white text-2xl font-normal font-['Maison Neue'] leading-loose">
                Get peak comfy-chic
                <br />
                with new winter essentials.
              </h1>
            </div>
            <div className="w-60 py-3 bg-white hover:bg-gray-200 justify-center items-center gap-2.5 flex">
              <Link to="/collections" className="">
                <button className=" text-center  text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                  {" "}
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Crosolefffect by catogory  */}
      <div className="h-[534px] pb-10 flex justify-center items-center flex-col ">
        <h1 className="text-center py-20 font-['Maison Neue'] leading-none tracking-wider text-xl ">
          Shop by Category
        </h1>
        <div className="h-[295px] w-[1316px] flex  gap-5">
          {[
            {
              img: "../Img/image(36).png",
              text: "Pants",
            },
            {
              img: "../Img/image(33).png",
              text: "Tops",
            },
            {
              img: "../Img/image(34).png",
              text: "Danims",
            },

            {
              img: "../Img/image(37).png",
              text: "Sweaters",
            },
            {
              img: "../Img/image(32).png",
              text: "Otherwear",
            },
            {
              img: "../Img/image(35).png",
              text: "Shoes & Accercries",
            },
          ].map((items, i) => (
            <div
              key={i}
              className="gap-10  uppercase underline text-center   w-[212.69px]"
            >
              {" "}
              <img className="" src={items.img} />
              <Link to={"/collection"} className="font-['Maison Neue']">
                {items.text}{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* newarriver */}

      <div className="h-[534px]  px-[42px] flex gap-4  font-['Maison Neue'] leading-none tracking-wider ">
        <div className="bg-[url('../Img/fram1(1).png')] hover:opacity-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">
            Shop Now
          </button>
        </div>
        <div className="bg-[url('../Img/fram1(2).png')]  hover:opacity-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">
            Shop Now
          </button>
        </div>
        <div className="bg-[url('../Img/fram1(3).png')]  hover:opacity-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">
            Shop Now
          </button>
        </div>
      </div>

      {/* everlen crosal */}

      <div className="h-[817px] pb-10 flex justify-center items-center flex-col ">
        <h1 className="text-center py-20 font-['Maison Neue'] leading-none tracking-wider text-xl">Spring styles to wear together or apart—whatever the weather</h1>
        <div className="crosal h-[477px] w-[1316px] flex overflow-x-auto overflow-y-hidden gap-3 scroll-smooth">
          {shopping.map((items, i) => (
            <div key={i} className=" h-[461px]  min-w-[282.69px]">
              <img className="h-[420px] w-[282px]" src={items.img} alt="img" />
              <h1>{items.text}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* banner*/}
      <div className=" h-[461px] flex flex-col justify-center items-center ">
        <div className="bg-[url('../Img/Frame1(1).png')] flex justify-center items-center flex-col font-['Maison Neue'] space-y-5 leading-none tracking-wider px-[42px] py-[90px] bg-cover bg-center bg-no-repeat h-[281px] w-[1316px]">
          <h1 className=" text-4xl text-white">
            We're on Misson to clean up the Industry{" "}
          </h1>
          <p className=" text-sm  text-white">
            read out our progress Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet.{" "}
          </p>
          <Link to={"/about"} className=" bg-white px-10  py-3">
            Lead More
          </Link>
        </div>
      </div>

      {/* crosel */}

      <div className="h-[806px] bg-gray-200 mb-10"></div>

      {/* cotten */}
      <div className=" h-[967px] border-t border-neutral-800 flex gap-8 font-['Maison Neue'] justify-center items-center leading-none tracking-wider">
        <div className="text-center space-y-6">
          <h1 className="text-2xl ">Holiday Gift Pack</h1>
          <img
            src="../Img/image(28).png"
            alt=""
            className="h-[626px] w-[505px]"
          />
          <p className=" text-neutral-800 text-sm font-normal">
            The best present for everyone in your list
          </p>
          <div className="h-12 px-5 py-3.5 justify-center items-center gap-2.5 flex">
            <Link
              to="/about"
              className="text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="text-center space-y-6">
          <h1 className="text-2xl ">Clear Fashion</h1>
          <img
            src="../Img/image(29).png"
            alt=""
            className="h-[626px] w-[505px]"
          />
          <p className=" text-neutral-800 text-sm font-normal">
            The best present for everyone in your list
          </p>
          <div className="h-12 px-5 py-3.5 justify-center items-center gap-2.5 flex">
            <Link
              to="/about"
              className="text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* everlenonyou */}
      <div className="h-[433px] bg-gray-200 border-t border-neutral-800">
        <div className="h-[196px] w-[1316px] px-14 pt-24 flex-col justify-start items-center gap-6 inline-flex">
          <h1 className="self-stretch text-center text-neutral-800 text-3xl font-normal font-['Maison Neue'] leading-10">
            Everlane On You
          </h1>
          <div className="self-stretch h-10 flex-col justify-start items-center gap-1 flex">
            <h1 className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              Share your latest look with #EverlaneOnYou for a chance to be
              featured.
            </h1>
            <p className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
              Add Your Photo
            </p>
          </div>
        </div>
        {/* croserl */}
        <div></div>
      </div>
      {/* trustfactor */}
      <div className="h-[337px] flex justify-center ">
        <div className="px-[77px] py-[90px] h-[157px] w-[412px] flex-col flex justify-start items-center gap-5">
          <img
            src="../Img/image(302).png"
            alt=""
            className=" w-20 h-20 text-center"
          />
          <div className="w-72 h-14 flex-col justify-start items-center gap-1 inline-flex">
            <h1 className="self-stretch text-center text-neutral-800 text-sm font-semibold font-['Maison Neue'] leading-tight tracking-wide">
              Complimentary Shipping
            </h1>
            <p className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              Enjoy free shipping on U.S. orders over $100.
            </p>
          </div>
        </div>
        <div className="px-[77px] py-[90px] h-[157px] w-[412px] flex-col flex justify-start items-center gap-5">
          <img
            src="../Img/image(301).png"
            alt=""
            className=" w-20 h-20 text-center"
          />
          <div className="w-72 h-14 flex-col justify-start items-center gap-1 inline-flex">
            <h1 className="self-stretch text-center text-neutral-800 text-sm font-semibold font-['Maison Neue'] leading-tight tracking-wide">
              Complimentary Shipping
            </h1>
            <p className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              Enjoy free shipping on U.S. orders over $100.
            </p>
          </div>
        </div>
        <div className="px-[77px] py-[90px] h-[157px] w-[412px] flex-col flex justify-start items-center gap-5">
          <img
            src="../Img/image(300).png"
            alt=""
            className=" w-20 h-20 text-center"
          />
          <div className="w-72 h-14 flex-col justify-start items-center gap-1 inline-flex">
            <h1 className="self-stretch text-center text-neutral-800 text-sm font-semibold font-['Maison Neue'] leading-tight tracking-wide">
              Complimentary Shipping
            </h1>
            <p className="self-stretch text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              Enjoy free shipping on U.S. orders over $100.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Men;

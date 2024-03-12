import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Men() {
  const shopping = [
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

      {/* shoping */}
      <div className="h-[534px] pb-10 flex justify-center items-center flex-col ">
        <h1 className="text-center py-20">Shop by Category</h1>
        <div className="h-[295px] w-[1316px]   flex overflow-x-hidden scroll-smooth  gap-5">
          {shopping.map((items, i) => (
            <div key={i} className="bg-green-200 gap-5  w-[212.69px]">
              <img className="h-[263px]" src={items.img} alt="img" />
              <h1>{items.text}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* newarriver */}

      <div className="h-[534px] bg-gray-200 px-[42px] flex gap-4  font-['Maison Neue'] leading-none tracking-wider ">
        <div className="bg-[url('../Img/fram1(1).png')] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">Shop Now</button>
        </div>
        <div className="bg-[url('../Img/fram1(2).png')] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">Shop Now</button>
        </div>
        <div className="bg-[url('../Img/fram1(3).png')] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  gap-5 h-[534px] w-[430px] ">
          <h1 className="text-white text-3xl ">The Art of Layer</h1>
          <button className="bg-white text-sm font-normal font py-2 px-10  rounded-sm ">Shop Now</button>
        </div>
      
      </div>

      {/* Clinup */}
    </div>
  );
}

export default Men;

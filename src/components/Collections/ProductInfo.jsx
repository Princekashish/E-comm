import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { FaStar } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/Featuere/Cartslice";
import productData from "./clothscoll";
import ScrollTop from "../Scrolltop/ScrollTop";
import Footer from "../Footer/Footer";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart);

  const product = productData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleadd = (product) => {
    dispatch(add(product));
  };

  const productimg = [
    {
      id: 1,
      img: "https://media.everlane.com/images/c_fill,w_750,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/bc8ddbcc_1540/womens-summer-jean-new-bone",
    },
    {
      id: 2,
      img: "https://media.everlane.com/images/c_fill,w_750,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/f9fdcd03_aaeb/womens-summer-jean-new-bone",
    },
    {
      id: 3,
      img: "https://media.everlane.com/images/c_fill,w_750,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/0598afbd_de9d/womens-summer-jean-new-bone",
    },
    {
      id: 4,
      img: "https://media.everlane.com/images/c_fill,w_750,ar_4:5,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/c66ce6a6_a8b2/womens-summer-jean-new-bone",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <ScrollTop />
      <div className="pt-20  bg-white">
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
      <section className=" justify-center gap-5 min-h-screen  flex flex-col lg:flex-row md:flex-col  lg:p-28 lg:pt-16 ">
        <div className="lg:h-screen  lg:grid lg:grid-cols-2 lg:gap-2 lg:min-h-screen ">
          <Slider {...settings} className="gap-5 lg:hidden" >
          {productimg.map((items) => {
            return (
              <div key={items.id} className=" h-auto w-[]">
                <img src={items.img} className="bg-red-500"/>
              </div>
            );
          })}
          </Slider>
          <div className="hidden md:hidden">
          {productimg.map((items) => {
            return (
              <div key={items.id} className=" h-auto w-[]">
                <img src={items.img} className="bg-red-500"/>
              </div>
            );
          })}
          </div>
        </div>

        {/* productinfodetails */}
        <div className="lg:sticky   lg:top-0 lg:w-[40%] pt-0 p-4 ">
          <div>
            <div className="MenOuterwearJacketsCoats  text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
              Men / Outerwear - Jackets & Coats
            </div>

            <div className=" justify-between items-start flex">
              <div className="   text-black text-2xl font-normal font-['Maison Neue'] ">
                {product.title}
              </div>
              <div className=" flex  items-center gap-1">
                <h1 className="line-through text-neutral-500 text-xs ">₹320</h1>
                <h1 className="text-base">
                  <span> ₹{product.price}</span>
                </h1>
              </div>
            </div>

            <div className="   justify-start items-center gap-2 inline-flex">
              <div className="Frame2 justify-start items-center gap-1 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <div className="  text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                5.0 (2 Reviews)
              </div>
            </div>
          </div>
          <div>
            <div className="w-full border-t-[1.5px] border-[#f5f4f4] mt-5  min-h-24  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="pt-2  justify-start items-start gap-3 inline-flex">
                <p className="Color text-black text-sm font-semibold font-['Maison Neue'] leading-none tracking-tight">
                  Color
                </p>
                <p className="BlackOlive text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-tight">
                  Black / Olive
                </p>
              </div>
              <div className="Frame2 pt-3  justify-start items-start  gap-3 flex">
                <div className="border border-black h-10 w-10 flex justify-center items-center  rounded-full">
                  <div className="bg-blue-900 rounded-full h-9 w-9" />
                </div>
                <div className="bg-amber-900 rounded-full h-9 w-9" />
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start  flex">
            <div className="Frame2  justify-between items-start flex gap-2">
              <p className="Size text-[#cd968c] text-sm font-semibold font-['Maison Neue'] leading-none tracking-tight">
                Please Select a Size
              </p>
              <p className=" text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-none tracking-tight">
                Size Guide
              </p>
            </div>
            <div className=" w-full pt-5  items-center gap-2 text-xs flex">
              <button className="w-12 py-4  rounded-lg bg-[#F5F4F4] hover:bg-black hover:text-white">
                XS
              </button>
              <button className="w-12 py-4 rounded-lg  bg-[#F5F4F4] hover:bg-black hover:text-white">
                S
              </button>
              <button className="w-12 py-4 rounded-lg  bg-[#F5F4F4] hover:bg-black hover:text-white">
                M
              </button>
              <button className="w-12 py-4 rounded-lg  bg-[#F5F4F4] hover:bg-black hover:text-white">
                L
              </button>
              <button className="w-12 py-4 rounded-lg  bg-[#F5F4F4] hover:bg-black hover:text-white">
                XL
              </button>
              <button className="w-12 py-4 rounded-lg  bg-[#F5F4F4] hover:bg-black hover:text-white">
                XXL
              </button>
            </div>
          </div>
          <div className=" flex  pt-5 gap-5 items-center  ">
            <button
              onClick={() => handleadd(product)}
              className="w-full py-3  bg-yellow-400 rounded-lg font-['Maison Neue'] leading-none tracking-tight"
            >
              Add to Bag
            </button>
            <button
              onClick={() => handleadd(product)}
              className="w-full py-3  bg-black text-white rounded-lg font-['Maison Neue'] leading-none tracking-tight"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-5 pt-10 border-t border-zinc-300 flex-col justify-start items-start gap-6 inline-flex">
            <div className="   justify-start  items-center gap-5 inline-flex">
              <div className="Download w-8 h-8 relative">
                {" "}
                <CiDeliveryTruck size={35} />
              </div>
              <div className=" grow gap-1 shrink basis-0 flex-col justify-start items-start inline-flex">
                <p className="FreeShipping self-stretch text-black text-lg font-semibold font-['Maison Neue']  ">
                  Shipping Discount
                </p>
                <div className="self-stretch  ">
                  <p className="text-black text-sm  font-normal font-['Maison Neue']  ">
                    Return within 45 days of purchase Duties & taxes are
                    non-refundable.{" "}
                    <span className="text-black text-sm pl-1 font-normal font-['Maison Neue'] underline leading-none tracking-tight">
                      Returns Details.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="  self-stretch justify-start  items-center gap-5 inline-flex">
              <div className="Download w-8 h-8 relative">
                {" "}
                <BsBox size={35} />
              </div>
              <div className=" grow gap-1 shrink basis-0 flex-col justify-start items-start inline-flex">
                <p className="FreeShipping self-stretch text-black text-lg font-semibold font-['Maison Neue'] ">
                  Easy Returns
                </p>
                <div className="self-stretch  ">
                  <p className="text-black text-sm  font-normal font-['Maison Neue'] ">
                    Return within 45 days of purchase Duties & taxes are
                    non-refundable.
                    <span className="text-black text-sm pl-1 font-normal font-['Maison Neue'] underline tracking-tight">
                      Returns Details.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="  self-stretch justify-start  items-center gap-5 inline-flex">
              <div className="Download w-8 h-8 relative">
                {" "}
                <IoGiftOutline size={35} />
              </div>
              <div className=" grow gap-1 shrink basis-0 flex-col justify-start items-start inline-flex">
                <p className="FreeShipping self-stretch text-black text-lg font-semibold font-['Maison Neue']  ">
                  Send It As A Gift
                </p>
                <div className="self-stretch  ">
                  <p className="text-black text-sm  font-normal font-['Maison Neue']  ">
                    Add a free personalized note during checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="  h-[361px]  pt-10 pb-3 border-t border-zinc-300 flex-col justify-start items-start gap-4 inline-flex">
            <div className=" self-stretch text-black text-base font-semibold font-['Maison Neue']  tracking-tight">
              Part shirt, part jacket, all style.
            </div>
            <div className="self-stretch text-black text-sm  font-normal font-['Maison Neue']  ">
              {product.desc}
            </div>
          </div>

          <div className="Frame2  h-16 py-5 border-b border-zinc-300 justify-start items-center inline-flex">
            <div className="Model w-28 text-black text-base font-semibold font-['Maison Neue'] ">
              Model
            </div>
            <div className="ModelIs62WearingASizeM grow shrink basis-0 text-black text-sm font-normal font-['Maison Neue'] ">
              Model is 6′2″, wearing a size M
            </div>
          </div>
          <div className="Frame7  h-24 py-5 border-b border-zinc-300 justify-start items-start inline-flex">
            <div className="Fit w-28 text-black text-base font-semibold font-['Maison Neue'] leading- tracking-tight">
              Fit
            </div>
            <div className="QuestionsAboutFitContactUsSizeGuide grow shrink basis-0 text-black text-sm font-normal font-['Maison Neue']  tracking-wider">
              Questions about fit?
              <br />
              Contact Us
              <br />
              Size Guide
            </div>
          </div>
          <div className="Frame6  h-32 py-5 border-b border-zinc-300 flex-col justify-start items-start inline-flex">
            <div className="Sustainability self-stretch text-black text-base font-semibold font-['Maison Neue']  tracking-tight">
              Sustainability
            </div>
            <img
              className="Screenshot20231130At5191 self-stretch h-16"
              src=".\Img\Screenshot 2023-11-30 at 5.19 1.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductInfo;

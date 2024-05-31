import React, { useRef, useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoEllipseOutline } from "react-icons/io5";
import { IoEllipseSharp } from "react-icons/io5";
import feedback from "./feedback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBagHandle } from "react-icons/io5";

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
function Men() {
  const [currentItem, setCurrentItem] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "60px",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const feedbycustomer = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? feedback.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentItem((prev) => (prev === feedback.length - 1 ? 0 : prev + 1));
  };

  const shopping = [
    {
      img: "../Img/image0(31).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(32).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(33).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(34).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(31).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(32).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "../Img/image0(33).png",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
    {
      img: "https://static.pxlecdn.com/photos/465270264/medium/1c36168003f3d3bb8e75.jpg",
      text: "The Linen Daytripper Shirtdress",
      price: "₹3790",
      Newprice: "₹2790",
    },
  ];
  const review = [
    {
      text: "People Are Talking",
    },
  ];
  return (
    <div className="font-['Maison Neue']  min-w-full  pt-20">
      <div className=" bg-white">
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
      <div className=" bg-[url('https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg')]   md:bg-[url('https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]   bg-center bg-cover bg-no-repeat md:bg-center md:bg-cover h-[77vh] md:h-[50vh] lg:h-full  md:w-[100]">
        <div className=" h-[77vh] md:h-[50vh] lg:h-[77vh]  bg-black/45 flex justify-center items-center flex-col ">
          <div className=" text-center  text-white space-y-2 ">
            <h1 className="text-lg font-['Maison Neue']">
              Summer <span className="text-red-600">sale</span>
            </h1>
            <h1 className="text-5xl">
              25% off All <br className="lg:hidden" /> Linen
            </h1>
            <p className="text-lg font-light">
              Explore best-selling Indian wedding-inspired styles for your
              partner
            </p>
          </div>
          <Link
            to="/collections"
            className="flex justify-center items-center pt-8 "
          >
            <button className=" border rounded-md lg:rounded-md   border-white text-center hover:duration-700   hover:bg-zinc-900 md:hover:text-white justify-center items-center  px-24 py-4 md:text-white text-white text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              {" "}
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Crosolefffect by catogory  */}
      <div className=" min-h-screen lg:min-h-[50%]  lg:p-10">
        <div className=" flex justify-center items-center h-[90px] ">
          <h1 className="text-xl leading-none tracking-tight">
            Shop by Category
          </h1>
        </div>

        <div className="grid   grid-cols-2 gap-7 lg:flex  content-center ">
          {[
            {
              img: "../Img/image(36).png",
              text: "Pants",
            },
            {
              img: "../Img/image(35).png",
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
              img: "../Img/image(34).png",
              text: "Otherwear",
            },
            {
              img: "../Img/image(35).png",
              text: "Shoes & Accercries",
            },
          ].map((items, i) => (
            <div key={i} className="flex flex-col uppercase text-center">
              <img className="" src={items.img} alt={items.text} />
              <Link
                to="/collection"
                className="underline font-['Maison Neue'] text-lg hover:text-gray-500"
              >
                {items.text}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* newarriver */}

      <div className="lg:h-[548px]  flex flex-col lg:flex-row lg:justify-around lg:pl-10 lg:pr-10 gap-5 mt-4 lg:mt-0">
        <div className="bg-[url('https://images.pexels.com/photos/18390666/pexels-photo-18390666/free-photo-of-photo-of-an-affectionate-couple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat h-[500px] md:h-[100%] lg:w-[437px]  lg:h-[548px]  ">
          <div className="h-[500px]  md:h-[66vh]  bg-black/20 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl ">Best Dress Edit</h1>
            <Link
              to="/collections"
              className="flex justify-center items-center pt-8"
            >
              <button className=" bg-white rounded-sm   text-center hover:duration-700 text-black  hover:bg-zinc-900 md:hover:text-white justify-center items-center px-10 uppercase py-3 md:text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider ">
                {" "}
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[url('https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat h-[500px] md:h-[100%] lg:w-[437px]  lg:h-[548px]  ">
          <div className="h-[500px]  md:h-[66vh]  bg-black/20 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl ">Best Dress Edit</h1>
            <Link
              to="/collections"
              className="flex justify-center items-center pt-8"
            >
              <button className=" bg-white rounded-sm   text-center hover:duration-700 text-black  hover:bg-zinc-900 md:hover:text-white justify-center items-center px-10 uppercase py-3 md:text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider ">
                {" "}
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[url('https://images.unsplash.com/photo-1505837070343-f0f1722298ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGluZGlhbiUyMGNvdXBsZSUyMGluJTIwbG92ZXxlbnwwfDF8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat h-[500px] md:h-[100%] lg:w-[437px]  lg:h-[548px]  ">
          <div className="h-[500px]  md:h-[66vh]  bg-black/20 flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl ">Best Dress Edit</h1>
            <Link
              to="/collections"
              className="flex justify-center items-center pt-8"
            >
              <button className=" bg-white rounded-sm   text-center hover:duration-700 text-black  hover:bg-zinc-900 md:hover:text-white justify-center items-center px-10 uppercase py-3 md:text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider ">
                {" "}
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* everlen crosal */}

      <div className="  h-3/4  ">
        <div className="  flex justify-center items-center p-5 lg:pt-10 ">
          <h1 className="text-center  font-['Maison Neue']  tracking-tight text-[22px] leading-8">
            Summer styles wedding style dress
          </h1>
        </div>

        <div className="lg:pl-10 lg:pr-10 md:pr-5 md:pl-5 ">
          <Slider {...settings} className="">
            {shopping.map((items, i) => (
              <div key={i} className=" p-1  ">
                <div className=" ">
                  <img
                    className="lg:h-[357px] lg:w-[286px] object-cover"
                    src={items.img}
                  />
                </div>
                <div className="pt-2  leading-none flex gap-1">
                  <h1 className="font-light text-xs">{items.text}</h1>
                  <p className="font-normal text-sm text-gray-400 line-through ">
                    {items.price}
                  </p>
                  <p className="font-medium text-sm ">{items.Newprice}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* banner*/}
      <div className="min-h-[410px] flex  justify-center items-center p-4 md:pr-5 md:pl-5 ">
        <div className="bg-[url('https://images.unsplash.com/photo-1677753670021-123aba554171?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center bg-no-repeat h-[300px] w-[350px] lg:w-[1337px] object-cover sm:w-full ">
          <div className="bg-black/25 min-h-[300px] flex items-center justify-center flex-col ">
            <h1 className="text-white text-center text-[32px]  font-['Maison Neue'] leading-10 ">
              We're on a Mission <br className="lg:hidden" /> To Clean Up the
              industry{" "}
            </h1>
            <Link to="/collections" className="p-3">
              <button className="bg-white rounded-xl text-center hover:duration-700 text-black  hover:bg-zinc-900 md:hover:text-white justify-center items-center px-10 uppercase py-3 md:text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider ">
                {" "}
                Read
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* crosel */}

      <div className="h-screen md:h-[50%] md:pr-5 md:pl-5  md lg:p-10 justify-center relative flex flex-col overflow-hidden">
        <div className="flex overflow-x-hidden p-4 lg:border-b lg:pb-12  lg:w-full">
          <h1 className="lg:text-lg text-xs lg:hidden leading-none tracking-wider absolute top-0 pt-8 ">
            People Are Talking
          </h1>
          <div className=" flex  justify-center items-center">
            <FaChevronLeft 
              size={20}
              className="absolute lg:left-24  left-4 text-[12px]  cursor-pointer "
              onClick={prevItem}
            />
            <FaChevronRight
              size={20}
              className="absolute lg:right-24 right-4 text-[12px] cursor-pointer leading-5"
              onClick={nextItem}
            />
          </div>

          <div className="flex   justify-center w-full  ">
            {feedback.map((items, i) => {
              return (
                <div
                  key={items.id}
                  className={`min-w-[300px] transition-all  duration-300 ${
                    i === currentItem ? "ml-0" : "hidden"
                  }`}
                >
                  <div className="sm:flex-row-reverse sm:p-4 sm:gap-5 flex flex-col justify-center items-center ">
                   <div className="">
                   <img
                      src={items.image}
                      className=" w-[400px] lg:h-[711px] lg:w-[569px] object-cover "
                      alt={`Feedback ${i}`}
                    />
                   </div>
                    <div className="pt-5  lg:w-[570px] lg:h-[279px] ">
                      <div>
                      <p className="lg:text-[18px] text-xs text-neutral-500 leading-6 ">{items.customer}</p>
                      <p className="lg:text-[24px]  text-sm  leading-0 lg:leading-8 pt-3">{items.text}</p>
                      <p className="lg:text-[16px] text-xs leading-5 font-light pt-3">
                        {items.place}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* cotten */}
      <div className="  flex flex-col lg:flex-row md:pr-5 md:pl-5 md:gap-0 gap-3  font-['Maison Neue'] justify-center items-center leading-none tracking-wider">
        <div className="text-center p-4 space-y-6 md:space-y-3">
          <h1 className="text-[24px] ">Holiday Gift Pack</h1>
          <img
            src="https://cdn.pixabay.com/photo/2019/07/28/01/31/traditional-4367791_1280.jpg"
            alt=""
            className=" lg:h-[640px] lg:w-[512px]"
          />
          <p className=" text-neutral-800 text-[14px] space-x-[0.24px] leading-5 font-normal">
            The best present for everyone in your list
          </p>
          <div className="h-12 px-5 py-3.5 justify-center items-center gap-2.5 flex">
            <Link
              to="/about"
              className="text-center text-neutral-800 text-sm lg:text-[14px] lg:leading-5 font-normal font-['Maison Neue'] underline leading-tight tracking-wider"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="text-center p-4 space-y-6 ">
          <h1 className="text-[24px]   ">Best Indian culture</h1>
          <img
            src="https://images.unsplash.com/photo-1519307212971-dd9561667ffb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="lg:h-[640px] lg:w-[512px]"
          />
          <p className=" text-neutral-800 text-[14px] space-x-[0.24px] leading-5 font-normal">
            The best present for everyone in your list
          </p>
          <div className="h-12 px-5  justify-center items-center flex">
            <Link
              to="/about"
              className="text-center text-neutral-800 lg:text-[14px] lg:leading-5 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* everlenonyou */}
      <div className="md:pr-5 md:pl-5   min-h-[75%] flex flex-col lg:p-10  p-5 ">
        <div className=" border-t  pt-5 flex-col justify-start items-center gap-6 flex">
          <h1 className="text-center text-neutral-800 text-3xl font-normal font-['Maison Neue'] leading-10">
            Everlane On You
          </h1>
          <div className=" flex-col justify-start items-center gap-1 flex">
            <h1 className="text-center text-neutral-500 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
              Share your latest look with #EverlaneOnYou for a chance to be
              featured.
            </h1>
            <p className="text-center pt-3 text-neutral-800 text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
              Add Your Photo
            </p>
          </div>
        </div> 
        <div className="   ">
          <Slider {...feedbycustomer} className="">
            {shopping.map((items, i) => (
             <div key={i} className="lg:h-[323px] outline-none ">
             <div className="relative top-9 left-3  bg-white h-6 w-6  rounded-full flex justify-center items-center">
                  <IoBagHandle className=""/>
                </div>

             <img src={items.img} alt=""  className= " lg:h-[100%] lg:w-[100%]  object-contain"/>
            

             </div>
            ))}
          </Slider>
        </div>
        <div></div>
      </div>
      {/* trustfactor coloserl */}
      <div className="h-[65vh] lg:h-[30vh] md:pr-5 md:pl-5  md:h-[50%] p-5 flex flex-col  justify-center ">
        <div className="border-t pt-6  lg:border-none lg:justify-around md:border-none  lg:flex-row md:flex-row border-neutral-800 justify-center items-center gap-10 flex-col  flex">
          <div className="flex flex-col justify-center items-center">
            <img src="../Img/image(302).png" alt="" className="w-[50px] " />
            <div className="text-center space-y-1 pt-4 text-xs">
              <h1 className="">Complimentary Shipping</h1>
              <p className="">Enjoy free shipping on U.S. orders over $100.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="../Img/image(301).png" alt="" className=" w-[50px]" />
            <div className="text-center space-y-1 pt-4 text-xs">
              <h1 className="">Complimentary Shipping</h1>
              <p className="">Enjoy free shipping on U.S. orders over $100.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="../Img/image(300).png" alt="" className=" w-[50px]" />
            <div className="text-center space-y-1 pt-4 text-xs">
              <h1 className="">Complimentary Shipping</h1>
              <p className="">Enjoy free shipping on U.S. orders over $100.</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Men;

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

function Header({ frame1 }) {
  const [searchbar, setSearchBar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setSearchBar(!searchbar);
  };

  const handleLinkClick = (link) => {
    if (!activeLink) {
      setActiveLink(link);
    }
  };

  const handleNewArrivalsHover = () => {
    setShowDropdown(true);
  };

  const handleNewArrivalsLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="w-full fixed z-[9999] bg-white  h-36">
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
      <div
        onMouseLeave={handleNewArrivalsLeave}
        className="border-b self-stretch border-zinc-2`00   flex h-[59px] w-[294] px-16 justify-between items-center"
      >
        <div className="flex  justify-start items-start  gap-5 px-3 py-5  h-[56px]  text-neutral-800 leading-none tracking-tight font-['Maison Neue'] font-normal text-xs">
          {[
            {
              text: "Women",
              link: "/#",
            },
            {
              text: "Men",
              link: "/men",
            },
            { text: "About", link: "/about" },
            { text: "Everworld Stories", link: "/everworld-stories" },
          ].map((item, i) => (
            <div key={i}>
              <Link
                to={item.link}
                onClick={() => handleLinkClick(item.link)}
                className={`hover:bg-gray-300 px-2 py-3 rounded-md ${
                  activeLink === item.link ? "bg-gray-400" : ""
                }`}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="  w-32 h-3.5 px-1 py-7">
          <Link to="/">
            <img src="..\Img\Logo.png" alt="brand logo" />
          </Link>
        </div>
        <div className="flex gap-2.5 text-lg  p-3 ">
          <div className="text-black">
            <CiSearch
              size={25}
              onClick={toggleDropdown}
              className="cursor-pointer"
            />{" "}
            {/* Search Icon */}
          </div>
          {searchbar && (
            <div className="absolute top-full right-0 left-0 flex justify-center items-center flex-col bg-gray-200   text-xs font-['Maison Neue'] leading-none tracking-tight h-[406px] text-neutral-800 py-[143px]  ">
              <input type="text" placeholder="Search..." />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quam placeat quisquam ipsa numquam expedita,
                reiciendis facilis amet, corporis nobis laborum! Voluptates
                nihil nobis obcaecati possimus. Consectetur corporis dolores
                velit!
              </p>
              {/* Add more dropdown menu items here if needed */}
            </div>
          )}
          {[
            {
              text: <FaRegUser size={25} />,
              link: "/login",
            },
            {
              text: <FiShoppingCart size={25} />,
              link: "/cart",
            },
          ].map((item, i) => (
            <div key={i} className=" text-black">
              <Link to={item.link}>{item.text}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="h-14 self-stretch flex justify-center border-b border-zinc-100 items-center gap-8 ">
        {frame1 &&
          frame1.map((items, i) => (
            <div
              key={i}
              className="text-neutral-800 leading-none px-2 py-6 tracking-tight font-['Maison Neue'] font-normal text-xs"
            >
              <Link
                to={items.link}
                onMouseEnter={handleNewArrivalsHover}
                className={`${i === 7 && "text-red-600"}`}
              >
                {items.text}
              </Link>
            </div>
          ))}
      </div>
      {showDropdown && ( // Render dropdown based on state
        <div
          onMouseLeave={handleNewArrivalsLeave}
          className=" self-stretch flex  items-center justify-center gap-10 h-[50vh]   "
        >
          <div className="">
            <h1 className="uppercase text-xs">HIGHLIGHTS</h1>
            <div className=" font-['Maison Neue'] pt-3 ">
              <Link to="/collections">
                {" "}
                <h1 className="pt-3 rounded-md py-3 hover:text-2xl">
                  Shop All New Arrivals
                </h1>
              </Link>
              <h1 className="pt-3">New Bottoms</h1>
              <h1 className="pt-3">New Tops</h1>
              <h1 className="pt-3">T-Shirts Bundels</h1>
            </div>
          </div>
          <div>
            <h1 className="uppercase text-xs">FEATURED SHOPS</h1>
            <div className=" font-['Maison Neue'] pt-3 ">
              <h1 className="pt-3">The Transitional Edit</h1>
              <h1 className="pt-3">The Linen Edit</h1>
              <h1 className="pt-3">Uniform & Capsule Staples</h1>
              <h1 className="pt-3">The Performance Chino Shop</h1>
            </div>
          </div>
          <div className="bg-[url('../Img/Frame1.png')] bg-cover bg-center bg-no-repeat   h-60 w-60">
            <div className="flex justify-center items-end py-[120px] px-[16px] gap-4 ">
              <h1 className="text-white w-48  text-2xl font-semibold font-['Maison Neue'] leading-loose  ">
                The Holiday Outfit Edit
              </h1>
              <FaArrowRightLong
                size={24}
                className=" text-white   w-6 h-6 relative"
              />
            </div>
          </div>
          <div className="bg-[url('../Img/Frame3.png')] bg-cover bg-center bg-no-repeat   h-60 w-60">
            <div className="flex justify-center items-end py-[120px] px-[16px] gap-4 ">
              <h1 className="text-white w-48  text-2xl font-semibold font-['Maison Neue'] leading-loose  ">
                The Holiday Outfit Edit
              </h1>
              <FaArrowRightLong
                size={24}
                className=" text-white   w-6 h-6 relative"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

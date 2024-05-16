import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { AiOutlineClose } from "react-icons/ai";
import Loginsign from "../Auth/Loginsign";
import { useSelector } from "react-redux";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logincom from "./Logincom";

// items-center text-xs font-['Maison Neue']

function Header({ frame1 }) {
  const item = useSelector((state) => state.cart);
  const [searchbar, setSearchBar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [navabar, setNavabar] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Women");
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

  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const [userOpen, setUserOpen] = useState(false);

  const handeluserClick = () => {
    setUserOpen(!userOpen);
  };
  const [bgColor, setBgColor] = useState("bg-yellow-600");
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prevColor) =>
        prevColor === "bg-yellow-600" ? "bg-black" : "bg-yellow-600"
      );
    }, 5000); // Change color every 4 seconds

    return () => clearInterval(interval); // Clear the interval if component unmounts
  }, []);

  return (
    <div className=" w-full fixed top-0 left-0 bg-white z-50     shadow-lg ">
      {/* banner */}
      <div className={`flex  ${bgColor} justify-center items-center`}>
        <div className="lg:gap-5 flex  justify-center items-center h-9 lg:h-6 gap-1 text-xs font-['Maison Neue']">
          <h1 className={`text-white ${bgColor === "bg-black" ? "hidden" : ""}`}>
            Get early access on launching and offers.
          </h1>
          <div className="flex lg:gap-3">
          <a href="#" className={`cursor-pointer underline lg:block leading-none tracking-tight ${ bgColor === "bg-black" ? "" : "hidden"}`}>
            Sign Up For Texts 
          </a>
          <p><FaArrowRightLong /></p>
          </div>
        </div>
        <div className={` ${bgColor === "bg-black" ? "" : "hidden"} text-xs  text-white font-normal font-['Maison Neue'] `}>
         <div className="lg:w-full flex items-center justify-center ">
         <Link
            to="/men"
            className={`underline `}
          >
            Shop Here
          </Link>
         </div>
          <h1
            className={` lg:block absolute right-0 pr-2 top-1   ${
              bgColor === "bg-black" ? "" : "hidden"
            } text-white`}
          >
            IND
          </h1>
        </div>
      </div>

      {/* navbar */}
      <div onMouseLeave={handleNewArrivalsLeave} className="flex p-3 lg:h-16 justify-between" >
        <div className="flex justify-center items-center lg:hidden  ">
          {navabar ? (
            <AiOutlineClose
              size={25}
              onClick={() => {
                setNavabar(!navabar);
              }}
            />
          ) : (
            <HiOutlineBars3
              size={25}
              onClick={() => {
                setNavabar(!navabar);
              }}
            />
          )}
        </div>

        <div className=" text-neutral-800 hidden lg:gap-2 lg:flex lg:justify-center lg:items-center  leading-none tracking-tight font-['Maison Neue'] font-normal text-xs">
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
                  activeLink === item.link ? "border-b-2 border-gray-400 rounded-none" : ""
                }`}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="   flex justify-center items-center pl-5  ">
          <Link to="/">
            {/* <img
              src="..\Img\Logo.png"
              className="bg-cover bg-center bg-no-repeat"
              alt="brand logo"
            /> */}
            <h1 className="font-extrabold text-lg">HappyHarbor</h1>
          </Link>
        </div>
        <div className="flex items-center lg:gap-2  text-lg  md:p-4 ">
          <div className="text-black hover:bg-gray-100 rounded-md ">
            <CiSearch
              size={20}
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
              </p>
              {/* Add more dropdown menu items here if needed */}
            </div>
          )}
          <div
            className="hover:bg-gray-100 hidden md:block rounded-md py-2 px-3"
            // onClick={handeluserClick}
          >
            <Link to="/Signup">
              <FaRegUser size={18} />
            </Link>
          </div>
          {/* {userOpen && (
            <div>
              <div>
                <Loginsign />
              </div>
              <div>
                {" "}
                <AiOutlineClose
                  size={20}
                  onClick={handleCartClick}
                  className="cursor-pointer absolute  top-5 right-5"
                />
              </div>
            </div>
          )} */}
          <div
            className="text-black hover:bg-gray-100 rounded-md py-2 px-3 cursor-pointer"
            onClick={handleCartClick}
          >
            <FiShoppingCart size={18} />
            {item.length === 0 ? (
              ""
            ) : (
              <div className="absolute top-12 right-3 rounded-full bg-black px-1 text-white text-xs">
                {item.length}
              </div>
            )}
          </div>

          {/* Render the Cart component based on cartOpen state */}
          {cartOpen && (
            <div className="backdrop-blur-none z-50 fixed inset-0">
              <div>
                <Cart />
              </div>
              <div>
                {" "}
                <AiOutlineClose
                  size={20}
                  onClick={handleCartClick}
                  className="cursor-pointer absolute  top-5 right-5"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        {navabar && (
          <div>
            <div className="sticky min-h-screen  w-11/12  ">
              <div className=" flex items-center p-1 font-normal font-['Maison Neue'] leading-none tracking-tight text-xl">
                <h1
                  onClick={() => {
                    setSelectedSection("Women");
                  }}
                  className={`w-1/2 py-2 hover:bg-gray-300 rounded-md text-center ${
                    selectedSection === "Women" && "bg-gray-300"
                  }`}
                >
                  Women
                </h1>
                <h1
                  onClick={() => {
                    setSelectedSection("Men");
                  }}
                  className={`w-1/2 py-2 hover:bg-gray-300 rounded-md text-center ${
                    selectedSection === "Men" && "bg-gray-300"
                  }`}
                >
                  Men
                </h1>
              </div>
              {/* Render subsections based on the selected section */}
              {selectedSection === "Women" && (
                <div className="p-5 text-2xl space-y-3 font-['Maison Neue'] ">
                  <div>
                    <Link to="#">Home</Link>
                  </div>
                  <div>New Arrivals</div>
                  <div>Clothing</div>
                  <div>Jeans & Denim</div>
                  <div>Shoes</div>
                  <div>Bags & Accessories</div>
                  <div className="text-red-600">Sale</div>
                  <Logincom />
                </div>
              )}
              {selectedSection === "Men" && (
                <div className="p-5 text-2xl space-y-3 font-['Maison Neue']">
                  <div>
                    <Link to="#">Home</Link>
                  </div>
                  <div>New Arrivals</div>
                  <div>Clothing</div>
                  <div>Jeans & Shirt</div>
                  <div>T-shirt</div>
                  <div>Shoes</div>
                  <div>Bags & Accessories</div>
                  <div className="text-red-600">Sale</div>
                  <Logincom />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="hidden border-b border-zinc-100  lg:justify-center shadow-xl lg:flex-row lg:flex gap-5">
        {frame1 &&
          frame1.map((items, i) => (
            <div
              key={i}
              className="text-neutral-800 leading-none px-2 py-2  tracking-tight font-['Maison Neue'] font-normal text-xs"
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
          className=" self-stretch flex bg-white  items-center justify-center gap-10 h-[50vh]   "
        >
          <div className="">
            <h1 className="uppercase text-xs">HIGHLIGHTS</h1>
            <div className=" font-['Maison Neue'] pt-3 ">
              <Link to="/collections">
                {" "}
                <h1 className="pt-3 rounded-md py-3 hover:text-zinc-400">
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
          <div className="bg-[url('../Img/Frame1.png')] bg-cover bg-center bg-no-repeat   h-60 ">
            <div className="flex justify-center items-end py-[120px] px-[16px] gap-4 ">
              <h1 className="text-white   text-2xl font-semibold font-['Maison Neue'] leading-loose  ">
                The Holiday Outfit Edit
              </h1>
              <FaArrowRightLong
                size={24}
                className=" text-white    h-6 relative"
              />
            </div>
          </div>
          <div className="bg-[url('../Img/Frame3.png')] bg-cover bg-center bg-no-repeat   h-60 ">
            <div className="flex justify-center items-end py-[120px] px-[16px] gap-4 ">
              <h1 className="text-white   text-2xl font-semibold font-['Maison Neue'] leading-loose  ">
                The Holiday Outfit Edit
              </h1>
              <FaArrowRightLong
                size={24}
                className=" text-white    h-6 relative"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

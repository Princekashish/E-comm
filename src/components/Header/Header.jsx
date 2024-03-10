import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header({ frame1 }) {
  const [hoverlink, sethoverlink] = useState(null);
  const [showdropdown, setshowdropdown] = useState(false);
  const [searchbar, setsearchbar] = useState("");

  const toggleDropdown = () => {
    setsearchbar(!searchbar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setsearchbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
      <div className="border-b self-stretch border-zinc-300   flex h-[59px] w-[294] px-16 justify-between items-center">
        <div className="flex  justify-start items-start  gap-3 px-3 py-5  h-[56px]  text-neutral-800 leading-none tracking-tight font-['Maison Neue'] font-normal text-xs">
          {[
            {
              text: "Women",
              link: "/women",
              dropdownItems: [
                "items",
                "Shop All New Arrivals",
                "The Gift Guide",
                "New Bottoms",
                "New Tops",
                "T-shirt",
                "Under 1000",
              ],
            },
            {
              text: "Men",
              link: "/men",
              dropdownItems: [
                "Highlights",
                "Shop All New Arrivals",
                "The Gift Guide",
                "New Bottoms",
                "New Tops",
                "T-shirt",
                "Under 1000",
              ],
            },
            { text: "About", link: "/about" },
            { text: "Everworld Stories", link: "/everworld-stories" },
          ].map((item, i) => {
            return (
              <div key={i}>
                <Link
                  to={item.link}
                  onMouseEnter={() => {
                    sethoverlink(item.text);
                    setshowdropdown(
                      item.text === "Women" || item.text === "Men"
                    );
                  }}
                  onMouseLeave={() => {
                    sethoverlink(null);
                  }}
                  className={`${
                    hoverlink === item.text ? "border-b-2 border-black" : ""
                  }`}
                >
                  {item.text}
                </Link>
                {(hoverlink === item.text ||
                  (showdropdown &&
                    (item.text === "Women" || item.text === "Men"))) &&
                  item.dropdownItems && (
                    <div
                      className="absolute top-full left-0 bg-gray-200 w-full flex flex-col gap-3 text-xs font-['Maison Neue'] leading-none tracki h-[406px] text-neutral-800 py-[143px]  "
                      onMouseLeave={() => setshowdropdown(false)}
                    >
                      {item.dropdownItems.map((items, i) => (
                        <div key={i} className={`${i === 0 && "uppercase "}`}>
                          {items}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
        <div className="  w-32 h-3.5 px-1 py-7">
          <Link to="/">
            <img src="..\Img\Logo.png" alt="brand logo" />
          </Link>
        </div>
        <div className="flex gap-2.5 text-lg  p-3 ">
          <div className="text-black">
            <CiSearch size={32} onClick={toggleDropdown} /> {/* Search Icon */}
          </div>
          {searchbar && (
            <div className="absolute top-full right-0 left-0 flex justify-center items-center flex-col bg-gray-200  text-xs font-['Maison Neue'] leading-none tracki h-[406px] text-neutral-800 py-[143px]  ">
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
              text: <FaRegUser />,
              link: "/login",
            },
            {
              text: <FiShoppingCart />,
              link: "/cart",
            },
          ].map((item, i) => {
            return (
              <div key={i} className=" text-black">
                <Link to={item.link}>{item.text}</Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-14 self-stretch flex justify-center items-center gap-8">
        {frame1 &&
          frame1.map((items, i) => (
            <div
              key={i}
              className="text-neutral-800 leading-none tracking-tight font-['Maison Neue'] font-normal text-xs"
            >
              <Link to={items.link} className={`${i === 8 && "text-red-600"}`}>
                {items.text}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Header;

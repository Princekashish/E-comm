import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";

function Footer() {
  const [account, setAccount] = useState(false);
  const [comapany, setComapany] = useState(false);
  const [help, setHelp] = useState(false);
  const [contact, setContact] = useState(false);


  // bg-[#F5F4F4]

  return (
    <div className="min-h-[500px] mt-7 md:min-h-[300px]  bg-[#F5F4F4]  flex flex-col  ">
      <div className="md:flex md:gap-16 md:p-6 md:h-[300px] ">
        <div className="  w-full md:w-[50%]  md:flex-row  flex flex-col justify-between ">
          {/* account */}
          <div onClick={() => { setAccount(!account) }}
            className="px-5  min-h-14 border-b md:border-none flex mt-6 flex-col "          >
            <div className="flex   justify-between items-center md:justify-around w-full ">
              <div>
                <h1 className="text-neutral-800 md:text-[13px]  font-['Maison Neue'] text-lg font-medium">
                  Account
                </h1>
                <div className="hidden md:block md:text-base md:leading-none md:tracking-tight md:font-thin   md:flex-col ">
                  {[
                    {
                      text: "Login",
                      link: "/login",
                    },
                    {
                      text: "Sign up",
                      link: "/signup",
                    },
                    {
                      text: "Redeem a Gift Card",
                      link: "/redeemagiftcard",
                    },
                  ].map((items, i) => {
                    return (
                      <div key={i} className="pt-2">
                        <Link
                          to={items.link}
                          className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                        >
                          {items.text}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:hidden">
                {account ? (
                  <GrSubtract
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setAccount(!account)}
                  />
                ) : (
                  <IoMdAdd
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setAccount(!account)}
                  />
                )}
              </div>
            </div>
            {account && (
              <div className=" w-full px-5 h-24">
                {[
                  {
                    text: "Login",
                    link: "/login",
                  },
                  {
                    text: "Sign up",
                    link: "/signup",
                  },
                  {
                    text: "Redeem a Gift Card",
                    link: "/redeemagiftcard",
                  },
                ].map((items, i) => {
                  return (
                    <div key={i} className="pt-2">
                      <Link
                        to={items.link}
                        className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                      >
                        {items.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Company */}
          <div
            onClick={() => {setComapany(!comapany) } }
            className="px-5   min-h-14 border-b md:border-none flex mt-6 flex-col"
          >
            <div className="flex   justify-between items-center  w-full">
              <div className="">
                <h1 className="text-neutral-800  text-lg md:text-[13px] font-medium">
                  Company
                </h1>
                <div className=" w-full space-y-1 hidden md:block md:px-0  px-5 min-h-24 md:text-base md:leading-none md:tracking-tight md:font-thin ">
                  {[
                    {
                      text: "About",
                      link: "/about",
                    },
                    {
                      text: "Environmentenal Initiative",
                      link: "/environmentenalinitiative",
                    },
                    {
                      text: "Factories",
                      link: "/Factories",
                    },
                    {
                      text: "DEI",
                      link: "/DEI",
                    },
                    {
                      text: "Careers",
                      link: "/careers",
                    },
                    {
                      text: "International",
                      link: "/international",
                    },
                    {
                      text: "Accessibility",
                      link: "/accessibility",
                    },
                  ].map((items, i) => {
                    return (
                      <div key={i} className="pt-1 ">
                        <Link
                          to={items.link}
                          className="font-['Maison Neue']  text-neutral-500 text-sm font-normal hover:text-black"
                        >
                          {items.text}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:hidden">
                {comapany ? (
                  <GrSubtract
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setComapany(!comapany)}
                  />
                ) : (
                  <IoMdAdd
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setComapany(!comapany)}
                  />
                )}
              </div>
            </div>
            {comapany && (
              <div className=" w-full space-y-1  px-5 min-h-24">
                {[
                  {
                    text: "About",
                    link: "/about",
                  },
                  {
                    text: "Environmentenal Initiative",
                    link: "/environmentenalinitiative",
                  },
                  {
                    text: "Factories",
                    link: "/Factories",
                  },
                  {
                    text: "DEI",
                    link: "/DEI",
                  },
                  {
                    text: "Careers",
                    link: "/careers",
                  },
                  {
                    text: "International",
                    link: "/international",
                  },
                  {
                    text: "Accessibility",
                    link: "/accessibility",
                  },
                ].map((items, i) => {
                  return (
                    <div key={i} className="pt-1 ">
                      <Link
                        to={items.link}
                        className="font-['Maison Neue']  text-neutral-500 text-sm font-normal hover:text-black"
                      >
                        {items.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* help */}
          <div
            onClick={() => setHelp(!help)}
            className="px-5  min-h-14 border-b md:border-none flex mt-6 flex-col"
          >
            <div className="flex   justify-between items-center  w-full">
              <div>
                <h1 className="text-neutral-800 text-lg md:text-[13px] font-medium">
                  Get Help
                </h1>
                <div className="  w-full  hidden md:block md:px-0   px-5 min-h-24 md:text-base md:leading-none md:tracking-tight md:font-thin ">
                  {[
                    {
                      text: "Help Center",
                      link: "/helpcenter",
                    },
                    {
                      text: "Return Policy",
                      link: "/returnpolicy",
                    },
                    {
                      text: "Shipping Info",
                      link: "/shippingingo",
                    },
                    {
                      text: "Bulk Order",
                      link: "/bulkorder",
                    },
                  ].map((items, i) => {
                    return (
                      <div key={i} className="pt-2">
                        <Link
                          to={items.link}
                          className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                        >
                          {items.text}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:hidden">
                {help ? (
                  <GrSubtract
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setHelp(!help)}
                  />
                ) : (
                  <IoMdAdd
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setHelp(!help)}
                  />
                )}
              </div>
            </div>
            {help && (
              <div className="  w-full    px-5 min-h-24">
                {[
                  {
                    text: "Help Center",
                    link: "/helpcenter",
                  },
                  {
                    text: "Return Policy",
                    link: "/returnpolicy",
                  },
                  {
                    text: "Shipping Info",
                    link: "/shippingingo",
                  },
                  {
                    text: "Bulk Order",
                    link: "/bulkorder",
                  },
                ].map((items, i) => {
                  return (
                    <div key={i} className="pt-2">
                      <Link
                        to={items.link}
                        className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                      >
                        {items.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* contact */}
          <div
            onClick={() => setContact(!contact)}
            className="px-5  min-h-14 border-b  md:border-none flex mt-6 flex-col"
          >
            <div className="flex   justify-between items-center  w-full">
              <div>
                <h1 className="text-neutral-800 text-lg md:text-[13px] font-medium">
                  Connect
                </h1>
                <div className="  w-full md:text-base md:leading-none md:tracking-tight md:font-thin  hidden md:block md:px-0 px-5 min-h-24">
                  {[
                    {
                      text: "Facebook",
                      link: "/facebook",
                    },
                    {
                      text: "Instagram",
                      link: "/instagram",
                    },
                    {
                      text: "Twitter",
                      link: "/twitter",
                    },
                    {
                      text: "Affiliates",
                      link: "/affiliates",
                    },
                    {
                      text: "Our Store",
                      link: "/ourstore",
                    },
                  ].map((items, i) => {
                    return (
                      <div key={i} className="pt-2">
                        <Link
                          to={items.link}
                          className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                        >
                          {items.text}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:hidden">
                {contact ? (
                  <GrSubtract
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setContact(!contact)}
                  />
                ) : (
                  <IoMdAdd
                    size={20}
                    className="text-[#949393]"
                    onClick={() => setContact(!contact)}
                  />
                )}
              </div>
            </div>
            {contact && (
              <div className="  w-full   px-5 min-h-24">
                {[
                  {
                    text: "Facebook",
                    link: "/facebook",
                  },
                  {
                    text: "Instagram",
                    link: "/instagram",
                  },
                  {
                    text: "Twitter",
                    link: "/twitter",
                  },
                  {
                    text: "Affiliates",
                    link: "/affiliates",
                  },
                  {
                    text: "Our Store",
                    link: "/ourstore",
                  },
                ].map((items, i) => {
                  return (
                    <div key={i} className="pt-2">
                      <Link
                        to={items.link}
                        className="font-['Maison Neue'] hover:text-black text-neutral-500 text-sm font-normal"
                      >
                        {items.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col  h-[250px]  gap-3 md:justify-center ">
          <h1 className="font-['Maison Neue']  md:text-[24px] text-2xl pt-5 md:leading-none md:tracking-tight  md:justify-start md:px-0 px-4">
            Sign up to receive 15% off <br className="md:hidden" /> your first
            order.
          </h1>
          <div className="flex items-center   md:justify-start  justify-center">
            <input
              type="email"
              placeholder="Email Address"
              required
              className=" h-[52px] lg:w-[480px] w-[300px] mt-4 md:mt-0  px-[20px] py-[20px] border border-[#e7e6e6] outline-none"
            />
            <FaArrowRightLong
              size={20}
              className="bg-[#262626] mt-4 md:mt-0 text-white h-[50px]"
            />
          </div>
          <h1 className="font-['Maison Neue'] text-sm md:px-0 px-4 md:leading-none md:tracking-tight text-neutral-500">
            By providing your email adderss, you agree to our{" "}
            <span className="underline">Privacy Policy.</span> and{" "}
            <span className="underline">Terms of Service</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:hidden md:flex-col justify-center items-center h-10 border border-[#e7e6e6]">
        <h1>India </h1>
      </div>

      <div className="px-2 ">
        <div className="no-scrollbar md:justify-center flex whitespace-nowrap leading-none tracking-tight overflow-x-auto  gap-5   text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
          {[
            { text: "Privacy Policy", link: "/privacypolicy" },
            { text: "Terms of Service", link: "/termsofservice" },
            {
              text: "Do Not Sell or Share My Personal Information",
              link: "/donotsellorsharemypersonalinformation",
            },
            {
              text: "CS Supply Chain Transparency",
              link: "/cssupplychaintransparency",
            },
            {
              text: "Vendor Code of Conduct",
              link: "/vendorcodeofconduct",
            },
            {
              text: "Sitemap Pages",
              link: "/pitemappages",
            },
            {
              text: "Sitemap Product",
              link: "/itemapproduct",
            },
          ].map((items, i) => {
            return (
              <div key={i} className="flex">
                <Link className="text-xs" to={items.link}>
                  {items.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" text-center pt-5 md:text-xs pb-4  text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <div className="   h-[93px] p-5 justify-start items-end">
          <div className="flex ">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-[388px] h-[52px] px-[20px] py-[20px] outline-none"
            />
            <FaArrowRightLong className=" h-[53px] px-3.5 py-[20px] text-white bg-black" />
          </div>
        </div> */
}

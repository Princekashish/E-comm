import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-[400px] w-full bg-[#F5F4F4] flex flex-col justify-center items-center">
      <div className="h-[280px] w-[1256px] flex gap-10 px-[72px] py-[40px]">
        <div className="">
          <h1 className="text-neutral-800 text-base font-semibold">Account</h1>
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
        <div className="">
          <h1 className="text-neutral-800 text-base font-semibold">Company</h1>
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
              <div key={i} className="pt-1">
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
        <div className="">
          <h1 className="text-neutral-800 text-base font-semibold">Get Help</h1>
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
        <div className="">
          <h1 className="text-neutral-800 text-base font-semibold">Connect</h1>
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

        <div className="  w-[480px] h-[93px] p-5 justify-start items-end">
          <div className="flex ">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-[388px] h-[52px] px-[20px] py-[20px] outline-none"
            />
            <FaArrowRightLong className="w-[52px] h-[53px] px-3.5 py-[20px] text-white bg-black" />
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center flex-col gap-5">
        <div className="flex gap-5 pt-3 text-center text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
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
                <Link to={items.link}>
                  {items.text}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="w-96 text-center text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
            <h1>© 2024 All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

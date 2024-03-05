import React from "react";
import Header from "../Landingpage/Header/Header";
import Footer from "../Landingpage/Footer/Footer";

function About() {
  return (
    <>
      <div className="bg-white h-36">
        <Header />
      </div>
      <div className=' relative bg-[url("../Img/Section02.png")] bg-cover bg-center bg-no-repeat h-[691px] pl-9 pr-96 py-72 flex-col items-start gap-2.5 bg-local'>
        {/* Fixed text overlay */}
        <div
          className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 h-[419px] w-[488px]  flex justify-center items-center flex-col gap-4
        "
        >
          {["We believe", "we can all", "make", "a difference."].map(
            (items, i) => {
              return (
                <div className="text-white text-7xl text-center   font-['Maison Neue'] leading-[8vh]  tracking-tight">
                  <h1 key={i}>{items}</h1>
                </div>
              );
            }
          )}
          <div className="text-center self-stretch  text-white text-2xl font-normal font-['Maison Neue'] leading-none tracking-tight">
            <h1>
              Our way: Exceptional quality.
              <br />
              Ethical factories. Radical Transparency.
            </h1>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="h-[525px] px-64 py-20 text-center gap-5">
        <div className="relative top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="grow shrink basis-0 text-center text-black text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">
            At Everlane, we want the right choice to be as easy as putting on a
            great T-shirt. That’s why we partner with the best, ethical
            factories around the world. Source only the finest materials. And
            share those stories with you—down to the true cost of every product
            we make. It’s a new way of doing things. We call it Radical
            Transparency.
          </h1>
        </div>
      </div>

      {/* col */}

      <div className="bg-[#E6DED8] h-[733px] flex ">
        <div>
          <img src="../Img/image.png" alt="" />
        </div>
        <div className=" px-16 flex-col justify-center items-center gap-5 inline-flex ">
          <div className="w-[560px] h-[64px]">
            <h1 className="self-stretch text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
              OUR FACTORIES
            </h1>
            <h1 className="self-stretch text-black text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">
              Our ethical approach.
            </h1>
          </div>
          <div className="self-stretch text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
            <p className="w-[560px] h-[84px]">
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit
              them often and build strong personal relationships with the
              owners. Each factory is given a compliance audit to evaluate
              factors like fair wages, reasonable hours, and environment. Our
              goal? A score of 90 or above for every factory.
            </p>
          </div>
        </div>
      </div>

      {/* img */}
      <div className="bg-[url('../Img/image1.png')] bg-cover bg-center bg-no-repeat h-[637px]" />

      {/* col */}
      <div className="bg-[#E6DED8] h-[552px] w-full flex ">
        <div className=" px-16 flex-col justify-center items-center gap-5 inline-flex ">
          <div className="w-[560px] h-[112px]">
            <h1 className="self-stretch text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
              OUR QUALITY
            </h1>
            <h1 className="text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">
              Designed <br />
              to last.
            </h1>
          </div>
          <div className="self-stretch text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
            <p className="w-[560px] h-[68px]">
              At Everlane, we’re not big on trends. We want you to wear our
              pieces for years, even decades, to come. That’s why we source the
              finest materials and factories for our timeless products— like our
              Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees
            </p>
          </div>
        </div>
        <div className="pl-8">
          <img src="../Img/image2.png" alt="" className="w-fit" />
        </div>
      </div>

      {/* img */}
      <div className="bg-[url('../Img/image3.png')] bg-cover bg-center bg-no-repeat h-[637px]" />

      {/* col */}
      <div className="bg-[#ffff] h-[660px] flex ">
        <div>
          <img src="../Img/Screenshot 2023-11-30 at 6.28 1.png" alt="" />
        </div>
        <div className=" px-16 flex-col justify-center items-center gap-5 inline-flex ">
          <div className="w-[560px] h-[64px]">
            <h1 className="self-stretch text-black text-xs uppercase font-semibold font-['Maison Neue'] leading-none tracking-tight">
              OUR PRICES
            </h1>
            <h1 className="self-stretch text-black text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">
              Radically Transparent.
            </h1>
          </div>
          <div className="self-stretch text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
            <p className="w-[560px] h-[84px]">
              We believe our customers have a right to know how much their
              clothes cost to make. We reveal the true costs behind all of our
              products—from materials to labor to transportation—then offer them
              to you, minus the traditional retail markup.
            </p>
          </div>
        </div>
      </div>

      {/* 3col */}
      <div className="h-[453px] self-stretch items-center justify-center gap-6 flex flex-col">
        <div className="w-96 text-center text-black text-3xl font-normal font-['Maison Neue'] leading-10 text-center">
          <h1>More to Explore</h1>
        </div>
        <div className="flex justify-around text-center font-['Maison Neue'] items-center gap-10">
          <div className="relative overflow-hidden h-[195px] w-[320px] group">
            <img
              src="../Img/image (4).png"
              alt=""
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center"
            >
              Our Product
            </a>
          </div>

          <div className="h-[195px] w-[320px] relative overflow-hidden group">
            <img
              src="../Img/image (5).png"
              alt=""
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="#"
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center"
            >
              Our Store
            </a>
          </div>
          <div className="h-[195px] w-[320px] relative overflow-hidden group">
            <img
              src="../Img/image (6).png"
              alt=""
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="#"
              className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center"
            >
              Carrer
            </a>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>

    </>
  );
}

export default About;

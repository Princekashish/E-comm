import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Blog() {
  return (
    <div>
      <div className=" bg-white h-36  ">
        {" "}
        <Header />
      </div>

      {/* section01 */}
      <div className=" h-[691px] w-full bg-[url('../Img/Sectionblog.png')]  bg-cover bg-no-repeat bg-center flex-col justify-end items-start gap-2.5 flex ">
        <div className="h-[343px] w-[940px] px-[53px]  ">
          <Link to={"/style"}>
            <button className="text-center px-5 py-1 rounded-3xl border border-zinc-300 justify-center items-center gap-2.5 inline-flex text-white text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight ">
              Style
            </button>
          </Link>
          <div className="pt-3">
            <h1 className="text-white text-6xl font-semibold font-['Maison Neue'] ">
              Style
              <br />
              How To Style Winter <br />
              Whites
            </h1>
            <p className="text-white text-xl font-normal pt-3 font-['Maison Neue'] leading-loose">
              Redefine your winter wardrobe with the timeless elegance of winter
              whites with this style guide.
            </p>
          </div>
        </div>
      </div>

      {/* section02 */}

      <div className="w-full h-[572px] px-14 py-16">
        <div className=" flex-col justify-start items-start gap-5 inline-flex">
          <div className="Rectangle3 self-stretch h-[14px] w-[1280px] bg-neutral-800" />
          <div className="Frame1 w-[1280px] h-[288px] justify-start items-start gap-36 inline-flex">
            <div className="Frame1 justify-start items-start gap-1.5 flex">
              <FaLinkedinIn size={25} />
              <RiTwitterXLine size={25} />
              <FaFacebookF size={25} />
            </div>
            <div className="grow shrink basis-0 text-black text-4xl font-semibold font-['Maison Neue'] leading-10">
              In a season dominated by dark hues, redefine your winter wardrobe
              with the timeless elegance of winter whites. Whether top-to-toe
              white outfits, tonal mixing-and-matching, or a key white piece (or
              two), give your style a breath of fresh air with this list of
              winter white closet essentials.
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="Section03 bg-gray-300  w-full h-[1254px] px-14 py-24 justify-center items-center gap-2.5 inline-flex">
        <img
          className="Image w-[790px] h-[1054px]"
          src="../Img/image (27).png"
        />
      </div>
      {/* section4 */}

      <div className="Section04 w-full h-96 px-56 py-24 flex-col justify-start items-start gap-11 inline-flex">
        <div className="self-stretch text-black text-4xl font-semibold font-['Maison Neue'] leading-10">
          Nail the Classics
        </div>
        <div className="self-stretch">
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            Do pure winter chic with a{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            classic cashmere white sweater
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            . Made in the softest cashmere, it’s a sweater that will last season
            after season. Effortlessly elevating any winter outfit, a white
            sweater is a must for any capsule collection. Just make{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            sure you keep it clean and stain free
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            , to maintain that clean, polished look. Pair it with dark jeans or{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            Utility Barrel
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            {" "}
            pants for a casual yet refined ensemble, or layer it over a collared
            shirt for a preppy touch.
          </span>
        </div>
        <div className="self-stretch text-black text-4xl font-semibold font-['Maison Neue'] leading-10">
          Monochromatic Magic
        </div>
        <div className="self-stretch">
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            Nothing feels more luxe than an all-white winter outfit. And the
            best part? You don’t have to break the bank to create a super chic
            top-to-toe look. Pair classic{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            corduroy pants
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            {" "}
            in a modern wide-legged silhouette with a relaxed{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            Oxford style white shirt
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            {" "}
            for a mix-and-match texture play.
            <br />
            Extra points if you add a{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            white blazer
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            ,{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            cardigan
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            , or{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            sweater
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            . Accessorize with subtle metallic accents or a bold red lip for a
            pop of color, letting your outfit take center stage.
          </span>
        </div>
        <div className="self-stretch text-black text-4xl font-semibold font-['Maison Neue'] leading-10">
          Keep Warm in White
        </div>
        <div className="self-stretch">
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            Stay warm all winter long with a{" "}
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            white puffer jacke
          </span>
          <span className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
            t puffer jacket. This durable, cold weather jacket is puffed-up for
            extra warmth, giving an on-point blown out silhouette. A white coat
            not only stands out against the sea of dark winter jackets but also
            provides a fun canvas for experimenting with textures and patterns.
            Throw on a white coat over a neutral-toned outfit for an easy
            elegant look.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;

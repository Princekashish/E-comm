import React from "react";
import Header from "../Header/Header";
import { FaStar } from "react-icons/fa6";

function ProductInfo() {
  return (
    <div>
      <div className="h-36 bg-white">
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
      <section className="  py-3 justify-center gap-5 h-screen flex">
        <div className="grid w-[838.039px]  gap-4 grid-cols-2">
          <div>
            <div className="absolute px-1.5 py-1 bg-white justify-center items-center gap-2.5 flex">
              <div className="Off text-center text-red-700 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                30% off
              </div>
            </div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
          <div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
          <div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
          <div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
          <div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
          <div>
            <img src=".\Img\image(39).png" alt="" />
          </div>
        </div>

        {/* productinfodetails */}
        <div className="sticky top-[176px] w-[384px]">
          <div>
            <div className="MenOuterwearJacketsCoats self-stretch text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
              Men / Outerwear - Jackets & Coats
            </div>

            <div className="Frame2 self-stretch justify-start items-start gap-2.5 inline-flex">
              <div className="w-[260px]  grow shrink basis-0 text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                The ReWool® Oversized Shirt Jacket
              </div>
              <div className="justify-end items-center gap-1 flex">
                <div className="text-neutral-500 text-sm font-normal font-['Maison Neue'] line-through leading-loose">
                  $238
                </div>
                <div className="text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                  $167
                </div>
              </div>
            </div>

            <div className=" w-96 h-4 justify-start items-center gap-2.5 inline-flex">
              <div className="Frame2 justify-start items-center gap-1 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <div className="02Reviews w-96 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                5.0 (2 Reviews)
              </div>
            </div>
          </div>
          <div>
            <div className="Frame2 w-96 h-24 py-4 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame2 self-stretch justify-start items-start gap-3 inline-flex">
                <p className="Color text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
                  Color
                </p>
                <p className="BlackOlive text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  Black / Olive
                </p>
              </div>
              <div className="Frame2 pt-3 self-stretch justify-start items-start  gap-3 inline-flex">
                <div className="border border-black h-11 w-11 flex justify-center items-center  rounded-full">
                  <div className="bg-blue-900 rounded-full h-9 w-9" />
                </div>
                <div className="bg-amber-900 rounded-full h-9 w-9" />
              </div>
            </div>
          </div>

          <div className="Frame3 w-96 h-24 py-4 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Frame2 self-stretch justify-between items-start inline-flex">
              <div className="Size text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
                Size
              </div>
              <div className="SizeGuide text-neutral-800 text-xs font-normal font-['Maison Neue'] underline leading-none tracking-tight">
                Size Guide
              </div>
            </div>
            <div className="Frame2 self-stretch justify-start items-start gap-3 inline-flex">
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XS
                </div>
              </div>
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  S
                </div>
              </div>
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  M
                </div>
              </div>
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  L
                </div>
              </div>
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XL
                </div>
              </div>
              <div className="TabButton h-10 p-3 bg-stone-100 justify-center items-center gap-2.5 flex">
                <div className="View text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                  XXL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;

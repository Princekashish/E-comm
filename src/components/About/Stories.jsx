import React from "react";
import Header from "../Header/Header";

function Stories() {
  return (
    <div>
      <div className=" bg-white h-36  ">
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
          ]}
        />
      </div>
      <div className=" w-fit h-[1328px] px-9 py-7 flex-col justify-start items-center gap-16 flex">
        <div className=" self-stretch h-20 flex-col justify-start items-center gap-4 flex">
          <div className=" self-stretch text-center text-black text-3xl font-normal font-['Maison Neue'] leading-10">
            Stores
          </div>
          <div className=" self-stretch text-center text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
            Find one of our 11 stores nearest you.
          </div>
        </div>
        <div className=" w-[1330px] h-[332px] self-stretch justify-start items-start gap-7 flex">
          <div className=" grow shrink basis-0 flex-col justify-start w-[423.33px] items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (18).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="Seattle self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                SEATTLE
              </div>
              <div className="UniversityVillage self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                University Village
              </div>
            </div>
          </div>
          <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (19).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="SanFrancisco self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                SAN FRANCISCO
              </div>
              <div className="ValenciaStreetSanFrancisco self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Valencia Street, San Francisco
              </div>
            </div>
          </div>
          <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (20).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="PaloAlto self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                PALO ALTO
              </div>
              <div className="Stanford self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Stanford
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[1330px] h-[332px] self-stretch justify-start items-start gap-7 flex">
          <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (21).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="LosAngeles self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                LOS ANGELES
              </div>
              <div className="AbbotKinney self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Abbot Kinney
              </div>
            </div>
          </div>
          <div className="Frame2 grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (22).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="Boston self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                BOSTON
              </div>
              <div className="Seaport self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Seaport
              </div>
            </div>
          </div>
          <div className="Frame3 grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (23).png"
            />
            <div className="Frame2 self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="NewYork self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                NEW YORK
              </div>
              <div className="PrinceStreetNewYork self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Prince Street, New York
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[1330px] h-[332px] self-stretch justify-start items-start gap-7 flex">
          <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img
              className="Image self-stretch h-72"
              src="../Img/image (24).png"
            />
            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                BROOKLYN
              </div>
              <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Williamsburg
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img className="self-stretch h-72" src="../Img/image (25).png" />
            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                KING OF PRUSSIA
              </div>
              <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                King of Prussia
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <img className="self-stretch h-72" src="../Img/image (26).png" />
            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch text-black text-xs font-normal font-['Maison Neue'] leading-none tracking-wide">
                GEORGETOWN
              </div>
              <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
                Georgetown
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;

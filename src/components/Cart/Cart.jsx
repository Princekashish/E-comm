import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { remove } from "../Redux/Featuere/Cartslice";
function Cart() {
  const item = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClickRemove = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <>
      {item.length === 0 ? (
        <div className="fixed top-0 shadow-xl right-0 bg-white text-black h-screen w-11/12 lg:w-[25%]">
          <div className="p-11   w-full text-2xl font-['Maison Neue']  tracking-tight h-[406px] text-neutral-800  ">
            <h3 className="pb-6">
              Your cart is empty. <br />
              <span className="text-gray-600">Not sure where to start?</span>
            </h3>
            <div className="mt-11  ">
              <Link to="/" className="hover:border-b-2 ">
                Shop Best Sellers{" "}
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F74a827abf8e14106b04b0d87ed489fee?format=webp&width=2000"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="fixed top-0   font-['Maison Neue']  right-0  shadow-xl  bg-white text-black  h-screen  w-11/12 lg:w-[25%]">
          <div className="p-2  pt-12 w-full overflow-hidden h-[80vh] lg:min-h-[80%] font-['Maison Neue']   no-scrollbar  pb-10 overflow-y-scroll  text-neutral-800  ">
            <div className="text-xl p-2 font-semibold tracking-wide ">
              <h1>Your Cart</h1>
            </div>
            <div className="flex flex-col     gap-7 mt-3 p-2 font-light">
              {item.map((ite) => (
                <div key={ite} className="flex ">
                  <div className="  w-[150px]">
                    <img src={ite.image} alt="" />
                  </div>
                  <div className="leading-none p-2  lg:w-full  tracking-wide text-sm flex flex-col justify-around">
                    <div className="w-full flex gap-3 items-center">
                      <h1 className="w-full">{ite.title}</h1>
                      <MdDeleteOutline
                        className="cursor-pointer"
                        size={25}
                        onClick={() => handleClickRemove(ite.id)}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p>{ite.price}</p>
                      </div>
                      <div className="flex border justify-between  px-4 gap-2 py-2">
                        <button className="">
                          <RiSubtractLine size={15} />
                        </button>
                        <h1 className="text-sm">1</h1>
                        <button>
                          <IoIosAdd size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 lg:bottom-0  left-0 right-0  bg-white  h-[20%]   shadow-md  ">
            <div className="flex pt-5 items-center justify-around">
              <h1 className="font-semibold tracking-wide leading-3">
                Subtotal{" "}
                <span className="font-light text-base">
                  ({item.length} Items)
                </span>
              </h1>
              <h2>$5609</h2>
            </div>
            <div className="bg-black text-white text-center m-3  py-3 px-3 uppercase ">
              <button className="text-base">Chackout</button>
            </div>
            <div className="text-xs text-center">
              <p>psst,get it now before it sells out.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

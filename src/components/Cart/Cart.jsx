import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../Collections/clothscoll";


function Cart() {
  const item = useSelector((state) => state.cart);
  return (
    <>
      {item.length === 0 ? (
        <div className="fixed top-0 shadow-xl right-0 bg-white text-black h-screen w-[34vw] ">
          
          <div className="p-11  h-[40vh] w-full text-2xl font-['Maison Neue']  tracking-tight h-[406px] text-neutral-800  ">
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
          <div className="h-[80vh] w-full bg-green-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F74a827abf8e14106b04b0d87ed489fee?format=webp&width=2000"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 shadow-xl right-0 bg-white text-black h-screen w-[34vw] ">
          <div className="p-11 w-full  font-['Maison Neue']  text-neutral-800  ">
            <div className="text-2xl font-semibold">
              <h1>Your Cart</h1>
            </div>
            <div className="flex gap-5">
              {
                item.map((ite)=>(
                  <div key={ite}>
                    <img src={ite.image} alt="" />
                  </div>
                ))
              }
            </div>


          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

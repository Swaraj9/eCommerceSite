import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard.jsx";
import { useSelector } from "react-redux";

const Cart = () => {
  const productObjects = useSelector((state) => state.cart.products);
  const productCount = useSelector((state) => state.cart.productCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col">
      <Navbar searchBar={false} />
      <div className="flex pt-24 h-full min-h-screen bg=neutral-800 flex-col w-full ">
        {modal && (
          <div className="flex flex-row ">
            <div className="w-1/12"></div>
            <div className="flex justify-center rounded-lg bg-neutral-900 z-20 shadow shadow-orange-400 bg-blend-color-burn py-6 w-10/12 md:text-lg">
              Your order placed successfully, order again!
            </div>
            <div className="w-1/12"></div>
          </div>
        )}
        <div className="mt-6 flex flex-col-reverse w-full sm:flex-row sm:justify-center">
          <div>
            <div className="flex flex-col px-5 py-7 rounded-md">
              <div className="font-normal text-3xl pb-4 ">Shopping cart</div>
              <hr className=" w-full" />
              <div className="p-3">
                {productCount > 0 ? (
                  productObjects.map((productObject) => (
                    <CartCard
                      key={productObject.product.id}
                      product={productObject.product}
                      amount={productObject.amount}
                    />
                  ))
                ) : (
                  <div className="text-neutral-500 text-center text-lg">
                    No Items Added to Cart Yet
                  </div>
                )}
              </div>
              <br />
              <hr className=" w-full py-1" />
              <div className="flex justify-between text-lg">
                <div></div>
                <div className="mr-1">{`Subtotal (${productCount}): ${totalPrice}$`}</div>
              </div>
            </div>
          </div>
          <div className="mx-14"></div>
          <div>
            <div className="bg-[#000814] px-5 py-7 shadow-xl m-auto">
              <div className="flex justify-between text-lg gap-10">
                <div>{`Subtotal : ${totalPrice}$`}</div>
              </div>
              <div className="text-neutral-400">
                <Link to="/" reloadDocument>
                  View Products ›
                </Link>
              </div>
              <div className="mt-5">{`Total Items: ${productCount}`}</div>
              <div className="flex justify-items-center">
                <button
                  onClick={() => setModal(!modal)}
                  className="m-auto md:mx-4 text-center text-lg md:text-2xl text-[#FFD60A] border-[#FFC300] border-2 p-1 px-5 mt-7 duration-300 hover:bg-[#FFC300] hover:text-neutral-900"
                >
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

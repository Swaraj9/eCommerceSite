import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const id = product.id;
  const title = product.title;
  const brand = product.brand;
  const price = product.price;
  const discount = product.discountPercentage;
  const thumbnail = product.thumbnail;

  return (
    <div className="m-4 flex flex-col items-center rounded-xl bg-neutral-700 w-64 h-64 duration-300 hover:scale-[1.02]">
      <Link className="w-full" to={`/products/${id}`}>
        <div className="w-full flex justify-center bg-neutral-100 rounded-t-xl">
          <img
            className="h-40 w-auto rounded-t-xl"
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
        </div>
      </Link>
      <div className="flex flex-row w-full h-full self-start p-2 justify-between">
        <div className="w-3/4 flex flex-col">
          <div className="text-lg text-ellipsis line-clamp-1">{title}</div>
          <div className="text-sm text-ellipsis text-neutral-400 line-clamp-1">
            {brand}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between h-full w-1/4">
          <div className="text-lg font-bold">{`${price}$`}</div>
          <button
            onClick={() => dispatch(addProduct(product))}
            className="text-sm pointer-events-auto bg-[#FFD60A] text-neutral-900 rounded-3xl text-center p-1 pl-3 pr-3 mb-2 mr-2"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

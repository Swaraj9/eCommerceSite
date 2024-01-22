import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, brand, price, discount, thumbnail }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="m-3 shadow-xl flex flex-col items-center bg-[#000814] w-96 h-96 duration-300 hover:scale-[1.02]">
        <img className="h-4/5 w-auto" src={thumbnail} alt={`${title} thumbnail`} />
        <div className="flex flex-row border-t-[#FFC300] border-t-2 w-full self-start p-3 justify-between">
          <div className="flex flex-col">
            <div className="text-xl text-ellipsis line-clamp-1">{title}</div>
            <div className="text-lg text-ellipsis text-neutral-500 line-clamp-1">{brand}</div>
          </div>
          <div className="flex flex-col items-end w-fit"> 
            <div className="text-2xl text-green-400">{`${price}$`}</div>
            <div className="text-sm text-[#FFD60A] text-right">{`${discount}% OFF`}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

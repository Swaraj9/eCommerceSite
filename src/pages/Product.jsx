import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaCartArrowDown, FaStar, FaStarHalf } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice.js";
import { useSelector } from "react-redux";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const ratingToStars = (rating) => {
    const stars = Math.floor(rating);
    return (
      <div className="flex">
        {stars >= 1 && <FaStar />}
        {stars >= 2 && <FaStar />}
        {stars >= 3 && <FaStar />}
        {stars >= 4 && <FaStar />}
        {stars >= 5 && <FaStar />}
        {rating % 1 >= 0.5 && <FaStarHalf />}
      </div>
    );
  };

  useEffect(() => {
    const checkToken = async () => {
      let res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const status = res.status;
      if (status == 200) {
        navigate("/");
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      let prod = await res.json();

      console.log(prod);
      setProduct(prod);
    };

    getProduct();
  }, []);

  return (
    <div className="flex">
      <Navbar searchBar={false} />
      <div className="flex pt-24 h-full min-h-screen bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800 flex-col sm:flex-row w-full p-5 text-neutral-800 dark:text-neutral-50">
        <div className="mr-5 w-full sm:w-1/2 p-5 bg-neutral-200 dark:bg-neutral-700 rounded-3xl shadow-2xl">
          <Carousel className="max-w-2xl">
            {product &&
              product.images.map((image, index) => (
                <img
                  className="text-xl sm:max-h-[90vh]"
                  src={image}
                  alt={`${product.title} Image ${index + 1}`}
                />
              ))}
          </Carousel>
        </div>
        <div className="mt-5 h-full w-full sm:w-1/2 bg-neutral-200 dark:bg-inherit p-5 dark:p-0 rounded-3xl dark:rounded-none shadow-xl dark:shadow-none">
          <div className="flex w-full justify-between">
            <div>
              <div className="text-5xl mb-3">{product.title}</div>
              <div className="flex items-center">
                <div className="text-lg mb-3 text-neutral-400">{`By ${product.brand}`}</div>
                <div className="text-md mb-3 text-blue-400 ml-3 rounded">{`In ${product.category}`}</div>
              </div>
              <div className="flex">
                <div className="text-3xl mb-3 text-green-500 dark:text-green-400">{`${product.price}$`}</div>
                <div className="text-xl bg-orange-400 text-neutral-700 self-start p-1 rounded ml-3">{`${product.discountPercentage}% OFF`}</div>
              </div>
            </div>
            <div className="text-lg flex flex-col items-end">
              <div>Rating</div>
              {ratingToStars(product.rating)}
              <div>{product.rating}</div>
            </div>
          </div>
          <div>{product.description}</div>
          <button
            onClick={() => dispatch(addProduct(product))}
            className="text-2xl dark:text-yellow-400 dark:border-yellow-400 dark:hover:text-neutral-800 border-2 border-neutral-800 hover:border-yellow-400 p-1 pl-3 pr-3 rounded mt-5 duration-300 hover:bg-yellow-400 hover:text-neutral-700 flex items-center gap-3"
          >
            <FaCartArrowDown />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

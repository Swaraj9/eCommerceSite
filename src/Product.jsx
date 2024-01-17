import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState("");

  const ratingToStars = (rating) => {
    const stars = Math.floor(rating)
    return(
      <div className="flex">
        {stars >= 1 && <FaStar/>}
        {stars >= 2 && <FaStar/>}
        {stars >= 3 && <FaStar/>}
        {stars >= 4 && <FaStar/>}
        {stars >= 5 && <FaStar/>}
        {rating % 1 >= 0.5 && <FaStarHalf/>}
      </div>
    )
  }

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      let prod = await res.json();

      setProduct(prod);
    };

    getProduct();
  }, []);

  return (
    <div className="flex w-full p-5">
      <div className="mr-5">
        <Carousel className="max-w-4xl">
          {product &&
            product.images.map((image, index) => (
              <img src={image} alt={`${product.title} Image ${index + 1}`} />
            ))}
        </Carousel>
      </div>
      <div className="mt-5">
        <div className="flex w-full justify-between">
          <div>
            <div className="text-5xl mb-3">{product.title}</div>
            <div className="flex items-center">
              <div className="text-lg mb-3 text-gray-400">{`By ${product.brand}`}</div>
              <div className="text-md mb-3 text-blue-400 ml-3 rounded">{`In ${product.category}`}</div>
            </div>
            <div className="flex">
              <div className="text-3xl mb-3 text-green-400">{`${product.price}$`}</div>
              <div className="text-xl bg-orange-400 text-gray-700 self-start p-1 rounded ml-3">{`${product.discountPercentage}% OFF`}</div>
            </div>
          </div>
          <div className="text-lg flex flex-col items-end">
            <div>Rating</div>
            {ratingToStars(product.rating)}
            <div>{product.rating}</div>
          </div>
        </div>
        <div>{product.description}</div>
      </div>
    </div>
  );
};

export default Product;

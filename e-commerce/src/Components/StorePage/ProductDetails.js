import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();
  const product = props.products.find((product) => product.id === params.productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-96 h-auto rounded-lg shadow-md mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Reviews:</h3>
        <ul className="list-disc pl-4">
          {product.reviews.map((review, index) => (
            <li key={index} className="mb-2">
              {review}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;

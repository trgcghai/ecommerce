import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-green-300 p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-SHIRTS SALES 50%
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData &&
          storeData.slice(0, 6).map((product, index) => {
            return (
              <div key={index}>
                <ProductSectionItem
                  id={product.id}
                  img={product.img}
                  name={product.name}
                  text={product.text}
                  size={product.size}
                  color={product.color}
                  price={product.price}
                  totalPrice={product.totalPrice}
                ></ProductSectionItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSection;

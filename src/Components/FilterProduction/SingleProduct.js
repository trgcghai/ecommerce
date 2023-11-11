import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color ? product[0].color[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <div>
      {product &&
        product
          .filter((product) => product.id === id)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center py-10"
              >
                <div className="pl-44 grow-[2]">
                  <img
                    className="h-[850px] rounded-lg"
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="grow-[3] pl-8">
                  <div className="max-w-lg">
                    <h5 className="text-left text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                      {item.name}
                    </h5>
                    <p className="text-left text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                      15% OFF
                    </p>
                    <p className="text-left text-gray-600 text-xl font-inter font-bold tracking-normal leading-6 pb-4 ">
                      {item.text}
                    </p>
                    {item.size && (
                      <div className="pb-4">
                        <label
                          htmlFor="size"
                          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white text-left"
                        >
                          Choose your size
                        </label>
                        <select
                          id="size"
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                    {item.color && (
                      <div className="pb-4">
                        <label
                          htmlFor="color"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                        >
                          Choose your color
                        </label>
                        <select
                          id="color"
                          onChange={(e) => setColor(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.color?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                      <p className="text-left text-xl font-inter tracking-normal leading-none">
                        {item.price} $
                      </p>
                      <Button
                        color="gray"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: item.id,
                              price: item.price,
                              img: item.img,
                              text: item.text,
                              amount: 1,
                              totalPrice: item.price,
                              name: item.name,
                              size: size,
                              color: color,
                            })
                          )
                        }
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default SingleProduct;

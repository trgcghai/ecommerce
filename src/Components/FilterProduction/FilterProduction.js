import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterColor,
  filterSize,
} from "../../features/slices/productsSlice";

const FilterProduction = () => {
  const products = useSelector((state) => state.products.filterProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();

  const genderButton = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButton = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cursor-pointer ml-4 mt-4">
        <Link to={-1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
      </div>
      <div className="pt-16">
        <div className="mx-auto">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              {genderButton.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple="true"
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple="true"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price to Low Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple="true"
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple="true"
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButton.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterSize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple="true"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-4 justify-items-center py-12 gap-12">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      color={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProduction;

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, img, text, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filterProducts/${type}/${id}`}>
      <Card className="w-auto" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue-gray" className="relative h-auto">
          <img
            src={img}
            alt="img-blur-shadow"
            className="h-full w-full cursor-pointer"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small" className="text-xl">
            {price}$
          </Typography>
          <Typography variant="small" color="gray" className="flex-gap-1">
            {color &&
              color.map((color, index) => {
                return (
                  <span
                    className="fas fa-map-marker-alt fa-sm mt-[3px] px-2 rounded-full mr-4 cursor-pointer"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;

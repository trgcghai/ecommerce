import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  color,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="font-medium" textGradient>
          {text}
        </Typography>
        <div className="flex justify-between items-center pt-4">
          <Typography color="gray" className="font-medium" textGradient>
            Size : {defaultSize}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            Color :{" "}
            <span
              className="px-2 rounded-full ml-2"
              style={{ backgroundColor: defaultColor }}
            ></span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Add to cart" placement="bottom">
          <Button
            size="lg"
            color="gray"
            variant="outlined"
            ripple={true}
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  size: defaultSize,
                  color: defaultColor,
                })
              )
            }
          >
            Add to cart
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default ProductSectionItem;

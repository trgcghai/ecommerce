import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cartList = useSelector((state) => state.cart.cartList);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  return (
    <>
      {cartList.length === 0 ? (
        <Dialog
          className="border-0 outline-0"
          open={openModal}
          handler={() => setOpen(false)}
        >
          <DialogHeader>Shopping bag</DialogHeader>
          <DialogBody divider>
            <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
              Your bag is empty
            </h1>
            <p className="text-black text-base font-inter font-bold tracking-normal leading-none ">
              Add some products
            </p>
          </DialogBody>
          <DialogFooter className="py-4"></DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          className="border-0 outline-0"
          open={openModal}
          handler={() => setOpen(false)}
        >
          <DialogHeader>Shopping bag</DialogHeader>
          <DialogBody divider className="overflow-y-scroll h-[400px]">
            {cartList.map((product, index) => {
              return (
                <div
                  key={index}
                  className={
                    index !== cartList.length - 1
                      ? "border-b-2 border-[#CFD8DC]"
                      : ""
                  }
                >
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <img
                          className="h-[130px] rounded-md"
                          src={product.img}
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {product.name}
                          </h4>
                        </div>
                        {product.size && (
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Size: <span className="ml-2">{product.size}</span>
                          </p>
                        )}
                        {product.color && (
                          <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                            Color:{" "}
                            <span
                              className="ml-2 px-2 rounded-full"
                              style={{ backgroundColor: product.color }}
                            ></span>
                          </p>
                        )}
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2">{product.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Price: <span className="ml-2">{product.price}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-2">
                          Total price:{" "}
                          <span className="ml-2">{product.totalPrice}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Tooltip content="Remove from cart" placement="bottom">
                        <Button
                          size="sm"
                          color="red"
                          ripple
                          variant="filled"
                          onClick={() => dispatch(removeFromCart(product))}
                        >
                          Remove
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter className="flex justify-end items-center py-4">
            <p className="text-black text-lg font-inter tracking-normal leading-none pt-2">
              Total price of all products:{" "}
              <span className="ml-2">{totalPrice} $</span>
            </p>
          </DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export default Cart;

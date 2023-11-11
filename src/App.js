import "./App.css";
import FilterProduction from "./Components/FilterProduction/FilterProduction";
import SingleProduct from "./Components/FilterProduction/SingleProduct";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function App() {
  const cartList = useSelector((state) => state.cart.cartList);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart list", cartList);
  console.log("total amount", totalAmount);
  console.log("total price", totalPrice);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/filterProducts/:type"
            element={<FilterProduction></FilterProduction>}
          ></Route>
          <Route
            path="/filterProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

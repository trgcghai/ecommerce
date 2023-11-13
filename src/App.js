import "./App.css";
import FilterProduction from "./Components/FilterProduction/FilterProduction";
import SingleProduct from "./Components/FilterProduction/SingleProduct";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  if (authUser) {
    console.log("redirect to main page");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
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

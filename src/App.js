import "./App.css";
import FilterProduction from "./Components/FilterProduction/FilterProduction";
import SingleProduct from "./Components/FilterProduction/SingleProduct";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
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

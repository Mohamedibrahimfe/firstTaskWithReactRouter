import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import RootLayOut from "./layOuts/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
function App() {
  const [dishs, setDishs] = useState([
    { id: 1, name: "pizza", price: 10, quantity: 0, isSelected: false },
    { id: 2, name: "pasta", price: 20, quantity: 0, isSelected: false },
    { id: 3, name: "burger", price: 30, quantity: 0, isSelected: false },
    { id: 4, name: "sushi", price: 40, quantity: 0, isSelected: false },
    { id: 5, name: "chicken", price: 50, quantity: 0, isSelected: false },
    { id: 6, name: "fish", price: 60, quantity: 0, isSelected: false },
  ]);
  const addToCart = (id) => {
    setDishs(
      dishs.map((dish) => {
        if (dish.id === id) {
          return { ...dish, isSelected: !dish.isSelected };
        }
        return dish;
      })
    );
  };
  const plusCount = (id) => {
    setDishs(
      dishs.map((dish) => {
        if (dish.id === id) {
          return { ...dish, quantity: dish.quantity + 1 };
        }
        return dish;
      })
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut dishs={dishs} />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu dishs={dishs} onAdd={addToCart} />} />
        <Route path="cart" element={<Cart dishs={dishs} onAdd={plusCount} />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

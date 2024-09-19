import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
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
import Posts from "./pages/Posts";

function App() {
  const [dishs, setDishs] = useState([]);

  const getDishes = async () => {
    const response = await fetch("http://localhost:3000/dishs");
    const data = await response.json();
    setDishs(data);
  };

  useEffect(() => {
    getDishes();
  }, []);

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
        <Route path="posts" element={<Posts />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

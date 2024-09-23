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
import Post from "./pages/Post";
import Admin from "./pages/Admin";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import axios from "axios";
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
  const onEdit = (id) => {
    // redirect to /edit/:id

    console.log(id);
  };
  const onDelete = async (myDish) => {
    console.log(myDish.id);
    setDishs(dishs.filter((dish) => dish.id !== myDish.id));
    await axios.delete(`http://localhost:3000/dishs/${myDish.id}`);
  };

  const addDish = async (myDish) => {
    setDishs([...dishs, myDish]);
    await axios.post("http://localhost:3000/dishs", myDish);
  };
  useEffect(() => {});
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut dishs={dishs} />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu dishs={dishs} onAdd={addToCart} />} />
        <Route path="cart" element={<Cart dishs={dishs} onAdd={plusCount} />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post" element={<Post />} />
        <Route
          path="admin"
          element={
            <Admin
              dishs={dishs}
              onAdd={addToCart}
              onEdit={onEdit}
              onDelete={onDelete}
              addDish={addDish}
            />
          }
        />
        <Route path="add" element={<Add dishs={dishs} />} />
        <Route path="edit/:id" element={<Edit dishs={dishs} />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

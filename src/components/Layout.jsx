import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { CartContext } from "../utils/context/CartContext";

const Layout = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Header cart={cart}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

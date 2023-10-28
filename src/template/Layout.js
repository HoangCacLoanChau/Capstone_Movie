import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer></Footer>
    </div>
  );
}

// props children

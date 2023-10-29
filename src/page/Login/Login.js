import React from "react";
import Form from "./Form";
import Banner from "./Banner";

export default function Login() {
  return (
    <div style={{ background: "#fca311" }} className="h-screen flex items-center">
      <div className="container flex  bg-white rounded-xl items-center">
        <Banner />
        <Form />
      </div>
    </div>
  );
}

// form antd

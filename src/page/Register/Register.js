import React from "react";
import RegisterForm from "./Form";
import Banner from "./Banner";

export default function Register() {
  return (
    <div style={{ background: "#fca311" }} className="h-screen  flex items-center">
      <div className="container flex items-center justify-center bg-white rounded-xl">
        <RegisterForm />
        <Banner />
      </div>
    </div>
  );
}

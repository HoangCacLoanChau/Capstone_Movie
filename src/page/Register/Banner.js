import React from "react";
import movieLogo from "./theaterLogo.json";
import Lottie from "lottie-react";
export default function Banner() {
  return (
    <div className="w-1/2 ">
      <Lottie animationData={movieLogo} loop={true} />
    </div>
  );
}

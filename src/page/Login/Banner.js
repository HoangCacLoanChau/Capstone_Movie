import React from "react";
import bgAnimate from "../../../public/theaterLogo.json";
import Lottie from "lottie-react";
export default function Banner() {
  return (
    <div className="w-1/2">
      <Lottie animationData={bgAnimate} loop={true} />
    </div>
  );
}

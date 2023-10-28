import React from "react";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Slider from "./Banner/Banner";

export default function Home() {
  return (
    <div className="space-y-10 ">
      <Slider />
      <ListMovie></ListMovie>
      <TabMovie />
    </div>
  );
}

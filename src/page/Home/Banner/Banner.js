import React, { useEffect, useState } from "react";
import { Carousel, ConfigProvider, message } from "antd";
import { getBannerAPI } from "../../../api/api";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Slider = () => {
  const [banner, setBanner] = useState([]);
  //try catch
  // async, await
  let fetchData = async () => {
    try {
      let response = await getBannerAPI();
      setBanner(response.data.content);
    } catch {
      message.error("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (currentSlide) => {};
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 10,
            dotWidth: 60,
            dotActiveWidth: 100,
          },
        },
      }}
    >
      <Carousel autoplay effect="fade" afterChange={onChange}>
        {banner.map((item, index) => {
          return (
            <img
              src={item.hinhAnh}
              key={index}
              className="banner-home
              sm:h-60
              lg:h-96
              xl:h-200 w-full object-fit"
              alt=""
            />
          );
        })}
      </Carousel>
    </ConfigProvider>
  );
};
export default Slider;

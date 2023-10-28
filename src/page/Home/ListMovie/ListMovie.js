import React, { useEffect, useState } from "react";
import { getListMovie } from "../../../api/api";
import { CloseCircleFilled, PlayCircleOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoUrl, setvideoUrl] = useState("");
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const closeVideo = () => {
    setVideoPlaying(false);
  };
  const playVideo = (url) => {
    setvideoUrl(url);
    setVideoPlaying(true);
  };

  let navigate = useNavigate();
  // Define a function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can also perform additional actions, such as fetching data for the new page, here
  };
  const itemsPerPage = 9;
  const displayedItems = movieArr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  useEffect(() => {
    getListMovie()
      .then((res) => {
        console.log(res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="relative ">
      <div className="container ">
        {isVideoPlaying && (
          <div className="h-full w-screen bg-black bg-opacity-40 fixed  top-0 left-0 z-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-40">
              <div className="video-container relative ">
                <ReactPlayer url={videoUrl} />
                <button
                  className="text-white font-bold text-4xl absolute -right-10 -top-10"
                  onClick={closeVideo}
                >
                  <CloseCircleFilled />
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          id="ListMovie"
          className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-9"
        >
          {displayedItems.map((item, index) => {
            return (
              <div
                key={index}
                class="hover:-translate-y-2 transition-all bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                style={{ width: "240px", height: "355px" }}
              >
                <div className="relative hover:shadow-2xl w-full h-full">
                  <img class="rounded-t-lg w-full h-full" src={item.hinhAnh} alt="" />
                  <div className="opacity-0 hover:opacity-100 transition-all absolute top-0 left-0 w-full h-full bg-opacity-70  ">
                    <button
                      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      onClick={() => {
                        playVideo(item.trailer);
                      }}
                    >
                      <PlayCircleOutlined className="hover:text-red-600 text-6xl text-white" />
                    </button>
                    <div className="absolute w-full  flex flex-col items-center  bottom-0 bg-black bg-opacity-60 ">
                      <strong title={item.tenPhim} className="text-white font-semibold  pt-2 px-1 ">
                        {item.tenPhim.length >= 22
                          ? `${item.tenPhim.slice(0, 22)} ...`
                          : item.tenPhim}
                      </strong>
                      <div className="flex gap-2 my-5">
                        <button
                          onClick={() => {
                            navigate(`/movie/${item.maPhim}`);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded  text-xs"
                        >
                          Xem chi tiết
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/movie/${item.maPhim}`);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded "
                        >
                          Mua Vé
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center w-full py-5 ">
          <Pagination
            current={currentPage}
            total={movieArr.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

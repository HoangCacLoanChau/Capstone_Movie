import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailMovie, getScheduleByMovie } from "../../api/api";
import { CloseOutlined, PlayCircleOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import { Divider, Popover, Progress, Tabs } from "antd";

import "moment/min/locales";
import moment from "moment";
import numeral from "numeral";

export default function DetailMovie() {
  const [detail, setDetail] = useState({});
  const [schedule, setSchedule] = useState({});
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  moment.locale("vi"); // Set the locale to Vietnamese
  const onChange = (key) => {
    console.log(key);
  };
  const closeVideo = () => {
    setVideoPlaying(false);
  };
  const playVideo = () => {
    setVideoPlaying(true);
  };

  // useParams => lấy id từ url
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    getScheduleByMovie(params.id)
      .then((res) => {
        setSchedule(res.data.content);
        console.log("schedule", res);
      })
      .catch((err) => {
        console.log(err);
      });

    getDetailMovie(params.id)
      .then((res) => {
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSchedule = () => {
    return schedule.heThongRapChieu?.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} alt="" className="w-16" />,
        children: heThongRap.cumRapChieu.map((cumRap) => {
          return (
            <div>
              <div class="mb-5 w-fit text-xl font-bold text-orange-500 uppercase tracking-wider bg-gray-800 py-2 px-3 rounded-md shadow-md">
                {cumRap.tenCumRap} - {cumRap.diaChi}{" "}
              </div>

              <div className="flex gap-5 pb-5">
                {cumRap.lichChieuPhim.map((lichChieu) => {
                  return (
                    <button
                      onClick={() => {
                        navigate(`/purchase/${lichChieu.maLichChieu}`);
                      }}
                      style={{ background: "#ff9f1c" }}
                      className=" text-left max-w-sm rounded-lg overflow-hidden shadow-xl text-white bg-blue-600 transition-transform hover:shadow-2xl hover:scale-105 transform transition duration-300"
                    >
                      <div style={{ color: "#14213d" }} className="px-4 py-2 text-xl">
                        <div className="font-bold text-xl mb-1">{lichChieu.tenRap}</div>
                        <p>{moment(lichChieu.ngayChieuGioChieu).format("llll")}</p>
                        <Divider className="my-1" style={{ border: "1px solid" }} />
                        <p>Thời Lượng: {lichChieu.thoiLuong} phút</p>
                        <p>Giá Vé: {numeral(lichChieu.giaVe).format("0,0")} VNĐ</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }),
      };
    });
  };
  return (
    <div className="  relative pb-20 " style={{ background: "#14213d" }}>
      <div className="container ">
        <div className="py-10 flex justify-between gap-10">
          <div className="flex-1 w-1/3">
            <div className="relative hover:shadow-2xl h-96 w-325 ">
              <img class="rounded-t-lg w-full h-full" src={detail.hinhAnh} alt="" />
              <div className="opacity-0 hover:opacity-100 transition-all absolute top-0 left-0 w-full h-full bg-opacity-70  ">
                <button
                  onClick={playVideo}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <PlayCircleOutlined className="hover:text-red-600 text-6xl text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-2 w-1/2 text-white space-y-5">
            <p className="text-5xl font-medium">{detail.tenPhim}</p>
            <Divider style={{ border: "1px solid", color: "whitesmoke", opacity: "0.5" }}></Divider>

            <p className="text-3xl">
              <span>Ngày Khởi Chiếu: </span>
              <span>{moment(detail.ngayKhoiChieu).format("LL")}</span>
            </p>
            <p className="text-xl text-justify">
              <span>Nội Dung: </span>
              <span>{detail.moTa}</span>
            </p>
          </div>
          <div className="flex-3 w-1/3">
            <Progress
              size={200}
              format={(percent) => (
                <span className="text-green-500 font-medium block">{percent / 10} Điểm</span>
              )}
              type="circle"
              strokeColor={"green"}
              strokeWidth={10}
              percent={detail.danhGia * 10}
            />
          </div>
        </div>
        <div>
          <div className="text-white text-3xl font-bold py-4">Lịch Chiếu Hiện Có</div>{" "}
          <Tabs
            style={{
              maxHeight: 500,
            }}
            tabPosition="left"
            defaultActiveKey="1"
            items={handleSchedule()}
            onChange={onChange}
          />
        </div>
      </div>
      {isVideoPlaying && (
        <div className="h-screen w-screen bg-black fixed top-0 bg-opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black ">
            <div className="video-container relative">
              <ReactPlayer url={detail.trailer} />
              <button className="text-white text-2xl absolute -right-7 -top-7" onClick={closeVideo}>
                <CloseOutlined />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Progress antd

import React, { useEffect, useState } from "react";
import { getMovieByTheater } from "../../../api/api";
import { Popover, Tabs } from "antd";
import moment from "moment/moment";
import { Desktop } from "../../../component/DeviceType/DeviceType";
import { useNavigate } from "react-router-dom";
moment.locale("vi");

export default function TabMovie() {
  const [heThongRapList, setHeThongRapList] = useState([]);
  let navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    getMovieByTheater()
      .then((res) => {
        setHeThongRapList(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderDsPhim = (movieList) => {
    return movieList.map((movie, index) => {
      return (
        <div className="flex py-10 space-x-5 " key={index}>
          <img src={movie.hinhAnh} alt="" className="w-20 h-32 object-cover" />
          <div>
            <p className="text-xl font-bold text-gray-900">{movie.tenPhim}</p>

            <div className="grid grid-cols-4 gap-5 pr-2 pt-2">
              {movie.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu, i) => {
                return (
                  <button
                    onClick={() => {
                      navigate(`/purchase/${lichChieu.maLichChieu}`);
                    }}
                    className=" bg-red-500 text-white rounded shadow py-2 px-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600"
                  >
                    <span key={i}>
                      {moment(lichChieu.ngayChieuGioChieu)
                        .locale("en")
                        .format("DD/MM/yyyy ~ hh:mm A")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  let handleHeThongRap = () => {
    return heThongRapList.map((heThongRap, index) => {
      return {
        //mẫu của antd items={key,label, children} rồi truyền vào tab
        key: index,
        label: <img src={heThongRap.logo} alt="" className="w-16" />,
        children: (
          <Tabs
            key={index}
            style={{
              height: 500,
            }}
            tabPosition="left"
            defaultActiveKey="1"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <p className="text-green-800 font-medium">{cumRap.tenCumRap}</p>
                    <Popover title={cumRap.diaChi}>
                      <p className="">{cumRap.diaChi}</p>
                    </Popover>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 500,
                      overflow: "scroll",
                    }}
                  >
                    {renderDsPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <Desktop>
      <div id="cum_rap" className="container py-20">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight text-center pb-10">
          DANH SÁCH RẠP VÀ LỊCH CHIẾU
        </h1>
        <Tabs
          style={{
            height: 500,
          }}
          tabPosition="left"
          defaultActiveKey="1"
          items={handleHeThongRap()}
          onChange={onChange}
        />
      </div>
    </Desktop>
  );
}

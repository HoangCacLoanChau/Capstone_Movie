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
        <div className="flex pb-10 space-x-5 " key={index}>
          <img src={movie.hinhAnh} alt="" className="w-20 h-32 object-cover" />
          <div>
            <p>{movie.tenPhim}</p>
            <div className="grid grid-cols-4 gap-5">
              {movie.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu, i) => {
                return (
                  <button
                    onClick={() => {
                      navigate(`/purchase/${lichChieu.maLichChieu}`);
                    }}
                    className=" bg-red-500 px-5 text-white rounded shadow py-2"
                  >
                    <span key={i}>{moment(lichChieu).format("l")}</span>
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
      <div className="container">
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

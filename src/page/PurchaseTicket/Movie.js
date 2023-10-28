import React, { Component } from "react";
import SeatList from "./SeatList";
import SelectedList from "./SelectedList";

export default class Movie extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="title">Đặt Vé.com</div>
        <div className="row ml-5">
          <div
            className="col-xl-6 col-lg-12  d-flex flex-column align-items-center  "
            style={{ zIndex: "4" }}
          >
            <div className="manhinh">Màn Hình</div>
            <div className="screen mb-1"></div>
            <SeatList />
          </div>
          <div className="col-xl-6 col-lg-12 ">
            <div className="d-flex flex-column px-5">
              <div className="d-flex">
                <div className=" gheDuocChon"></div>
                <span className="ml-5 manhinh">Chỗ đã đặt</span>
              </div>
              <div className="d-flex my-3">
                <div className="gheDangChon "></div>
                <span className="ml-5 manhinh">Chỗ đang chọn</span>
              </div>
              <div className="d-flex">
                <div className="gheChuaChon "></div>
                <span className="ml-5 manhinh">Chỗ trống</span>
              </div>
            </div>
            <div>
              <div className="manhinh text-center text-warning">Danh Sách đang chọn</div>
              <h5 className="font-weight-bold text-white text-center">
                ***click chỗ lần nữa để huỷ chọn ( khi đang chọn)
              </h5>

              <SelectedList></SelectedList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

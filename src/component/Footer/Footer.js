import React, { useEffect, useState } from "react";
import { getTheaterInfo } from "../../api/api";
import { AppleFilled, AndroidFilled, TwitterCircleFilled, FacebookFilled } from "@ant-design/icons";
export default function Footer() {
  const [theaterList, setTheaterList] = useState([]);
  useEffect(() => {
    getTheaterInfo()
      .then((res) => {
        setTheaterList(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleTheaterList = () => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {theaterList.map((item, index) => {
          return <img key={index} className="h-9" src={item.logo} alt="" />;
        })}
      </div>
    );
  };
  return (
    <div id="Footer" className="w-full">
      <div className="h-fit w-full bg-black text-white py-5 ">
        <div className=" container divide-y divide-slate-200 px-3">
          <div className=" flex flex-wrap  justify-between   pb-10">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 space-y-5">
              <strong className="">TIX </strong>
              <div className="flex space-x-4 text-gray-500">
                <div>
                  <p className=" hover:text-white">FAQ</p>
                  <p className=" hover:text-white">Brand Guidelines</p>
                </div>
                <div>
                  <p className=" hover:text-white">Thỏa thuận sử dụng</p>
                  <p className=" hover:text-white">Chính sách bảo mật</p>
                </div>
              </div>
            </div>
            <div className="w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  space-y-5">
              <strong>ĐỐI TÁC </strong>
              {handleTheaterList()}
            </div>
            <div className="w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  space-y-5">
              <strong>MOBILE APP</strong>
              <p>
                <AppleFilled style={{ fontSize: "30px", color: "gray", paddingRight: "10px" }} />
                <AndroidFilled style={{ fontSize: "30px", color: "gray" }} />
              </p>
            </div>
            <div className="w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  space-y-5">
              <strong>SOCIAL</strong>
              <p>
                <FacebookFilled style={{ fontSize: "30px", color: "gray", paddingRight: "10px" }} />
                <TwitterCircleFilled style={{ fontSize: "30px", color: "gray" }} />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between space-y-5 items-center">
            <img
              className=" bg-slate-50 mt-5 h-14 sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/2 lg:h-1/3 lg:w-1/4  xl:w-1/5  "
              src="/logo.png"
              alt=""
            />
            <p p className=" sm:w-1/2 md:w-1/4 md:h-1/2 lg:h-1/3 lg:w-1/4 xl:w-1/2 ">
              <strong className="font-medium ">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</strong>
              <p className="font-medium text-justify">
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông,Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi lần thứ 30, ngày
                22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện
                Thoại (Hotline): 1900 545 436
              </p>
            </p>
            <img
              className=" h-14 sm:w-1/3 md:w-1/4 md:h-1/2 lg:h-1/3 lg:w-1/4 xl:w-1/5 "
              src="/copyright.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";
import { Desktop, Mobile, Tablet } from "../DeviceType/DeviceType";
import { Avatar, Button, Drawer, Menu } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import Footer from "../Footer/Footer";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  let handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  let handleLogin = () => (window.location.href = "/login");
  let handleRegister = () => (window.location.href = "/register");

  let renderUserNavForDesktop = () => {
    if (info) {
      return (
        <>
          <span className="font-medium  text-red-600 pr-2">{info.hoTen}</span>
          <Button
            type="danger"
            onClick={handleLogout}
            shape="circle"
            title="Logout"
            icon={<LogoutOutlined />}
            className="border-l-2"
          >
            <span className="font-medium">Đăng Xuất</span>
          </Button>
        </>
      );
      // đã đăng nhập
    } else {
      return (
        <div className="space-x-2">
          <Button onClick={handleLogin}>Đăng nhập</Button>
          <Button onClick={handleRegister}>Đăng kí</Button>
        </div>
      );
    }
  };
  let renderUserNavUnderDesktop = () => {
    if (info) {
      return (
        <div className="pl-4 pt-4">
          <p className="font-medium text-red-600 pb-4 ">
            <Avatar style={{ paddingRight: "5px" }}>
              <UserOutlined />
            </Avatar>
            <span className="pl-4">{info.hoTen}</span>
          </p>
          <Button
            type="danger"
            onClick={handleLogout}
            shape="circle"
            title="Logout"
            icon={<LogoutOutlined />}
          >
            <span className="font-medium">Đăng Xuất</span>
          </Button>
        </div>
      );
      // đã đăng nhập
    } else {
      return (
        <div className="space-x-2">
          <Button onClick={handleLogin}>Đăng nhập</Button>
          <Button onClick={handleRegister}>Đăng kí</Button>
        </div>
      );
    }
  };
  let leftLogo = () => {
    return (
      <NavLink to="/">
        <img src="/logo.png" alt="" className=" h-20" />
      </NavLink>
    );
  };
  let menu = (mode) => {
    let itemClass = "font-medium";
    return (
      <Menu mode={mode} className="">
        <Menu.Item className={itemClass} key="1">
          <Link to="Footer" smooth={true} duration={2000}>
            Lịch Chiếu
          </Link>
        </Menu.Item>
        <Menu.Item className={itemClass} key="2">
          Tin Tức
        </Menu.Item>
        <Menu.Item className={itemClass} key="3">
          Cụm Rạp
        </Menu.Item>
        <Menu.Item className={itemClass} key="4">
          Ứng Dụng
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <div className="h-20 w-full  sticky z-10 top-0 bg-white shadow-lg  ">
      <Desktop>
        <div className="container flex justify-between items-center ">
          {leftLogo()}
          {menu("horizontal")}
          <div className="w-fit">{renderUserNavForDesktop()}</div>
        </div>
      </Desktop>
      <Tablet>
        <div className="container flex justify-between  items-center ">
          {leftLogo()}
          {menu("horizontal")}
          <button
            className="btn btn-blue absolute top-1/2 -translate-y-1/2 right-4"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </button>
          <Drawer title="BOOKING MOVIE" placement="right" onClose={onClose} open={open}>
            {renderUserNavUnderDesktop()}
          </Drawer>
        </div>
      </Tablet>
      <Mobile>
        <div className="container flex justify-between  items-center ">
          {leftLogo()}
          <button
            className="btn btn-blue absolute top-1/2 -translate-y-1/2 right-4"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </button>
          <Drawer title="BOOKING MOVIE" placement="right" onClose={onClose} open={open}>
            <Menu mode="vertical" className="w-96 ">
              <Menu.Item className="font-medium" key="1">
                <Link to="Footer" smooth={true} duration={2000}>
                  Lịch Chiếu
                </Link>
              </Menu.Item>
              <Menu.Item className="font-medium" key="2">
                Tin Tức
              </Menu.Item>
              <Menu.Item className="font-medium" key="3">
                Cụm Rạp
              </Menu.Item>
              <Menu.Item className="font-medium" key="4">
                Ứng Dụng
              </Menu.Item>
            </Menu>
            <div style={{ borderTop: "1px solid" }}>{renderUserNavUnderDesktop()}</div>
          </Drawer>
        </div>
      </Mobile>
    </div>
  );
}

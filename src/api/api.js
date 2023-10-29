import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
    method: "GET",
    headers: configHeaders(),
  });
};
export let getDetailMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};
export let getMovieByTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getBannerAPI = () => {
  return axios({
    url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getTheaterInfo = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getScheduleByMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getSeatList = () => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let RegisterAPI = (body) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: body,
    headers: configHeaders(),
  });
};

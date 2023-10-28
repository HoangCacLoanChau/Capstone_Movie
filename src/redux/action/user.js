import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { SET_INFO } from "../constant/user";
import { userLocalStorage } from "../../api/localService";
import { message } from "antd";
// All Actions are here
export let LoginAction = (values) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeaders(),
      })
      .then((res) => {
        let action = {
          type: SET_INFO,
          payload: res.data.content,
        };
        dispatch(action);
        userLocalStorage.set(res.data.content);
        message.success("Đăng nhập thành công");
        window.location.href = "/";
      })
      .catch((err) => {
        message.error("tài khoản hoặc mật khẩu không đúng");
        console.log(err);
      });
  };
};

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import DetailMovie from "./page/DetailMovie/DetailMovie";
import Layout from "./template/Layout";
import PurchaseTicket from "./page/PurchaseTicket/PurchaseTicket";
import Register from "./page/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Layout>
              <DetailMovie />
            </Layout>
          }
        />
        <Route
          path="/purchase/:id"
          element={
            <Layout>
              <PurchaseTicket />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

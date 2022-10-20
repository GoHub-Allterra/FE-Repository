import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import "styles/index.css";
import { handleAuth } from "utils/redux/reducers/reducer";
import CardsRegister from "./CardsRegister";
import { useNavigate } from "react-router-dom";

export default function CardsLogIn() {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password]);

  const handleApi = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        `https://virtserver.swaggerhub.com/HERIBUDIYANA/Sosial-Media-API/1.0.0/login`,
        {
          username: username,
          password: password,
        }
      )
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userLogin", JSON.stringify(result));
        dispatch(handleAuth(true));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You're logged in",
          showConfirmButton: true,
        });
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          Swal.fire({
            icon: "error",
            text: "cannot process data, invalid input from user",
          });
        } else if (error.response?.status === 500) {
          Swal.fire({
            icon: "error",
            text: "cannot process data, something wrong on server",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "login failed",
          });
        }
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="card w-52">
      <div className="card-body items-center text-center">
        <h1 className="card-title text-3xl text-black dark:text-white py-4 font-pt-sans">
          Login
        </h1>
        <form>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="username"
            className="w-3/4 rounded-md bg-bg-color3 dark:bg-black border-none dark:border-bg-dark my-3 px-1 mx-1"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="password"
            className="w-3/4 rounded-md bg-bg-color3 dark:bg-black border-none dark:border-bg-dark mt-2 mb-4 px-1 mx-1"
          />
        </form>
        <div className="card-actions justify-center items-center">
          {/* <button
            onClick={handleApi}
            loading={loading || disabled}
            className="bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-2 px-1 py-1 text-sm text-white font-pt-sans text-center hover:bg-bg-dark"
          >
            Masuk
          </button> */}
          <button
            onClick={handleApi}
            loading={loading || disabled}
            className="bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-2 px-1 py-1 text-sm text-white font-pt-sans text-center hover:bg-bg-dark"
          >
            Masuk
          </button>
          <CardsRegister />
        </div>
      </div>
    </div>
  );
}

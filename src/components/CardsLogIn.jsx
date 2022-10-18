import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "styles/index.css";

export default function CardsLogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleApi = (e) => {
    e.preventDefault();
    console.log({ username, password });
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
        alert("Logged in");
        navigate("/home");
        localStorage.setItem("Token", result.data.token);
        localStorage.setItem("userLogin", JSON.stringify(result));
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
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
          <div className="card-actions">
            <button
              onClick={handleApi}
              className="bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-5 text-sm text-white font-pt-sans"
            >
              Masuk
            </button>
            <br />
            <hr className="border border-1 border-solid border-bg-color3 dark:border-bg-dark dark:bg-bg-dark bg-bg-color3" />
            <button className="bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-5 text-sm text-white font-pt-sans ">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

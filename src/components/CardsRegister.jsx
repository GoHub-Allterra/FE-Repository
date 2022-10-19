/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import "styles/index.css";
import { apiRequest } from "utils/apiRequest";

function CardsRegister() {
  
  const [showModal, setShowModal] = React.useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect (() => {
    if (email && username && fullname && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, username, fullname, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      nama: fullname,
      username,
      email,
      password,
    };
    apiRequest("http://52.77.251.146/register", "POST", body)
      .then ((res) => {
        console.log(res.message)
        const { message, data } = res.message;
        if (res.message) {
          alert('Daftar Berhasil')
          localStorage.setItem('userDaftar', JSON.stringify(res.message));
        }
      })
      .catch ((err) => {
        const { message } = err.response.message;
        alert(message)
      })
      .finally (()=>
      setShowModal(false));
  };

  return (
    <>
    <label htmlFor="my-modal-3" className="btn modal-button btn-xs bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-2 text-sm text-white font-pt-sans capitalize font-normal">Daftar</label>
      <input type="checkbox" id="my-modal-3" className="modal-toggle"/>
        <div className={`${showModal ?  "modal" : "hidden"}`} >
          <div className="relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <input type="checkbox" id="my-modal" className="modal-toggle"/>
                <div className="p-4 w-full max-w-sm bg-bg-color2 rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-bg-dark dark:border-gray-700">
                  <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="text-2xl font-bold text-bg-color dark:text-bg-color text-center font-pt-sans">YOUR STORY</h1>
                    <div className="border-b-2 border-bg-color"/>
                      <div className="label-email">
                        <input className="email bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                          p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans peer disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600" placeholder="email" type="email" name="email" id="inputemail"
                          onChange={(e) => setEmail(e.target.value)}>
                        </input>
                      </div>
                      <div className="label-username">
                        <input className="username bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                          p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans" placeholder="username" type="username" name="username" id="inputusername"
                          onChange={(e) => setUsername(e.target.value)}>
                        </input>
                      </div>
                      <div className="label-fullname">
                        <input className="fullname bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                          p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans" placeholder="fullname" type="fullname" name="fullname" id="inputfullname"
                          onChange={(e) => setFullname(e.target.value)}>
                        </input>
                      </div>
                      <div className="label-password">
                        <input className="bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                          p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans"  type="password" name="password" id="inputpassword" placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}>
                        </input>
                      </div>
                    <div>
                      <p className="text-kebijakan-privasi text-bg-color font-normal text-sm text-center font-pt-sans">Dengan mendaftar, berarti Anda menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami.</p>
                    </div>
                    <div className="border-b-2 border-bg-color"/>
                    <div className="modal-action">
                    <button className="w-full text-black bg-bg-color hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm
                      px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-pt-sans" type="submit">Daftar</button>
                    </div>
                  </form>
              </div>
          </div>
        </div>
    </>
  )
};

export default CardsRegister;
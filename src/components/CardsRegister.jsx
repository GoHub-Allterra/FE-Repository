/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

function CardsRegister() {
  return (
    <div className="modal-toggle p-4 w-full max-w-sm bg-bg-color2 rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-bg-dark dark:border-gray-700">
      <div className="modal">
      <div className="modal-box">
      <form className="space-y-6">
        <h1 className="text-2xl font-bold text-bg-color dark:text-bg-color text-center font-pt-sans">YOUR STORY</h1>
        <div className="border-b-2 border-bg-color" />
          <div className="label-email">
            <input className="email bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans peer disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600" placeholder="email" type="email" name="email" id="email">
            </input>
          </div>
          <div className="label-username">
            <input className="username bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans" placeholder="username" type="username" name="username" id="username">
            </input>
          </div>
          <div className="label-fullname">
            <input className="fullname bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans" placeholder="fullname" type="fullname" name="fullname" id="fullname">
            </input>
          </div>
          <div className="label-password ">
            <input className="bg-bg-color border border-gray-300 text-text-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
              p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-bg-color font-pt-sans"  type="password" name="password" id="password" placeholder="password">
            </input>
          </div>
          <div>
            <p className="text-kebijakan-privasi text-bg-color font-normal text-sm text-center font-pt-sans">Dengan mendaftar, berarti Anda menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami.</p>
          </div>
          <div className="border-b-2 border-bg-color" />
          <div className="modal-action">
          <button className="w-full text-black bg-bg-color hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm
            px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-pt-sans" type="submit">Daftar</button>
          </div>
      </form>
      </div>
      </div>
    </div>
  )
};

export default CardsRegister;
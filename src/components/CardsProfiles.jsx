import React, { useEffect, useState } from 'react';

import Friendslist from './Friendslist';

import {BsEnvelope} from "react-icons/bs";
import {FaUserFriends} from "react-icons/fa";
import {MdGroups} from "react-icons/md";
import {AiOutlineLogout} from "react-icons/ai"
import { apiRequest } from 'utils/apiRequest';

function CardsProfiles() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [bio, setBio] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    fetchDataProfiles();
  },[]);

  function fetchDataProfiles() {
    const userLogin = JSON.parse(localStorage.getItem('userLogin'));
    const id = userLogin.data.data.id;
    apiRequest(`http://52.77.235.98/users/${id}`, "GET")
    .then ((res) => {
        localStorage.setItem('dataUser', JSON.stringify(res));
        setId(res.data.id);
        setName(res.data.name);
        setPassword(res.data.Password);
        setEmail(res.data.Email);
        setHp(res.data.hp);
        setBio(res.data.bio);
        setImages(res.data.Images);
      }
    )
    .catch ((err) => {
      const { message } = err.response.data;
      alert(message)
    })
    .finally();
  } 

  return (
    <>
    <div className="sticky flex flex-col items-center ">
    <div className="w-full bg-bg-color rounder-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="grid justify-items-center pb-10 pt-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://cdn.iconscout.com/icon/free/png-64/pokemon-pokeball-pikachu-thunder-electric-shock-32217.png" alt=""/>
            <h5 className="mb-1 text-xl font-medium font-pt-sans text-bg-dark dark:text-bg-color">{name }</h5>
            <span className="font-pt-sans text-sm text-bg-dark dark:text-bg-color">Lihat profile anda</span>
            <div className="grid grid-cols-2 gap-2 border-t-2 border-bg-dark ">
              <div className="my-4 px-8 w-20 text-bg-color2"><BsEnvelope/></div>
              <div className="my-4 px-8 w-20 text-bg-color2"><FaUserFriends/></div>
              
            </div>
            <div className="grid grid-cols-2 gap-2 border-b-2 border-bg-dark ">
            <div className="my-4 px-8 w-20 text-bg-color2"><MdGroups/></div>
              <div className="my-4 px-8 w-20 text-bg-color2"><AiOutlineLogout /></div>
            </div>
            <p className="font-pt-sans text-md font-medium text-bg-dark dark:text-bg-color">Daftar Teman</p>
            <div className="grid-cols-3 grid mr-3">
              <div className="ml-3 mt-2"><Friendslist/></div>
              <div className="ml-3 mt-2"><Friendslist/></div>
              <div className="ml-3 mt-2"><Friendslist/></div>
              <div className="ml-3 mt-2"><Friendslist/></div>
              <div className="ml-3 mt-2"><Friendslist/></div>
              <div className="ml-3 mt-2"><Friendslist/></div>

            </div>
          </div>
      </div>
    </div>
  </>
  )
}

export default CardsProfiles;
import React from 'react'

import Friendslist from './Friendslist';

import {BsEnvelope} from "react-icons/bs";
import {FaUserFriends} from "react-icons/fa";
import {MdGroups} from "react-icons/md";
import {SlSettings} from "react-icons/sl"

function CardsProfiles() {
  return (
    <>
    <div className="sticky flex flex-col items-center ">
    <div className="w-full bg-bg-color rounder-lg border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="grid justify-items-center pb-10 pt-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://cdn.iconscout.com/icon/free/png-64/pokemon-pokeball-pikachu-thunder-electric-shock-32217.png" alt=""/>
            <h5 className="mb-1 text-xl font-medium font-pt-sans text-bg-dark dark:text-bg-color">Eling Hooland</h5>
            <span className="font-pt-sans text-sm text-bg-dark dark:text-bg-color">Lihat profile anda</span>
            <div className="grid grid-cols-2 gap-2 border-t-2 border-bg-dark ">
              <div className="my-4 px-8 w-20 text-bg-color2"><BsEnvelope/></div>
              <div className="my-4 px-8 w-20 text-bg-color2"><FaUserFriends/></div>
              
            </div>
            <div className="grid grid-cols-2 gap-2 border-b-2 border-bg-dark ">
            <div className="my-4 px-8 w-20 text-bg-color2"><MdGroups/></div>
              <div className="my-4 px-8 w-20 text-bg-color2"><SlSettings /></div>
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
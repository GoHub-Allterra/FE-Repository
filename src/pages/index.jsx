import React from "react";
import "styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleAuth } from "utils/redux/reducers/reducer";
import { WithRouter } from "utils/Navigations";

import Ads from "components/Ads";
import Layout from "components/Layout";
import CardComment from "components/CardComment";
import CardsLogIn from "components/CardsLogIn";
import CardsProfiles from "components/CardsProfiles";
import CardsPost from "components/CardsPost";

function App() {

  let token = localStorage.getItem('Token');
  let sideMenu;
  let posting;
  let comment;

  if (token === "") {
    sideMenu = <CardsLogIn/>
    comment = <CardComment/>
  } else {
    posting = <CardsPost/>
    sideMenu = <CardsProfiles/>
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="sm:border-r-0 md:border-r-0 lg:border-r-2 border-bg-color3 dark:border-bg-dark">
          {sideMenu}
            
          </div>
          <div className="lg:col-start-2 col-span-3 items-center">
            {posting}
            {comment}
          </div>
          <div>
            <Ads />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WithRouter(App);

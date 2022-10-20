import React, { useEffect } from "react";
import "styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { WithRouter } from "utils/Navigations";
import { setStatus } from "utils/redux/reducers/reducer";

import Ads from "components/Ads";
import Layout from "components/Layout";
import CardsLogIn from "components/CardsLogIn";
import CardsProfiles from "components/CardsProfiles";
import CardsPost from "components/CardsPost";
import CardsPostLogin from "components/CardsPostLogin";
import PostinganOrang from "components/PostinganOrang";

function App() {
  const isLoggedin = useSelector((state) => state.data.isLoggedin);
  const dispatch = useDispatch();
  const dataStatus = useSelector((state) => state.data.dataStatus);

  useEffect(() => {
    dispatch(setStatus(JSON.parse(localStorage.getItem("statusUser"))));
  }, []);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="sm:border-r-0 md:border-r-0 lg:border-r-2 border-bg-color3 dark:border-bg-dark">
            {isLoggedin ? <CardsProfiles /> : <CardsLogIn />}
          </div>
          <div className="lg:col-start-2 col-span-3 items-center">
            {isLoggedin ? <CardsPost /> : null}
            {isLoggedin && dataStatus !== null ? (
              dataStatus.map((data, index) => (
                <CardsPostLogin
                  key={index}
                  keyID={index}
                  fullname={data.fullName}
                  status={data.status}
                />
              ))
            ) : (
              <PostinganOrang />
            )}
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

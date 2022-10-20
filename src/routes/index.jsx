import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { handleAuth } from "utils/redux/reducers/reducer";
import { TokenContext } from "utils/redux/context";
import Home from "pages";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);

  useEffect(() => {
    const getToken = localStorage.getItem("Token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;

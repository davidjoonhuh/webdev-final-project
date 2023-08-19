import React from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import videoReducer from "./reducers/video-reducer";
import SearchPage from "./search";

const store = configureStore(
    { reducer: { vids: videoReducer } });

function Youboxd() {
  return (
      <Provider store={store}>

        <div>
          <div className="row">
            <div className="col-2">
              <NavigationSidebar />
            </div>
            <div className="col-7">
              <Routes>
                <Route path="/search" element={<SearchPage/>} />
              </Routes>
            </div>
            <div className="col-3">
            </div>
          </div>
        </div>
      </Provider>
  );
}
export default Youboxd;
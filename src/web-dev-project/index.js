import React from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import videoReducer from "./reducers/video-reducer";
import SearchPage from "./search";
import UserProfileScreen from "./Profile-Page/user-profile";
import PublicProfileScreen from "./Profile-Page/public-profile";
import AdminProfileScreen from "./Profile-Page/admin-profile";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
    { reducer: { vids: videoReducer,
        user: authReducer} });

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
                <Route path="/profile/:profileId" element={<UserProfileScreen />} />
                <Route path="/profile" element={<PublicProfileScreen />} />
                <Route path="/admin" element={<AdminProfileScreen />} />
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
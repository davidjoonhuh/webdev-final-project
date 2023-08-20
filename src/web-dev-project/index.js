import {Routes, Route} from "react-router";
import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import UserProfileScreen from "./Profile-Page/user-profile-screen";
import authReducer from "./reducers/auth-reducer";
import PublicProfileScreen from "./Profile-Page/public-profile-screen";
import LoginScreen from "./Login-Page/login-screen";
import RegisterScreen from "./Register-Page/register-screen";


const store = configureStore({
  reducer: {
    whoToFollowList: whoReducer,
    user: authReducer
  }
});

function Youboxd() {
  return (<Provider store={store}>
    <div><Nav/>
      <div className="row">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar/>
        </ div>
        <div className="col-10 col-lg-7"><Routes>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/profile" element={<UserProfileScreen/>}/>
          <Route path="/profile/:profileId" element={<PublicProfileScreen/>} />
        </ Routes></ div>
        <div
            className="d-none d-lg-block col-lg-4 col-xl-3">
          <WhoToFollowList /></ div>
      </ div>

    </ div>
  </ Provider>);
}

export default Youboxd;
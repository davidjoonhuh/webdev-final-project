import React, { useReducer } from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import youtubeReducer from "./reducers/youtube-reducer";
import SearchPage from "./search";
import DetailsPage from "./details";
import HomeScreen from "./user/home-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import commentsReducer from "./reducers/comments-reducer";
import usersReducer from "./reducers/users-reducer";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import UserProfileScreen from "./profile-screen/user-profile-screen";
import PublicProfileScreen from "./profile-screen/public-profile-screen";
import store from "./store"

function Youboxd() {
    return (
        <Provider store={store}>

            <div className="d-none d-xxl-block">
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/details" element={<DetailsPage />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen />} />
                            <Route path="/admin" element={<AdminScreen/>}/>

                        </Routes>
                    </div>
                    <div
                        className="col-3">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>

            <div className="d-none d-xl-block d-xxl-none">
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-6">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/details" element={<DetailsPage />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen />} />
                            <Route path="/admin" element={<AdminScreen/>}/>
                        </Routes>
                    </div>
                    <div
                        className="col-4">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block d-xl-none">
                <div className="row">
                    <div className="col-1">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/details" element={<DetailsPage />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen />} />
                            <Route path="/admin" element={<AdminScreen/>}/>
                        </Routes>
                    </div>
                    <div
                        className="col-4">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>

            <div className="d-none d-md-block d-lg-none">
            <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-8">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/details" element={<DetailsPage />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen />} />
                            <Route path="/admin" element={<AdminScreen/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

            <div className="d-none d-sm-block d-md-none">
            <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-8">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/details" element={<DetailsPage />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen />} />
                            <Route path="/admin" element={<AdminScreen/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Youboxd;
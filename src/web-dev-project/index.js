import React, { useReducer } from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import youtubeReducer from "./reducers/youtube-reducer";
import SearchPage from "./search";
import DetailsPage from "./details";
import HomeScreen from "./user/home-screen";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
import commentsReducer from "./reducers/comments-reducer";
import usersReducer from "./reducers/users-reducer";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import UserProfileScreen from "./profile-screen/user-profile-screen";
import PublicProfileScreen from "./profile-screen/public-profile-screen";

const store = configureStore({
    reducer: { 
        whoToFollowList: whoReducer,
        vids: youtubeReducer,
        user: authReducer,
        comments: commentsReducer,
        users: usersReducer
    }
});
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
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/search" element={<SearchPage/>} />
                            <Route path="/details" element={<DetailsPage/>} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<UserProfileScreen/>}/>
                            <Route path="/profile/:profileId" element={<PublicProfileScreen/>} />
                        </Routes>
                    </div>
                   <div
                    className="d-none d-lg-block col-lg-4 col-xl-3">
                    <WhoToFollowList /></ div>
                </div>
            </div>
        </Provider>
    );
}
export default Youboxd;

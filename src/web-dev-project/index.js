import React, { useReducer } from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { Provider } from "react-redux";
import { useSelector } from 'react-redux';
import SearchPage from "./search";
import DetailsPage from "./details";
import HomeScreen from "./home-screen";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import WhoToFollowList from "./who-to-follow-list";
import UserProfileScreen from "./profile-screen/user-profile-screen";
import PublicProfileScreen from "./profile-screen/public-profile-screen";
import AdminProfileScreen from './profile-screen/admin-profile-screen';
import store from "./store"

function Youboxd() {

    const isAdmin = useSelector(state => state.users.user?.isAdmin || false);

    return (
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
                            <Route path="/profile" element={isAdmin ? <AdminProfileScreen /> : <UserProfileScreen />} />
                            <Route path="/profile/:profileId" element={<PublicProfileScreen/>} />
                        </Routes>
                    </div>
                   <div
                    className="d-none d-lg-block col-lg-4 col-xl-3">
                    <WhoToFollowList /></ div>
                </div>
    )
}

export default Youboxd;

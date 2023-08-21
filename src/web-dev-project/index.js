import React, { useReducer } from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import youtubeReducer from "./reducers/youtube-reducer";
import SearchPage from "./search";
import DetailsPage from "./details";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";


const store = configureStore({
    reducer: { 
        vids: youtubeReducer,
        user: authReducer
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
                            <Route path="/search" element={<SearchPage/>} />
                            <Route path="/details" element={<DetailsPage/>} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
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
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserHomeScreen from "./user-home-screen";
import AnonymousHomeScreen from "./anonymous-home-screen";

const HomeScreen = () => {
    const { currentUser } = useSelector((state) => state.user);

    if (currentUser) {
        return (
            <>
                <h1>Welcome to Youboxd</h1>
                <h2>See what your friends are commenting</h2>
                <UserHomeScreen />

            </>
        )
    } else {
        return (
            <>
                <h1>Welcome to Youboxd</h1>
                <h2>See what strangers are commenting</h2>
                <AnonymousHomeScreen />

            </>
        )
    }


}



// User most commented page



export default HomeScreen;

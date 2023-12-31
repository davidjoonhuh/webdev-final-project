import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
    profileThunk,
    logoutThunk,
    updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = async () => {
        const action = await dispatch(updateUserThunk(profile));

        setProfile(action.payload);
    };
    const loadProfile = async () => {
        const action = await dispatch(profileThunk());

        setProfile(action.payload);
    };

    console.log(currentUser);

    useEffect(() => {
        loadProfile();
    }, []);

    console.log(profile);

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/youboxd/login");
                }}
            >
                {" "}
                Logout
            </button>
            <button onClick={save}>Save </button>
        </div>
    );
}
export default ProfileScreen;

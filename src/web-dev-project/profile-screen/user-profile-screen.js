import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";
import * as whoService from "../services/who-service";
import { Link } from "react-router-dom";
import { findUserByIdThunk } from "../services/users-thunks";

function UserProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.users);
  const [selectedColor, setSelectedColor] = useState([]);
  const [profile, setProfile] = useState(currentUser);
  const [myFollowing, setMyFollowing] = useState([]);
  const [myFollowers, setMyFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadProfile = async () => {
    setLoading(true);
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser) {
      loadProfile();
    }
  }, [currentUser]);

  useEffect(() => {
    let followingIds = profile?.following ?? [];
    let followerIds = profile?.followers ?? [];

    const fetchUserDataIfNeeded = async (userId) => {
      if (!users[userId]) {
        await dispatch(findUserByIdThunk(userId));
      }
    };

    const fetchMyFollowing = async () => {
      try {
        let following = await Promise.all(
          followingIds.map(async (followingId) => {
            const followingData = await whoService.findUserById(followingId);
            return followingData;
          })
        );
        setMyFollowing(following);
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchMyFollowers = async () => {
      try {
        let followers = await Promise.all(
          followerIds.map(async (followerId) => {
            const followerData = await whoService.findUserById(followerId);
            return followerData;
          })
        );
        setMyFollowers(followers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyFollowing();
    fetchMyFollowers();
  }, [profile]); // profile added to dependency array

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate("../login");
  };

  const handleUpdate = async () => {
    try {
      const updatedProfile = {
        ...profile,
        color: selectedColor,
      };
      await dispatch(updateUserThunk(updatedProfile));
      setProfile(updatedProfile);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return (
      <div>
        <h1>Profile Screen</h1>
        <span>
          Please log in to edit your profile! If you have questions, please
          email us at IT@YoubXD.edu
        </span>
      </div>
    );
  }
  const shouldShowColorSelection = myFollowers.length >= 5;

  const colorChoices = [
    { name: "Black", color: "black" },
    { name: "Red", color: "red" },
    { name: "Blue", color: "blue" },
  ];

  console.log(profile);
  return (
    <div>
      <h1>❤User Profile Page❤️</h1>
      {profile && (
        <div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            {myFollowers.length >= 5 ? (
              <span style={{ color: "blue" }}>
                {" "}
                This is YounXD's Verified User☑️☑️☑️
              </span>
            ) : (
              <span style={{ color: "red" }}>
                {" "}
                This is a normal User!🚩🚩🚩
              </span>
            )}
          </div>
          <div>
            <label style={{ color: profile.color ?? "black" }}>
              🌸Username🌸
            </label>
            <input
              className="form-control"
              type="text"
              value={profile.username}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  username: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>

          <div>
            {shouldShowColorSelection && (
              <div>
                <label>
                  🏷️🏷️🏷️Choose Your Username's Color(Only for Verified User!)：
                </label>
                <select
                  value={selectedColor}
                  onChange={(event) => setSelectedColor(event.target.value)}
                >
                  {colorChoices.map((choice) => (
                    <option key={choice.color} value={choice.color}>
                      {choice.name}
                    </option>
                  ))}
                </select>
                <button onClick={handleUpdate} className="btn btn-primary mt-2">
                  Update Color
                </button>
              </div>
            )}
          </div>
          <br />
          <div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">🌷First Name</label>
                  <input
                    className="form-control"
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
              </div>
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">🌷Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={profile.lastName ?? ""}
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
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <label>🎀Email</label>
                <input
                  className="form-control"
                  type="text"
                  value={profile.email ?? ""}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      email: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div>
                <label>🐇Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  value={profile.phone ?? ""}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      phone: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label>💒Address</label>
            <input
              className="form-control"
              type="text"
              value={profile.address ?? ""}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  address: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>

          <button onClick={handleUpdate} className="btn btn-primary mt-2 mr-4">
            Update
          </button>

          <button
            className="btn btn-primary mt-2 btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
      <div>
        <div className="row">
          <div className="col-6">
            <ul className="list-group mt-2">
              <li className="list-group-item">
                <div>
                  <i className="fa-solid fa-user"></i>
                  <span className="fw-bolder">💓 Following: </span>{" "}
                  {myFollowing.length ?? ""}
                </div>
              </li>

              {myFollowing.map((user) => (
                <li className="list-group-item" key={user._id}>
                  <Link
                    className="nav-link"
                    to={"/youboxd/profile/" + user._id}
                    style={{
                      textDecoration: "underline",
                      color: "black",
                      borderBottomColor: "blue",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i> {user.firstName}{" "}
                    {user.lastName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-group mt-2">
              <li className="list-group-item">
                <div>
                  <i className="fa-solid fa-user"></i>
                  <span className="fw-bolder">🎈 Followers: </span>{" "}
                  {myFollowers.length ?? ""}
                </div>
              </li>
              {myFollowers.map((user) => (
                <li className="list-group-item" key={user._id}>
                  <Link
                    className="nav-link"
                    to={"/youboxd/profile/" + user._id}
                    style={{
                      textDecoration: "underline",
                      color: "black",
                      borderBottomColor: "blue",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                    {user.firstName} {user.lastName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      {/*       <ul className="list-group mt-2">
          <li className="list-group-item">
            <div>
              <i className="fa-brands fa-square-twitter"></i>
              <span className="fw-bolder"> My Comments: </span>
            </div>
          </li>
          {comments.map((comment) => (
              <li className="list-group-item">
                <div className="row">
                  <div className="col-10">
                    <i className="bi bi-x-lg float-end btn btn-danger rounded-pill float-end mt-2 ps-2 pe-2 fw-bold"
                       onClick={() => deleteTuitHandler(comment._id)}>Delete</i>
                    <div><span className="fw-bolder">{comment.username}</span> <i
                        className="fas fa-check-circle wd-blue"></i> @{comment.username}
                    </div>
                    <div>{comments.text}</div>
                  </div>
                </div>
              </li>
          ))}
        </ul>*/}
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <div>
            <i className="fa-solid fa-heart"></i>
            <span className="fw-bolder"> 💕 My Likes: </span>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oTwkYW0EGbc?si=5OFFbTXS4KgTuiWo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rWB_thEvs20?si=z69Aijy2Qw_YBYrZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserProfileScreen;

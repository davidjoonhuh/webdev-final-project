import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import { deleteTuitThunk } from "../services/tuits-thunks";
import * as whoService from "../services/who-service";
import {Link} from "react-router-dom";

function UserProfileScreen() {
  const {currentUser} = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [myFollowing, setMyFollowing] = useState([]);
  const [myFollowers, setMyFollowers] = useState([]);
  const [myLikes, setMyLikes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const loadProfile = async () => {
    const action = await dispatch(profileThunk());

    setProfile(action.payload);
  };
  
  useEffect(() => {
    const fetchMyFollowing = async () => {
      try {
        let followingIds = !profile.following ? [] : profile.following;
        let following = await Promise.all(
            followingIds.map(async followingId => {
              const following = await whoService.findUserById(followingId)
              return following;
            }))
        setMyFollowing(following);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMyFollowers = async () => {
      try {
        let followerIds = !profile.followers ? [] : profile.followers;
        let follower = await Promise.all(followerIds.map(async followerId => {
          const follower = await whoService.findUserById(followerId)
          // console.log(follower)
          return follower;
        }))
        setMyFollowers(follower);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMyLikes = async () => {
      try {
        let tuitsId = !profile.likes ? [] : profile.likes;
        let likeTuits = await Promise.all(tuitsId.map(async id => {
          const tuit = await whoService.findUserById(id)
          // console.log(follower)
          return tuit;
        }))
        setMyLikes(likeTuits);
      } catch (error) {
        console.error(error);
      }
    };
    loadProfile();
    fetchMyFollowing();
    fetchMyFollowers();
    fetchMyLikes();
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate("/youboxd/login");
  };
  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTuitHandler = async (id) => {
    await dispatch(deleteTuitThunk(id));
  }
  if (!profile) {
    return (
        <div>
          <h1>Profile Screen</h1>
          <span>Please log in to edit your profile! If you have questions, please email us at IT@YoubXD.edu</span>
        </div>
    );
  }

  return (
      <div>
        <h1>❤User Profile Page❤️</h1>
        {profile && (
            <div>
              <div>
                <label>🌸Username🌸</label>
                <input
                    className="form-control"
                    type="text"
                    value={profile.username} readOnly
                />
              </div>
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
                              firstName: event.target.value
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
                              lastName: event.target.value
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
                            email: event.target.value
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
                            phone: event.target.value
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
                        address: event.target.value
                      };
                      setProfile(newProfile);
                    }}
                />
              </div>
              <button onClick={handleUpdate}
                      className="btn btn-primary mt-2 mr-4">
                Update
              </button>
              <button className="btn btn-primary mt-2 btn-danger"
                      onClick={handleLogout}>
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
                    <span
                        className="fw-bolder">💓 Following: </span>
                  </div>
                </li>

                {myFollowing.map((user) => (
                    <li className="list-group-item" key={user._id}>
                      <Link className="nav-link"
                            to={"/tuiter/profile/" + user._id}
                            style={{
                              textDecoration: 'underline',
                              color: 'blue'
                            }}>
                        <i className="fa-solid fa-arrow-right"></i> {user.firstName} {user.lastName}
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
                    <span
                        className="fw-bolder">🎈 Followers: </span>
                  </div>
                </li>
                {myFollowers.map((user) => (
                    <li className="list-group-item" key={user._id}>
                      <Link className="nav-link"
                            to={"/tuiter/profile/" + user._id}
                            style={{
                              textDecoration: 'underline',
                              color: 'blue'
                            }}>
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
        <ul className="list-group mt-2">
          <li className="list-group-item">
            <div>
              <i className="fa-solid fa-heart"></i>
              <span className="fw-bolder"> 💕 My Likes: </span>
            </div>
            <div>
              <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/oTwkYW0EGbc?si=5OFFbTXS4KgTuiWo"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
              <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/rWB_thEvs20?si=z69Aijy2Qw_YBYrZ"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>

            </div>
          </li>
          {myLikes.map((tuit) => (
              <li className="list-group-item">
                <div className="row">
                  <div className="col-2">
                    <img width={70} className="float-end rounded-3"
                         src={`./images/${tuit.image}`}/>
                  </div>
                  <div className="col-10">
                    <div><span className="fw-bolder">{tuit.username}</span> <i
                        className="fas fa-check-circle wd-blue"></i> {tuit.username} • {tuit.time}
                    </div>
                    <div>{tuit.tuit}</div>
                  </div>
                </div>
              </li>
          ))}

        </ul>
      </div>
  );
}

export default UserProfileScreen;

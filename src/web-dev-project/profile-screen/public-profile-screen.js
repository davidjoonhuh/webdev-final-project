import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {
  logoutThunk,
  profileThunk,
  updateUserThunk
} from "../services/auth-thunks";
import * as tuitsService from "../services/tuits-service";
import * as whoService from "../services/who-service";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';

function PublicProfileScreen() {
  const {profileId} = useParams();
  console.log("-------- profileId ")
  console.log(profileId)
  const [profile, setProfile] = useState({});
  const [myTuits, setMyTuits] = useState([]);
  const [myFollowing, setMyFollowing] = useState([]);
  const [myFollowers, setMyFollowers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyFollowing = async (followingIds) => {
      console.log("fetchMyFollowing====================")
      console.log(followingIds)
      try {
        let following = await Promise.all(
            followingIds.map(async followingId => {
              const following = await whoService.findUserById(followingId)
              // console.log(following)
              return following;
            }))
        console.log("myfollowing:")
        console.log(following)
        setMyFollowing(following);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMyFollowers = async (followerIds) => {
      console.log("fetchMyFollowers====================")
      console.log(followerIds)
      try {
        let follower = await Promise.all(followerIds.map(async followerId => {
          const follower = await whoService.findUserById(followerId)
          // console.log(follower)
          return follower;
        }))
        console.log("myfollowers:")
        console.log(follower)
        setMyFollowers(follower);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchProfile = async () => {
      // console.log("fetchProfile-----------------")
      const profile = await whoService.findUserById(profileId)
      console.log("------------- profile in fetchProfile")
      console.log(profile)
      setProfile(profile)

      await fetchMyFollowing(profile.following);
      await fetchMyFollowers(profile.followers);
    };
    const fetchMyTuits = async () => {
      // console.log("fetchMyTuits====================")
      try {
        // console.log(profile)
        const tuits = await tuitsService.findOtherTuits(profileId);
        // console.log("profile myTuit:" + tuits)
        setMyTuits(tuits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
    fetchMyTuits();
  }, [profileId]);

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
        <h1>❤Welcome to My Profile Screen❤</h1>
        {profile && (
            <div>
              <div style={{border: '1px solid black', padding: '10px'}}>
                {myFollowers.length >= 5 ? (
                    <span style={{color: 'blue'}}>  This is YounXD's Verified User☑️☑️☑️</span>
                ) : (
                    <span
                        style={{color: 'red'}}>  This is a normal User!🚩🚩🚩</span>
                )}
              </div>

              <div>
                <label>🌸Username🌸</label>
                <input
                    className="form-control"
                    type="text"
                    value={profile.username} readOnly
                />
              </div>
              <div>
                <label>🌷First Name🌷</label>
                <input
                    className="form-control"
                    type="text"
                    value={profile.firstName} readOnly
                    onChange={(event) => {
                      const newProfile = {
                        ...profile,
                        firstName: event.target.value
                      };
                      setProfile(newProfile);
                    }}
                />
              </div>
              <div>
                <label>🌷Last Name🌷</label>
                <input
                    className="form-control"
                    type="text"
                    value={profile.lastName ?? ""} readOnly
                    onChange={(event) => {
                      const newProfile = {
                        ...profile,
                        lastName: event.target.value
                      };
                      setProfile(newProfile);
                    }}
                />
              </div>
              {!profileId && <div>
                <label>Email</label>
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
              </div>}
              {!profileId && <div>
                <label>Phone</label>
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
              </div>}
              {!profileId && <button onClick={handleUpdate}
                                     className="btn btn-primary">
                Update
              </button>}
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
                        className="fw-bolder">💓 Following: </span> {myFollowing.length
                      ?? ""}
                  </div>
                </li>

                {myFollowing.map((user) => (
                    <li className="list-group-item" key={user._id}>
                      <Link
                          className="nav-link"
                          to={"/youboxd/profile/" + user._id}
                          style={{
                            textDecoration: 'underline',
                            color: 'black',
                            borderBottomColor: 'blue'
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
                        className="fw-bolder">🎈 Followers: </span> {myFollowers.length
                      ?? ""}
                  </div>
                </li>
                {myFollowers.map((user) => (
                    <li className="list-group-item" key={user._id}>
                      <Link
                          className="nav-link"
                          to={"/youboxd/profile/" + user._id}
                          style={{
                            textDecoration: 'underline',
                            color: 'black',
                            borderBottomColor: 'blue'
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
                    <div><span className="fw-bolder">{comment.username}</span> <i
                        className="fas fa-check-circle wd-blue"></i> @{comment.username}
                    </div>
                    <div>{comments.text}</div>
                  </div>
                </div>
              </li>
          ))}
        </ul>*/}
      </div>
  );
}

export default PublicProfileScreen;

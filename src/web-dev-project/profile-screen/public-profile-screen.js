import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  logoutThunk,
  profileThunk,
  updateUserThunk
} from "../services/auth-thunks";
import * as whoService from "../services/who-service";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { findUserCommentsThunk } from "../services/comments-thunks";

function PublicProfileScreen() {
  const { profileId } = useParams();
  console.log("-------- profileId ")
  console.log(profileId)
  const [profile, setProfile] = useState({});
  const [myFollowing, setMyFollowing] = useState([]);
  const [myFollowers, setMyFollowers] = useState([]);

  const { comments } = useSelector((state) => state.comments)


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
      const profile = await whoService.findUserById(profileId)
      console.log("------------- profile in fetchProfile")
      console.log(profile)
      setProfile(profile)
      await fetchMyFollowing(profile.following);
      await fetchMyFollowers(profile.followers);
    };
    fetchProfile();
    dispatch(findUserCommentsThunk(profileId))
  }, [profileId]);

  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideoSelect = async (id) => {
    navigate("/youboxd/details?identifier=" + id);
  }

  function YouTubeThumbnail({ videoId }) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    return (
      <div>
        <img width={200} height={150} src={thumbnailUrl} alt={`Thumbnail for video ${videoId}`} />
      </div>
    );
  }

  return (
    <div>
      <h1>❤Welcome to My Profile Screen❤</h1>
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
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <div>
            <i className="fa-brands fa-square-twitter"></i>
            <span className="fw-bolder"> My Comments: </span>
          </div>
        </li>
        {comments.map((comment) => (
          <li className="list-group-item">

            <div className="row">
              <div className="col-auto">
                <button onClick={() => handleVideoSelect(comment.videoId)}> <YouTubeThumbnail videoId={comment.videoId} /> </button>
              </div>
              <div className="col-auto">
                 {comment.text}
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicProfileScreen;

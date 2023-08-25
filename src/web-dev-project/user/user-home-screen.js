import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findCommentsThunk } from "../services/comments-thunks";
import * as whoService from "../services/who-service";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UserHomeScreen = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comments)
  const [myFollowing, setMyFollowing] = useState([]);


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

    const fetchFollowing2 = async () => {
      await fetchMyFollowing(currentUser.following);
      await dispatch(findCommentsThunk());
    }
    fetchFollowing2();
  }, [])

  console.log("my following")
  console.log(myFollowing)


  function CommentList({ following, comments }) {
    const filteredComments = comments.filter(comment =>
      following.some(followedUser => followedUser._id === comment.authorId)
    );

    function YouTubeThumbnail({ videoId }) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

      return (
        <div>
          <img width={200} height={150} src={thumbnailUrl} alt={`Thumbnail for video ${videoId}`} />
        </div>
      );
    }

    const handleVideoSelect = async (id) => {
      navigate("/youboxd/details?identifier=" + id);
    }

    console.log(filteredComments)
    if (filteredComments.length > 0) {
          return (
      <div>
        <h3>Comments by Following:</h3>
        <ul className="list-group">
          {filteredComments.map((comment, index) => {
            const author = following.find(user => user._id === comment.authorId);
            return (
              <li className="list-group-item" key={index}>
                <div className="row">
                  <div className="col-auto">
                    <button onClick={() => handleVideoSelect(comment.videoId)}> <YouTubeThumbnail videoId={comment.videoId} /> </button>
                  </div>

                  <div className="col-auto">
                    <div><b> <Link className="nav-link" to={"/youboxd/profile/" + comment.authorId}
                            style={{ textDecoration: 'underline' }}> {author.username}</Link></b> commented:</div>
                    <div> "<i> {comment.text} </i>" </div>
                  </div>
                </div>

              </li>
            );
          })}
        </ul>
      </div>
    );
    } else {
      return (
        <>
          <h3>Uh oh! Follow other users to populate your feed.</h3>
        </>
      )
    }

  }

  return (
    <div>
      <CommentList following={myFollowing} comments={comments} />
    </div>
  );

}



// User most commented page



export default UserHomeScreen;

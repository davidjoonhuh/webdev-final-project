import React from "react";
import * as whoService from "../services/who-service"

const CommentsListItem = ( {comment }) => {
    // Comment details here
    // const fetchUsername = async () => {
    //     const user = await whoService.findUserById(comment.authorId);
    //     return user;
    // }
    
    // const user = fetchUsername()

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{comment.authorId} </div>
                    <div>{comment.text}</div>
                </div>
            </div>
        </li>
    );



};

export default CommentsListItem
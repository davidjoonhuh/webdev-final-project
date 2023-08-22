import React from "react";

const CommentsListItem = ( {comment }) => {
    // Comment details here
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
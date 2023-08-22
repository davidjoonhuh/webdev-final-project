import React from "react";

const EmptyCommentBox = () => {
    // Comment details here
    return (
        <div>
        <textarea readonly="readonly" placeholder="Log in or create an account to comment!"
            className="form-control border-0">
        </textarea>
        <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">
                Comment
            </button>
        </div>
    </div>
    );



};

export default EmptyCommentBox
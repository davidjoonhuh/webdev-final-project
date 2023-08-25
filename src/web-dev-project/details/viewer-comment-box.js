import React, { useEffect, useState } from "react";

const ViewerCommentBox = () => {
    // Comment details here

    return (
        <div>
        <textarea placeholder="Viewers can't comment!" className="form-control border-0">
        </textarea>
        <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                >
                Comment
            </button>
        </div>
    </div>
    );



};

export default ViewerCommentBox
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import "./index.css";

import { updateVideoArray } from "../reducers/video-reducer";
import { useDispatch } from "react-redux";
import youtubeApi from "../youtube-api";


function SearchBar() {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const handleChange = (event) => {
        //Store the input value to local state
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("hi")
        console.log(inputText)


        const response = await youtubeApi.get('/search', {
            params: {
                q: inputText,
                type: "video"
            }
        })
        // console.log(response.data.items)
        await dispatch(updateVideoArray(response.data.items))
    }
    
    return <>
        <div className="row">
            <div className="position-relative">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Search YouTube" id="search-bar"
                        className="form-control rounded-pill ps-5" />
                    <label htmlFor="search-bar" className="fs-3 position-absolute 
                       wd-nudge-up">
                        <AiOutlineSearch />
                    </label>
                </form>
            </div>

        </div>
    </>;
}

export default SearchBar
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import "./index.css";

function SearchBar(props) {
    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
      };
    const handleSubmit = event => {
        event.preventDefault();
        console.log("hi") 
        console.log(inputText)
        props.handleFormSubmit(inputText)
    }
    return <>
        <div className="row">
            <div className="position-relative">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Search <Put Name of App Here>" id="search-bar"
                        className="form-control rounded-pill ps-5" />
                    <label htmlFor="search-bar" className="fs-3 position-absolute 
                       wd-nudge-up">
                        <AiOutlineSearch/>
                    </label>
                </form>
            </div>
        </div>
    </>;
}

export default SearchBar
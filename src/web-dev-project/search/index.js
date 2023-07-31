import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

function SearchPage() {
    return <>
        <h2>Search Page</h2>
        
        <div className="row">
            <div className="position-relative">
                <form>
                    <input placeholder="Search <Put Name of App Here>" id="search-bar"
                        className="form-control rounded-pill ps-5" />
                    <label for="search-bar" className="fs-3 position-absolute 
                       wd-nudge-up">
                        <AiOutlineSearch/>
                    </label>
                </form>
            </div>
        </div>
    </>;
}

export default SearchPage
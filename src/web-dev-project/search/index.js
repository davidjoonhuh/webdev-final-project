import "./index.css";
import SearchBar from "./search-bar";
import VideoList from "./video-list";

function SearchPage() {

    return (
        <>
            <h2>Search Page</h2>
            <SearchBar/>
            <br/>
            <VideoList/>
        </>
    );
}

export default SearchPage;
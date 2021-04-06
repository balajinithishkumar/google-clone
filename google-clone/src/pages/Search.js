import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Search() {
  const [hide_search_buttons] = useState(false);
  const history = useHistory();
  const [input, setinput] = useState("");
  // const search = (e) => {
  //   e.preventDefault();
  //   history.push("/Search");
  // };
  function search(e) {
    e.preventDefault();
    history.push("/Search");
    console.log("hi i am nithish");
  }
  return (
    <form className="search">
      <div className="search_bar">
        <div className="search_input">
          <SearchIcon />
          <input
            placeholder="Search Google or type a url"
            type="text"
            onChange={(e) => setinput(e.target.value)}
          ></input>
          <p>
            <MicIcon />
          </p>
        </div>
      </div>
      {!hide_search_buttons ? (
        <div className="search_button">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_button">
          <Button
            className="search_button_hidden"
            type="submit"
            variant="outlined"
            onClick={search}
            Google
            Search
          >
            Google Search
          </Button>
          <Button className="search_button_hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}
export default Search;

import React, { useState } from "react";
import "./SearchPage.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Searchcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MicIcon from "@material-ui/icons/Mic";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import BookIcon from "@material-ui/icons/Book";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import { Link } from "react-router-dom";
function SearchPage() {
  const [input, setinput] = useState("");
  const [API_KEY] = useState("AIzaSyDsctxpHX6XC5YeCSEoPziFhSLHUaHGP4A");
  const [CONTEXT_KEY] = useState("65e860845410f4eb8");
  const [user_result, setuser_result] = useState([]);
  function inputs(e) {
    e.preventDefault();
    if (input.length > 0) {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${input}`
      )
        .then((res) => res.json())
        .then((result) => {
          setuser_result(result.items);
        });
    } else {
      alert("Search input is empty!");
    }
  }
  return (
    <form>
      <div className="searchpages">
        <div className="SearchPage">
          <div className="search_page">
            <div className="search_page_logo">
              <Link to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="search_page_input">
              <input
                value={input}
                type="text"
                placeholder="Search Google or type a url"
                onChange={(e) => setinput(e.target.value)}
              ></input>
              <div className="nithu">
                <p>
                  <CloseIcon onClick={() => setinput("")} />
                </p>
                <span></span>
                <MicIcon />
                <button type="submit" onClick={inputs}>
                  <Searchcon />
                </button>
              </div>
            </div>
            <div className="search_page_user">
              <AppsIcon />
              <p>
                <Avatar src="https://media1.popsugar-assets.com/files/thumbor/BIuyg4EYKCKQqOg44gdHyF_qi7I/613x51:2226x1664/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/26/001/n/1922398/c8450c525f97556842e0e2.16322452_/i/Will-Smith.jpg" />
              </p>
            </div>
            <div className="search_page_icons">
              <Searchcon />
              <h>All</h>
              <InsertPhotoIcon />
              <h>Image</h>
              <BookIcon />
              <h>Books</h>
              <FiberNewIcon />
              <h>News</h>
              <div className="search_page_icons_left">
                <p>Settings</p>
                <p>Tools</p>
              </div>
            </div>
          </div>
          <div className="search_page_border"></div>
        </div>
        <div className="search_result">
          {/* {input_time.map((input_time) => (
            <div className="search_result_time">
              {console.log(input_time)}
              <h>About</h>
              <h>{input_time.searchInformation.totalResults}</h>
              <h>results</h>
              <h>({input_time.formattedSearchTime})</h>
            </div>
          ))} */}
          {user_result.map((user_result) => (
            <div className="results">
              <span>{user_result.displayLink}</span>
              <a href={user_result.link}>
                <h2>{user_result.title}</h2>
              </a>
              <p>{user_result.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
export default SearchPage;

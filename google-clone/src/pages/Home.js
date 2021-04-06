import React from "react";
import "./Home.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_left">
          <Link to="About"> About</Link>
          <Link to="Store"> Store</Link>
        </div>
        <div className="home_right">
          <Link to="Email"> Email</Link>
          <Link to="Images"> Images</Link>
          <div className="icons">
            <IconButton>
              <AppsIcon />
            </IconButton>
            <Avatar />
          </div>
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""

        ></img>
      </div>
      <div className="search_container">
        <Search />
      </div>
    </div>
  );
}
export default Home;

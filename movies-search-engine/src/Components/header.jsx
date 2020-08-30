import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import imdbLogo from "../images/imdb.png";
import { SearchSharp } from "@material-ui/icons";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="app__bar">
      <div className="app__burger__container">
        <MenuIcon className="app__burger" style={{width: '40px', height: '50px'}}/>
      </div>

      <div className="app__searchBar">
        <div className="searchBar__logo__container">
          <SearchSharp className="searchBar__logo"/>
        </div>
        <div className="searchBar__container">
          <input type="text" className="searchBar" variant="outlined" />
        </div>
      </div>

      <div className="app__logo__container">
        <img src={imdbLogo} className="app__logo" alt="logo" />
      </div>
    </div>
  );
};

export default Header;

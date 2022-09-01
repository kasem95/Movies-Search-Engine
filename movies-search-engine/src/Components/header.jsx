import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import imdbLogo from "../images/imdb.png";
import { SearchSharp } from "@material-ui/icons";
import "../styles/header.css";
import { useState } from "react";
import { searchTitlesByTitle } from "../Api/getRequests";
import { LIMIT } from "../App";

const Header = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    props.setLoading(true);
    searchTitlesByTitle(search, LIMIT, 1)
      .then((res) => {
        if (res.data.results) {
          props.setNext(res.data.next);
          props.setMovies(res.data.results);
        }
      })
      .finally(() => props.setLoading(false));
  };

  return (
    <div className='app__bar'>
      <div className='app__burger__container'>
        <MenuIcon
          className='app__burger'
          style={{ width: "40px", height: "50px" }}
        />
      </div>

      <div className='app__searchBar'>
        <div className='searchBar__logo__container' onClick={handleSearch}>
          <SearchSharp className='searchBar__logo' />
        </div>
        <div className='searchBar__container'>
          <input
            type='text'
            className='searchBar'
            variant='outlined'
            placeholder='search'
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
      </div>

      <div className='app__logo__container'>
        <img src={imdbLogo} className='app__logo' alt='logo' />
      </div>
    </div>
  );
};

export default Header;

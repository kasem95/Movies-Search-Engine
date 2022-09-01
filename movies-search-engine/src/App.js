import React, { useEffect, useState } from "react";
import Header from "./Components/header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import MoviesList from "./Components/MoviesList.jsx";
import { searchTitlesByTitle, getMoviesByUrl } from "./Api/getRequests.jsx";

export const LIMIT = 50;
export const YEAR = new Date().getFullYear().toString();

const App = () => {
  const [movies, set_movies] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [url, setUrl] = useState("/titles");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // searchTitlesByTitle("spider-man", LIMIT, page).then((res) => {
    //   console.log(res);
    //   if (res.data) {
    //     setNext(res.data.next);
    //     set_movies(res.data.results);
    //   }
    // });
    getMoviesByUrl("/titles", LIMIT, page, YEAR).then((res) => {
      console.log(res);
      if (res.data) {
        setNext(res.data.next);
        set_movies(res.data.results);
      }
    });
  }, []);

  return (
    <div className='app'>
      <Header
        next={next}
        setNext={setNext}
        url={url}
        setUrl={setUrl}
        setMovies={set_movies}
        page={page}
        setPage={setPage}
        setLoading={setLoading}
      />
      <MoviesList
        movies={movies}
        next={next}
        setNext={setNext}
        url={url}
        setUrl={setUrl}
        setMovies={set_movies}
        page={page}
        setPage={setPage}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
};

export default App;

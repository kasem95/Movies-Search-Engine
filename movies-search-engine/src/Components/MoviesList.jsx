import React, { useCallback, useEffect, useState } from "react";
import Movie from "./Movie";
import "../styles/MoviesList.css";
import { getNextPage, getMoviesByUrl } from "../Api/getRequests";
import { useRef } from "react";
import { LIMIT, YEAR } from "../App";

const MoviesList = (props) => {
  const render_movies = useCallback(() => {
    return props.movies.map((movie) => {
      return (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      );
    });
  }, [props.movies]);

  const nextPage = (e) => {
    e.preventDefault();
    props.setLoading(true);
    getNextPage(props.next)
      .then((res) => {
        props.setPage((prev) => prev + 1);
        props.setNext(res.data.next);
        props.setMovies(res.data.results);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .finally(() => props.setLoading(false));
  };

  const prevPage = (e) => {
    e.preventDefault();
    props.setLoading(true);
    getMoviesByUrl(props.url, LIMIT, props.page - 1, YEAR)
      .then((res) => {
        props.setPage((prev) => prev - 1);
        props.setNext(res.data.next);
        props.setMovies(res.data.results);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .finally(() => props.setLoading(false));
  };
  if (props.loading)
    return <div className='movies_list__container'>Loading...</div>;
  if (props.movies)
    return (
      <div className='movies_list__container'>
        <ul className='movies_list'>{render_movies()}</ul>
        <div className='movies_list_buttons'>
          {props.next && (
            <button className='movies_list_next' onClick={nextPage}>
              Next
            </button>
          )}
          {props.page > 1 && (
            <button className='movies_list_next' onClick={prevPage}>
              Previous
            </button>
          )}
        </div>
      </div>
    );

  return <div className='movies_list__container'>EMPTY</div>;
};

export default MoviesList;

import React from "react";
import { useEffect } from "react";
import "../styles/Movie.css";
import imdbLogo from "../images/imdb.png";

export default function Movie(props) {
  const renderReleaseDate = () => {
    if (props.releaseDate) {
      const day = props.releaseDate.day
        ? props.releaseDate.day < 10
          ? `0${props.releaseDate.day}`
          : props.releaseDate.day
        : null;
      const month = props.releaseDate.month
        ? props.releaseDate.month < 10
          ? `0${props.releaseDate.month}`
          : props.releaseDate.month
        : null;
      if (day === null && month === null) return `${props.releaseDate.year}`;
      if (day === null) return `${month}/${props.releaseDate.year}`;
      return `${day}/${month}/${props.releaseDate.year}`;
    }
    return "Unknown";
  };
  if (props)
    return (
      <div className='movie__container'>
        <div className='movie__image'>
          <img
            src={props.primaryImage ? props.primaryImage.url : imdbLogo}
            alt='no image'
            height={200}
            width={200}
          />
        </div>
        <div className='movie__title'>{props.titleText.text}</div>
        <div className='movie__releasedate'>{renderReleaseDate()}</div>
      </div>
    );

  return <div></div>;
}

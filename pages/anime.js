import React from "react";
import styles from "../styles/Anime.module.css";
import { useState, useEffect } from "react";

const Anime = () => {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quoteres) => {
        const { anime, character, quote } = quoteres;
        setQuote(quote);
        setAnime(anime);
        setCharacter(character);
      })
      .catch((err) => console.log(err));
  }, [num]);

  return (
    <>
      <div>
        <button className="getAnimeQuoteBtn" onClick={() => setNum(num + 1)}>
          New Quote
        </button>
      </div>
      <div className="containerFeed">
        ANIME QUOTES
        <div className="feed">
          <div className="animeTitle">Anime:</div>
          <div>{anime}</div>

          <div className="animeTitle">Character:</div>
          <div>{character}</div>

          <div className="animeTitle">Quote:</div>
          <div>{quote}</div>
        </div>
      </div>
    </>
  );
};

export default Anime;

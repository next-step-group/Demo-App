import React, { useState, useEffect } from "react";
import MovieTile from "../components/MovieTile";

function Movies() {
  const [items, setItems] = useState([]);
  const [movies, refreshMovies] = useState({ recommendations: [] });
  const [search, setSearch] = useState("");

  // Need to update or add additional useEffect conditons - make sure all tabs are populated with data so user can click in any order
  // right now breaks if user clicks before searching
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/299534/recommendations?api_key=f796405efaf29a5adb2c2c473eff818d&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        const movieRecommendations = { recommendations: [] };
        for (let i = 0; i < 20; i++) {
          const { title, id, poster_path, overview } = res.results[i];
          movieRecommendations.recommendations.push({
            id,
            title,
            overview,
            poster_path: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          });
        }
        //refreshMovies(movieRecommendations);
        const goods = [];
        for (let i = 0; i < movieRecommendations.recommendations.length; i++) {
          goods.push(
            <MovieTile
              className="movieBox"
              key={i}
              props={movieRecommendations.recommendations[i]}
            />
          );
        }

        goods.push(
          <MovieTile
            className="movieBox"
            key={20}
            props={{
              id: 125,
              title: "Mars",
              overview: "none",
              poster_path: `https://mars.nasa.gov/system/content_pages/main_images/418_marsglobe.jpg`,
            }}
          />
        );
        setTimeout(setItems(goods), 50000);
      })
      .catch((err) => console.log("App.componentDidMount: ERROR: ", err));
  }, []);
  // console.log('movies prop', movies)

  async function onRegisterClick() {
    console.log("sending search query");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          id="search"
          placeholder={"search"}
          onChange={(e) => setSearch(e.target.value)}
          className="textbox"
        ></input>
        <button className="buttons" id="searchButton" onClick={onRegisterClick}>
          Search for Recommendations
        </button>
      </div>

      <div id="movieBox" className="tilescontainer">
        {items}
      </div>
    </div>
  );
}

export default Movies;

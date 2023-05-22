import "./Movie.css";
import React, { useState } from "react";
import movieData from "./MoviesData.json";

const Movies = () => {
  const [listQuery, setListQuery] = useState("");
  console.log(listQuery)

  const filteredMovies = movieData.filter((movie) => {
    const { title, cast, genre, director } = movie;
    const query = listQuery.toLowerCase();
    

    return (
      title.toLowerCase().includes(query) ||
      cast.some((actor) => actor.toLowerCase().includes(query)) ||
      director.toLowerCase().includes(query) ||
      genre.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <form>
        <label htmlFor="listQuery">Query Movies:</label>
        <input
          id="listQuery"
          type="text"
          value={listQuery}
          onChange={(event) => setListQuery(event.target.value)}
          placeholder="Search by Title, Director, Genre, or Actor/Actress"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Cast</th>
            <th>Average Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => {
            const ratings = Object.values(movie.ratings).flat();
            ratings[0] *= 10;
            const averageRating = (
              ratings.reduce((sum, num) => sum + num, 0) / ratings.length
            ).toFixed(2);

            return (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.cast.join(", ")}</td>
                <td>{averageRating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;

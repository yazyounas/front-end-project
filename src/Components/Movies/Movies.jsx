
import "./Movie.css"
import React, { useState }  from 'react';
import movieData from "./MoviesData.json";



const Movies = () => {
  const [listQuery, setListQuery] = useState("")

const filteredMovies = movieData.filter((movie) => {
  const { title, cast, genre, director } = movie;
  const query = listQuery.toLowerCase();
  console.log(query)
  
  return (
    title.toLowerCase().includes(query) ||
    cast.some((actor) => actor.toLowerCase().includes(query)) ||
    director.toLowerCase().includes(query) ||
    genre.toLowerCase().includes(query)
   
  )
})

 
  
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
   <th>year</th>
   <th>Genre</th>
   <th>Cast</th>
   <th>Average Rating</th>
   </tr>
   </thead>

   {filteredMovies.map((movie) => (
    
    <tr key={movie.id}>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.year}</td>  
      <td>{movie.genre}</td>
      <td>{movie.cast.join(", ")}</td>
      <td>{movie.averageRating}</td>
      
    </tr>
   ))}
   </table>
    </div>
  )
}

export default Movies

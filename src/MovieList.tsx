import React from 'react';
import MovieCard from './MoviesCard';
 interface MoviesType {
    movies : any
 }
const MovieList = ({movies}: MoviesType) => {
    return (
        <div>
            {movies?.length > 0
              ? (
              <div className="container">
                  {movies.map((movie: any, index: any) =>(
                    <MovieCard key={index} movie={movie} />
                  ))}
              </div>
              ) : (
                <div className="empty">
                     <h2>No movies found</h2>
              </div>
              )}
        </div>
    )
}
export default MovieList;
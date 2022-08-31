import './Movieapp.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './MoviesCard';



 const App = () => {

  interface MovieType {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchTerm, setSearchTerm] = useState <string> ('spiderman'); 
  const API_URL = ' https://www.omdbapi.com/?i=tt3896198&apikey=1019ac51' 
 

   const searchMovies = async (title: string) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
   }
   // eslint-disable-next-line
    useEffect(() => {
      searchMovies(searchTerm);
    });


    return(

      <div className="app">
          <h1>MovieLand</h1>

          <div className="search">
    
            <input
            placeholder="Search for movies"
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
              
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
         
            {movies?.length > 0
              ? (
              <div className="container">
                  {movies.map((movie, index) =>(
                    <MovieCard key={index} movie={movie} />
                  ))}
              </div>
              ) : (
                <div className="empty">
                     <h2>No movies found</h2>
              </div>
              )}
         
      </div>
    
    );
}
export default App;

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
  const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=1019ac51' 
 

   const searchMovies = async (title: string) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.search);
   }
   
    useEffect(() => {
      searchMovies(searchTerm);
    }, []);


    return(

      <div className="app">
          <h1>MovieLand</h1>

          <div className="search">
       {/* when a user changes the input field set searchTerm to the value gotten from the input  */}
            <input
            placeholder="Search for movies"
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
               {/* when this icon is clicked the searchMovies function is triggered to search for movies on the api */}
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
             {/* if the array of movies is empty is 0 we render no  movies found else we render the the list of movies with the  movieCard */}
            {movies?.length > 0
              ? (
              <div className="container">
                  {movies.map((movie) =>(
                    <MovieCard movie={movie} />
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

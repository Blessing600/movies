import './Movieapp.css';
import { useEffect, useRef, useState } from 'react';
import MovieCard from './MoviesCard';
import MovieList from "./MovieList"
import VideoCard from './VideoCard';

 const App = () => {
  const[isUploadLinkClicked, setUpload] = useState(false);
  const [videos, setVideos] = useState<string[]>([])

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

  const uploadInput = useRef<any>(null)
   const searchMovies = async (title: string) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
   }
   // eslint-disable-next-line
    useEffect(() => {
      searchMovies(searchTerm);
    });

    const handleFileInput = (event: any) => {
      if(event.target.files[0]){
        setVideos((prev) => {
          return [...prev, URL.createObjectURL(event.target.files[0])]
        })
      }
    }
    return(

      <div className="app">
          <h1>MovieLand</h1>
          <div className='flex flex-row  flex justify-around my-24'>
              <div className="search  flex  w-5/6  ml-7">
                  <input
                  placeholder="Search for movies"
                  value= {searchTerm}
                  onChange={(e) => {
                    setUpload(false)
                    setSearchTerm(e.target.value)
                  }}
                  />
                  {/* <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                  /> */}
                </div>
                <div onClick={() => {
                  uploadInput.current && uploadInput.current.click()

                  setUpload(true)
                }}  className='flex w-1/6 justify-center bg-gradient-to-r from-red-400 to-red-500 rounded-full '>
                    {/* <button className="text-stone-400 "> Upload </button>   */}
                    <button className=" text-stone-400 items-center">Upload</button> 
                </div>
                <input ref={uploadInput}  className='hidden' type="file" onChange={handleFileInput} />
     
         </div>

           
          {
            isUploadLinkClicked ? (
              <MoviesUpLoad videos={videos}/>
            ) : (
              <MovieList movies = {movies}/>
            )
          }

         
      </div>
    
    );
}
 const MoviesUpLoad = ({videos}: any) =>{
  
  return(
       <div className=' grid grid-cols-3 gap-8 my-24' >
          {videos.map((video: any, index: any) =>(
            <VideoCard key={index} video={video} />
          ))}
       </div>
  );
 }

 
 export default App;

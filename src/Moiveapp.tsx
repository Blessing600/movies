import './Movieapp.css';
import { useEffect, useRef, useState } from 'react';
import MovieList from "./MovieList"
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setVideos } from './reducer/MovieSlice';

 const App = () => {
  const[isUploadLinkClicked, setUpload] = useState(false);

  interface MovieType  {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
  const {movies} = useSelector((state: any) => state.moviesReducer)
  const {videos} = useSelector((state: any) => state.moviesReducer)
  const [searchTerm, setSearchTerm] = useState <string> ('spiderman'); 
  const dispatch = useDispatch();
  const API_URL = ' https://www.omdbapi.com/?i=tt3896198&apikey=1019ac51' 

  const uploadInput = useRef<any>(null)
   const searchMovies = async (title: string) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    dispatch(setMovies(data.Search))
   }
   // eslint-disable-next-line
    useEffect(() => {
      searchMovies(searchTerm);
    });
   
    const handleFileInput = (event: any) => {
      const videoObject = event.target.files[0]
      if(videoObject && videoObject.size <=  4194304 && videos.length < 2){
        const reader = new FileReader();
        reader.readAsDataURL(videoObject);
        reader.onloadend = () => {
          dispatch(setVideos(reader.result))
        }
      }else{
        alert("File limit exceede")
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

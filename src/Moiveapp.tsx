import './Movieapp.css';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllPostPages from './AllPostsPage'
import SinglePostPage from './ImageDetails'
import FormCard from './FormCard';


 const App = () => {
  const {currentPage} = useSelector((state: any) => state.moviesReducer)
    


    return(
      <div className="app">
        {
          currentPage === "Home" && <Button />
        }

        {
          currentPage === "Form" && <FormCard/>
        }
        
         {currentPage === "AllPosts" && (

            <AllPostPages/>
          )}
          {
          currentPage === "SinglePosts" && (
            <SinglePostPage/>
          )
        }


         
      </div>
     
    );
}

 
 export default App;

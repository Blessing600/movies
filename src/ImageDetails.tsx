import { useDispatch, useSelector } from 'react-redux';
import Image1 from './Image1.png';
import { setCurrentPage } from './reducer/MovieSlice';

const ImageDetails = ({details}: {details?:any}) =>{
  const {postIndex} = useSelector((state: any) => state.moviesReducer)
  const {posts} = useSelector((state: any) => state.moviesReducer)
  const dispatch = useDispatch();
     return (
      <div>
        <button onClick={() => dispatch(setCurrentPage('AllPosts'))} > X </button>
        <div className="" >
          <div>
            <h2 className=''>{posts[postIndex].title}</h2>
          </div>

          <div className='flex justify-center'>
            <img className='w-[200px]' src={posts[postIndex].image}/>
          </div>

          <div>
            <h2 >{posts[postIndex].description}</h2>
          </div>
        </div>
      </div>
   

     )
}

export default ImageDetails
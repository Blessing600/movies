import { useDispatch } from "react-redux";
import { setCurrentPage, setPostIndex } from "./reducer/MovieSlice";

;
const Imagecard = ({post, index} : {post: any; index: any}) =>{
  const dispatch = useDispatch()
  const description = post.description.slice(0, 12) + '...'
  const handlePostClicked = () => {
    dispatch(setPostIndex(index))
    dispatch(setCurrentPage('SinglePosts'))
  }
     return (
   
        <div onClick={handlePostClicked} className="mr-4">
        <div className="card w-96 h-120 bg-slate-900 " >
          <div >
            <h1 >{post.title}</h1>
          </div>

          <div>
            <img className="bg-white w-96 h-80 object-contain" alt= "" src={post.image}/>
          </div>

          <div>
            <h1>{description}</h1>
          </div>
        </div>
    </div>
   
    
    );
     
}

export default Imagecard
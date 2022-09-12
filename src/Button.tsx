import { useDispatch } from "react-redux";
import { setCurrentPage } from "./reducer/MovieSlice";


const Button = () => {
    const dispatch = useDispatch()
    return(
   <div className='m-52 flex justify-center'>
      <button className="text-xl animate-pulse font-black font-mono text-gray-50 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 h-16 w-64 shadow-lg shadow-transparent-500/50" onClick={() => dispatch(setCurrentPage('Form'))}>Upload</button> 
   </div>
    );
}
export default Button;
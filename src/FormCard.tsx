import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setPosts } from './reducer/MovieSlice'

const FormCard = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<any>("")
  const dispatch = useDispatch();
    const handleFileInput = (event: any) => {
      const v = event.target.files[0]
        if( v.size <= 1048576){
          const reader = new FileReader();
          reader.readAsDataURL(v);
          reader.onloadend = () => {
            setImage(reader.result)
          }

        }else{
          alert("File limit exceeded")
        }
      }
      const getInputValue = (event:any, name:string)=> {
        const userValue = event.target.value;
        if(name === "title"){
          if(userValue.length < 20){
            setTitle(userValue)
          }
        }else{
          if(userValue.length < 50){
          setDescription(userValue)
          }
        }
    
       }
       const savePost = () => {
        const post = {
          title,
          description,
          image
        }
        dispatch(setPosts(post));
        dispatch(setCurrentPage('AllPosts'))
       }
    return (
        <div className='my-8 w-1/2 h-100 rounded-lg block mx-auto bg-gradient-to-r from-indigo-500 font-sans font-bold flex justify-center'>
          <form>
          <p className='text-center my-8'>Upload Image:</p>
            <input type="file" name="upload" id="fileselect" className='' onChange={handleFileInput} />
            <p className='text-center my-8'>Title</p>
            <input type="text" className='w-80 h-12 outline-none' value={title} onChange={(event) => {getInputValue(event, "title")}}/>
            <p className='text-center my-8'>Description</p>
            <textarea  className='w-80 h-16 outline-none'value={description} onChange={(event) => {getInputValue(event, "description")}}/>
            <button className='border border-black' onClick={savePost}>Submit</button>
          </form>

        </div>
    )
}
export default FormCard
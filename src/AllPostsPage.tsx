import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Imagecard from './Imagecard'
import { setCurrentPage } from './reducer/MovieSlice'

const AllPostsPage = () => {
    const {posts} = useSelector((state: any) => state.moviesReducer)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setCurrentPage('Form'))}>Upload</button>
            <div className='grid grid-cols-3 gap-16 '>
            {
                posts.map((post:any, index:any) => {
                    return (
                        <Imagecard post={post} index={index} key={index}/>
                    )
                })
            }
            </div>

        </div>
    )
}
export default AllPostsPage
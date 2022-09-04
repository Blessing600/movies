// import React from 'react';

const VideoCard = ({ video}:any)=>{
  
    return (
     

      <video width="320" height="240" controls>
        <source  src={video} />
      </video>
    );
 }
 export default VideoCard


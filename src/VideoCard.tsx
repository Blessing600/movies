// import React from 'react';

const VideoCard = ({ video}:any)=>{
  
    return (
     

      <video width="340" height="500" controls>
        <source  src={video} />
      </video>
    );
 }
 export default VideoCard


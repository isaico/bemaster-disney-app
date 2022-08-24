import React from 'react';
import ReactPlayer from 'react-player';


export const VideoPlayer = ({ videoUrl,setActivateVideo }) => {
    return (
        <div>
            <button onClick={()=>setActivateVideo(false)}>Volver</button>
            <ReactPlayer url={videoUrl} controls loop />
        </div>
    );
};

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => { 

    // Called for each video item
    const renderedList = videos.map((video) => {
        return (
            <div>
                <VideoItem video = {video}/>
            </div>
        );
    });

    return (
        <div className = "ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;
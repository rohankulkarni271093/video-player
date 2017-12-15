import React from 'react';
import VideoListitem from './VideoListItem';

const VideoList = function(props){
const videoselect=props.onvideoselect;
  const VideoItem = props.videos.map((video)=>{

    return (
      <VideoListitem
      onvideoselect={videoselect}
      key={video.etag}
      video={video} />
    );     //etag is the column name from table
  });
  return(
    <ul className="col-md-4 list-group">
    {VideoItem}
    </ul>
  );
};

export default VideoList;

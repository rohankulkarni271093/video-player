import React from 'react';

const VideoListitem = ({video,onvideoselect}) => {    //this is similar to const video= props.video

  return (
    <li onClick={()=>onvideoselect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>

      </div>


    </li>
  );

};

export default VideoListitem;

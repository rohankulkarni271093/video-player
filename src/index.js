import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './Components/SearchBar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList.js';
import VideoDetail from './Components/video_detail';

const API_Key='AIzaSyBw_GD-ohFKrPsr9UCJVKnKgkmR1aDjqJk';

//We will write a component here.



class App extends Component{
  constructor(props){
    super(props);
    this.state={videos:[],
      selectedVideo:null
    };
    this.videosearch('surfboards')
}

  videosearch(term){
    YTSearch({ key:API_Key , term:term}, (videos) => {

   this.setState({
     videos:videos,
     selectedVideo:videos[0]
      });
    });
  }

  render(){
  return (
  <div>
<SearchBar onvideosearch={term=>this.videosearch(term)} />
<VideoDetail video={this.state.selectedVideo} />
<VideoList onvideoselect={selectedVideo=>this.method1(selectedVideo)} videos={this.state.videos}/> 
  </div>
);
}
method1(selectedVideo){

  this.setState({selectedVideo});
}


}
//We will take this component from here to DOM
ReactDom.render(<App></App>, document.querySelector('.container')); // <App></App> is the instance of the class or component App

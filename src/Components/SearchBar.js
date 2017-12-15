import React, { Component } from 'react';  // { Component }  is similar to const Component = React.Component

class SearchBar extends Component{

constructor(props){                  //Declaring a state
super(props);

this.state={term:''};

}
render(){
  return (
    <div className="search_bar">
   <input
    value = {this.state.term}
    onChange={event=>this.ontermchange(event.target.value) } />

   </div>
);

}

ontermchange(term){
  this.setState({term});
  this.props.onvideosearch(term);
}

}

export default SearchBar;


/* Important notes
this.setState is used for manipulating or modifying the state value.

*/

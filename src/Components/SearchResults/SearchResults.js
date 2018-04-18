/* Note: I realize that this code doesn't compile properly. This was more an attempt for me to learn
more about Javascript and React by writing this project all the way to the finish and see how far I could push myself*/

import React from 'react';
import ReactDOM from 'react-dom';

//Step 18 - Correct path?
import {TrackList} from '../TrackList';
//import {TrackList} from '../TrackList';
import './SearchResults.css'

export class SearchResults extends React.Component {

render(){
  return(
    <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
  <!-- Add a TrackList component -->
</div>
  )
}

}

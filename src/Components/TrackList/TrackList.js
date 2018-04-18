/* Note: I realize that this code doesn't compile properly. This was more an attempt for me to learn
more about Javascript and React by writing this project all the way to the finish and see how far I could push myself*/

import React from 'react';
import ReactDOM from 'react-dom';

import {Track} from '../Track'
// import {Track} from '../Track'
import './TrackList.css'


export class TrackList extends React.Component {

render(){
  return(
    <div className="TrackList">
    // Step 34
    {this.props.tracks.map( track => {return <Track key={track.id}/>})};
// Step 35 - Need HTML tags to surround these?
    {this.props.track.name};
    {this.props.track.artist};
    {this.props.track.album};

    <!-- You will add a map method that renders a set of Track components  -->
    <Track onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
</div>
  )
}

}

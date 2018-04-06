import React from 'react';
import ReactDOM from 'react-dom';
import {TrackList} from '../Tracklist';
import './Playlist.css'




export class Playlist extends React.Component{
constructor(props){
  super(props);
  this.handleNameChange = this.handleNameChange.bind(this)

}



//STEP 59 - How to do this? Look at input in render method as well
handleNameChange(event){
event.target.value
}

render() {
  return(
    <div className="Playlist">
  //Step 61 - does onChange go here?
  <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
//Step 39
  //<!-- Add a TrackList component -->
  <Tracklist tracks={this.prop.playlistTracks} onRemove={this.props.onRemove}/>
  // Step 21 <TrackList /> // Step 65
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>

  )
}

}

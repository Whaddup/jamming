import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from '../SearchBar';
import {SearchResults} from '../SearchResults';
import {Playlist} from '../Playlist';
import {Tracklist} from '../Tracklist';

//Step 53 - Need to import Track component from Track.js?

import './App.css'
import Spotify from '../../util/Spotify'

export class App extends React.Component {
constructor(props) {
  super(props);

//Step 31, 37, Step 63
this.state = {
//Step 88
searchResults: [],

/*{name: track.id,
artist: track.name,
album: track.album.name},
    {name: track.id,
    artist: track.name,
    album: track.album.name },
    {name: track.id,
    artist: track.name,
    album: track.album.name
  }], */

//Step 95
  playlistName: "New Playlist",

playlistTracks: [{name: ,
  artist: ,
  album:
uri: },
 {name: ,
 artist: ,
album:
uri: },
 {name: ,
 artist: ,
album:
uri: }],

}

//Step 42
this.addTrack = this.addTrack.bind(this);
//Step 50
this.removeTrack = this.removeTrack.bind(this);
//Step 58
this.updatePlaylistName = this.updatePlaylistName.bind(this);
//Step 64
this.savePlaylist = this.savePlaylist.bind(this);
//Step 68
this.search = this.search.bind(this)
}

//Step 41 - How to add a song to the END of a playlist?
addTrack(track){
let tracksPlaying = this.state.playlistTracks; //state.playlistTracks is an array inside an object
if (tracksPlaying.includes(track.id)){
tracksPlaying.push(track.id); // Is this push track.id or track?
this.setState({playlistTracks: tracksPlaying})
}}

//Step 49
removeTrack(track){
  let currentTrackState = this.state.playlistTracks;
  let trackToRemove = currentTrackState.indexOf(track.id);
  currentTrackState.splice(trackToRemove, 1)
 this.setState({playlistTracks: currentTrackState})
}

//Step 57
updatePlaylistName(name){
  this.setState({playlistName: name} )
}

//Step 63 , Step 95
savePlaylist(Spotify.savePlaylist()){
  //trackURIs = [];
let trackURIs = this.state.playlistTracks.uri.map(track => {return track})
}

//Step 67
search(Spotify.search()){
  //searchTerm = "";
  console.log(Spotify.search());
}

render(){
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
  // Step 68
    <!-- Add a SearchBar component -->
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
    <!-- Add a SearchResults component -->
    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()}/>
              <!-- Add a Playlist component -->
              // Step 38
    <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack()}
    onNameChange={this.updatePlaylistName()} onSave={this.savePlaylist}/>
    </div>
  </div>
</div>
    )
  }
}


/*
 STEP 41
addTrack(track) {
    let tracks = this.state.playlistTracks; // the first step is to capture the current Array of data into a new tracks array
    if(!this.state.playlistTracks.includes(track.id)) {
      tracks.push(track); // push is the method, to insert the new data into the tracks array
      this.setState({
        playlistTracks: tracks // this part basically REPLACING the OLD state with a new array - tracks
      });
    }
  }
  */


  /*
  import {SearchBar} from '../SearchBar';
  import {SearchResults} from '../SearchResults';
  import {Playlist} from '../Playlist';
  */

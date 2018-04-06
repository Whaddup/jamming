//import React from 'react';
//import ReactDOM from 'react-dom';



//Step 77
let accessToken;
//Step 82
const clientID = "781b35b90c704c1aab1a14fabd53fd41"
const redirectURI = "https://jammingonline.surge.sh";
//const redirectURI = "http://localhost:3000/";



//Step 76
let Spotify = {

getAccessToken(){
//Step 78
  if (typeof accessToken != "undefined"){
    return accessToken}
    else if {let url = window.location.href;
      let tokenExpiryInfo = []
      let expirationTime = 0;
    tokenExpiryInfo.push(url.match(/access_token=([^&]*)/));
    tokenExpiryInfo.push(url.match(/expires_in=([^&]*)/));
  accessToken = tokenExpiryInfo[0][1];
  expirationTime = tokenExpiryInfo[1][1];
    // Step 80 - Set the access token to expire at the value for expiration time
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
}
  else {window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
  }
}


//Step 85
search(searchTerm){
return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`
  ,
{headers: {Authorization: `Bearer ${accessToken}`}}).then(response => {response => {return response.json();
}}).then(jsonResponse => {if (jsonResponse){return jsonResponse.playlistTracks.map(tracksInfo => {[{
  id: track.id,
  name: track.name,
  artist: track.artists[0].name,
  album: track.album.name,
  url: track.uri
}]})
}}
else { return []}
)
}

//Step 90
savePlaylist(playlistName, [uri1, uri2, uri3]){
  if (!playlistName && ![uri1, uri2, uri3]){return}
//Step 91
  let defaultAccessToken = accessToken;
  let headers = {Authorization: `Bearer ${accessToken}`};
  let userID;
  let playlistID;

fetch(`https://api.spotify.com/v1/me` , {headers: headers}).then(response => {return response.json();}).then(jsonResponse => {userID = jsonResponse;
return userID;})

//Step 93
fetch(`/v1/users/${userID}/playlists`, {
  method: 'POST',
  headers: headers
  body: JSON.stringify(playlistName)
}).then(response => playlistID = response.id)

//Step 94
fetch(`/v1/users/${userID}/playlists/${playlistID}/tracks`, {
method: ,
headers: headers,
body: JSON.stringify([uri1, uri2, uri3])
}).then(response => playlistID = response.id)

}


//Step 93



}


//Step 76
export default Spotify;

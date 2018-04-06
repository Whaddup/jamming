import React from 'react';
import ReactDOM from 'react-dom';


export class SearchBar extends React.Component {
//Step 68
constructor(props){
  super(props);
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}

//Step 69
search(userSearchTerm){
  this.props.onSearch(userSearchTerm)
}

//Step 71 --> Need a state in SearchBar constructor to correspond with the setState here?
handleTermChange(event){
  this.setState({searchbarTerm: event.target.value})
}


render(){
// Need to import anything? Step 15
return(
  <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
  <a>SEARCH</a>
</div>
)

  }


}

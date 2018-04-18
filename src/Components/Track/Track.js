/* Note: I realize that this code doesn't compile properly. This was more an attempt for me to learn
more about Javascript and React by writing this project all the way to the finish and see how far I could push myself*/

import React from 'react';
import ReactDOM from 'react-dom'


export class Track extends React.Component {
constructor(props){
super(props);
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
}

addTrack(){
  this.props.onAdd(this.props.track)
}

//Step 53
removeTrack(){
this.props.onRemove(this.props.track)
}



// class Track's render function
render(){
  //Step 27 --> Or should this be outside the Render method?
renderAction(){
    if (this.props.isRemoval){
      return "-"}
    else {return "+"}
  }

  return(
    <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
    <!-- + or - will go below -->
  <a className="Track-action" onClick={this.addTrack} onClick={this.removeTrack}>{renderAction()}</a>
</div>
)
}

}

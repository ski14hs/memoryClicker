import React from "react";
import CardBody from "./CardBody";
import choices from "../friends.json"

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    keyList: [],
    highScore: 0
  };
  // choices = {};
  shuffle = arra1 => {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // handleDecrement decreases this.state.count by 1
  addKey = key => {
    // We always use the setState method to update a component's state
    // alert("passed in" + key);
    if(this.state.keyList.includes(key)){
      //reset score
      // alert("lose");
      this.zeroScore();
    } else{
      // alert("point");
      this.handleIncrement();
      this.setState({ keyList: this.state.keyList.concat([key]) });
    }
    this.render();

  };

  // Zero out set this.state.count to 0
  zeroScore = () => {
    // We always use the setState method to update a component's state
    if(this.state.count > this.state.highScore){
      // var newScore = this.count;
      // alert(newScore);
      this.setState({ count: 0, keyList: [], highScore: this.state.count})
    } else {
      // no new high score
      this.setState({ count: 0, keyList: [], highScore: this.state.highScore });
    }
    
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center container">
        <div className="card-header bg-primary text-white">
        <h3>Click each character once!</h3>
          Score: {this.state.count} High Score: {this.state.highScore}
        </div>
        <div className="row">
          {this.shuffle(choices).map( choice => (
            <CardBody
            clear={this.zeroScore}
            addKey={this.addKey}
            id={choice.id}
            key={choice.id}
            image={choice.image}
          />
          ))};
        </div>
      </div>
    );
  }
}

export default Counter;

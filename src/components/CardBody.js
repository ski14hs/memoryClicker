import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    <div className="container col">
      
      <div className = "container card-body" style={{width: 250}} onClick={() => props.addKey(props.id)} id={props.id}>
        <img className = "click-item container" alt="key: {props.key}" src={props.image}></img>
      </div>
      
    </div>
  );
}

export default CardBody;

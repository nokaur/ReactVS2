import React from "react";

const Hello = () => {
  //With JFX
  // return (
  //   <div>
  //     <h3>This is with JSX</h3>
  //   </div>
  // )
  //Without JFX
  return React.createElement(
    "div", 
    {id:Hello},
  React.createElement('h3',null, "This is without JFX"));
};

export default Hello;

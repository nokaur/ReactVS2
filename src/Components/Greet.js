import React from "react";

// function Greet() {
//   return <h1>Hello World!</h1>;
// }

const Greet = (props) => {
  console.log(props);
  return <h1>Hello {props.name}!</h1>;
};

//default export
export default Greet;

//Named export

//export const Greet=()=><h1>Hello World!</h1>

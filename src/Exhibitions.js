import React from "react";

function Exhibitions(props) {
  let firstWord = props.title.replace(/ .*/, "");
  let imageName = require("./assets/" + firstWord + ".jpg");
  let nameArray = props.title.split(" ");
  let artistName = nameArray[0] + " " + nameArray[1];
  console.log(firstWord);
  return (
    <div className="content">
      <p>{artistName}</p>
    </div>
  );
}

export default Exhibitions;

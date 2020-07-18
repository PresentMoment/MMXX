import React from "react";

function Exhibitions(props) {
  let firstWord = props.title.replace(/ .*/, "");
  let imageName = require("./assets/" + firstWord + ".jpg");
  let nameArray = props.title.split(" ");
  let artistName = nameArray[0] + " " + nameArray[1];
  return (
    <div className="content">
      <p>{artistName}</p>
      <div className="exhibitImg">
        <img src={imageName} alt="" />
      </div>
    </div>
  );
}

export default Exhibitions;

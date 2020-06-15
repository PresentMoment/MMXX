import React from "react";

function Exhibitions(props) {
  let firstWord = props.title.replace(/ .*/, "");
  let imageName = require("./assets/" + firstWord + ".png");
  console.log(firstWord);
  return (
    <div className="content">
      <p>{props.title}</p>
      <div className="exhibitImg">
        <img src={imageName} alt="" />
      </div>
    </div>
  );
}

export default Exhibitions;

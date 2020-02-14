import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Exhibitions(props) {
  return (
    <div className="content">
      <p>{props.title}</p>
      <br />
      <p>Info text</p>
      <br />
      <p>PDF</p>
      <br />
      <Dropdown>
        <Dropdown.Toggle className="press">Press</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Press 1
          </Dropdown.Item>
          <Dropdown.Item
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Press 2
          </Dropdown.Item>
          <Dropdown.Item
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Press 3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <p>IMAGES</p>
    </div>
  );
}

export default Exhibitions;

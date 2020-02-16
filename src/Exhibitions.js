import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

import emma from "./assets/emma.jpg";

function Exhibitions(props) {
  const [isOpen, setOpen] = useState(false);

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
      <img
        src={emma}
        className="imgSmall"
        alt="Skin like Jesus"
        onClick={() => {
          setOpen(true);
        }}
      />
      {isOpen && (
        <Lightbox
          mainSrc={emma}
          mainSrcThumbnail={emma}
          imageCaption="Skin like Jesus"
          enableZoom={false}
          imagePadding={50}
          onCloseRequest={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Exhibitions;

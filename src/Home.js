import React from "react";
import { Link } from "react-router-dom";

import Luigi from "./assets/Luigi.jpg";

function Home() {
  return (
    <div className="content">
      <Link to="/zuccheri">
        <p>Luigi Zuccheri 25.06 - 30.09.2020</p>
        <div className="exhibitImg">
          <img src={Luigi} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Home;

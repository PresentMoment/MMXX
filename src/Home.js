import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="content">
      <Link to="/zuccheri">
        <p>Luigi Zuccheri 25.06 - 30.09.2020</p>
      </Link>
    </div>
  );
}

export default Home;

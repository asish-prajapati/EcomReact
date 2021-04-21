import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb ptb_20">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active">{title}</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;

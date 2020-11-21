import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../App";
import "./NavBar.style.css"

export default function Navbar() {
  const { categorySource, setSelectedCategory } = useContext(NewsContext);

  return (
    <div className="container">
      {categorySource.map((item, i) => (
        <Link
          className="navBar"
          key={i}
          onClick={() => {
            setSelectedCategory(item.category);
          }}
          to="/"
        >
          {item.category}
        </Link>
      ))}
    </div>
  );
}

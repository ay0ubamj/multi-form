import React from "react";
import { Link } from "react-router-dom";

export const Stepper = () => {
  return (
    <div className="Stepper">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/summary">Summary</Link>
    </div>
  );
};

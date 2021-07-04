import React from "react";
import { Button } from "react-bootstrap";
import BhupenderPareek from "./images/BhupenderPareek.png";
import NavB from "./NavB";
import { Link } from "react-router-dom";

function JumbotronMain() {
  return (
    <>
      <NavB />
      <div className="jm">
        <div className="row">
          <div className="col-md-6 atext">
            <h6>Hello,</h6>
            <h2>
              I'm <span style={{ color: "#000000ff" }}>Bhupender</span> Pareek
            </h2>
            <p>
              I'm a react.js developer and this react app is designed by me to
              showcase my personal and professional information along with my
              resume which can be downloaded below.
            </p>
            <Button
              as={Link}
              to="/BhupenderPareek.pdf"
              target="_blank"
              download
              className="ButtonR"
            >
              Download Resume!
            </Button>
            <Link to="/Myinfo">
              <Button className="ButtonR">My Info!</Button>
            </Link>
          </div>
          <div className="col-md-6 phone">
            <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JumbotronMain;

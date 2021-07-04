import React from "react";
import NavB from "./NavB";
import Personal from "./images/Personal.svg";
import Prof from "./images/Prof.svg";
import { Link } from "react-router-dom";

function MyInfo() {
  return (
    <>
      <NavB />
      <div className="jm">
        <div className="row mpg">
          <Link to="/personal" className="col-md-6 mi">
            <figure>
              <img src={Personal} alt="Personal" className="icn" />
            </figure>
            <h5
              style={{
                fontFamily: "Otomanopee One",
                color: "#66666eff",
                textShadow: "10px 10px 5px #9999a1ff ",
              }}
            >
              Personal information
            </h5>
          </Link>
          <Link to="/professional" className="col-md-6 mi">
            <figure>
              <img src={Prof} alt="Professional" className="icn" />
            </figure>
            <h5
              style={{
                fontFamily: "Otomanopee One",
                color: "#66666eff",
                textShadow: "10px 10px 5px #9999a1ff ",
              }}
            >
              professional information
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MyInfo;

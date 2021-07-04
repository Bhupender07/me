import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavB from "./NavB";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <NavB />
      <div className="jm">
        <div className="container-fluid" style={{ marginTop: "9%" }}>
          <div className="row">
            <Link
              to={{ pathname: "https://facebook.com/bhupenderp07" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faFacebookSquare} className="fa-5x" />
                <h5>@BhupenderP07</h5>
              </div>
            </Link>
            <Link
              to={{ pathname: "https://twitter.com/bhupenderp07/" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faTwitterSquare} className="fa-5x" />
                <h5>@BhupenderP07</h5>
              </div>
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/bhupenderp07/" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faLinkedin} className="fa-5x" />
                <h5>@BhupenderP07</h5>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link
              to={{ pathname: "https://instagram.com/bhupenderp07/" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faInstagramSquare} className="fa-5x" />
                <h5>@BhupenderP07</h5>
              </div>
            </Link>
            <Link
              to={{ pathname: "https://github.com/bhupender07/" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faGithubSquare} className="fa-5x" />
                <h5>&nbsp;@Bhupender07&nbsp;</h5>
              </div>
            </Link>
            <Link
              to={{ pathname: "https://t.me/bhupenderp07/" }}
              target="_blank"
              className="socialbox col-md-3"
            >
              <div>
                <FontAwesomeIcon icon={faTelegram} className="fa-5x" />
                <h5>@BhupenderP07</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Social;

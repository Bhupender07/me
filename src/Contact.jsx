import React from "react";
import NavB from "./NavB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Contact = () => {
  const [mail, setMail] = React.useState(false);
  const [phone, setPhone] = React.useState(false);
  const Mailshow = () => {
    setMail(!mail);
  };
  const Phoneshow = () => {
    setPhone(!phone);
  };
  if (phone == true && mail == true) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="container-fluid" style={{ marginTop: "9%" }}>
            <div className="row">
              <h3
                style={{
                  textAlign: "center !important",
                  fontFamily: "Source Code Pro",
                  textShadow: " 0px 0px 2px #000000ff",
                  margin: "auto",
                }}
                className="contactphn"
              >
                Want to Know more about me?
              </h3>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3 socialbox">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="fa-8x"
                  />
                  <h5>bhupendarpareek@gmail.com</h5>
                </div>
              </div>
              <div className="col-md-3 socialbox">
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt} className="fa-8x" />

                  <h5>9654330401</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (mail == true) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="container-fluid" style={{ marginTop: "9%" }}>
            <div className="row">
              <h3
                style={{
                  textAlign: "center !important",
                  fontFamily: "Source Code Pro",
                  textShadow: " 0px 0px 2px #000000ff",
                  margin: "auto",
                }}
                className="contactphn"
              >
                Want to Know more about me?
              </h3>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 socialbox">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="fa-8x"
                  />
                  <h5>bhupendarpareek@gmail.com</h5>
                </div>
              </div>
              <div className="col-md-3 socialbox">
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt} className="fa-8x" />
                </div>
                <Button className="phonepc" onClick={Phoneshow}>
                  Call me!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (phone == true) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="container-fluid" style={{ marginTop: "9%" }}>
            <div className="row">
              <h3
                style={{
                  textAlign: "center !important",
                  fontFamily: "Source Code Pro",
                  textShadow: " 0px 0px 2px #000000ff",
                  margin: "auto",
                }}
                className="contactphn"
              >
                Want to Know more about me?
              </h3>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3 socialbox">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText}
                    className="fa-8x"
                  />
                  <Button className="mailpc" onClick={Mailshow}>
                    Write me!
                  </Button>
                </div>
              </div>
              <div className="col-md-3 socialbox">
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt} className="fa-8x" />

                  <h5>9654330401</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavB />
      <div className="jm">
        <div className="container-fluid" style={{ marginTop: "9%" }}>
          <div className="row">
            <h3
              style={{
                textAlign: "center !important",
                fontFamily: "Source Code Pro",
                textShadow: " 0px 0px 2px #000000ff",
                margin: "auto",
              }}
              className="contactphn"
            >
              Want to Know more about me?
            </h3>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 socialbox">
              <div>
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-8x" />
              </div>
              <a className="mailphone" href="mailto:bhupendarpareek@gmail.com">
                Write me!
              </a>
              <Button className="mailpc" onClick={Mailshow}>
                Write me!
              </Button>
            </div>
            <div className="col-md-3 socialbox">
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} className="fa-8x" />
              </div>
              <Button className="phonepc" onClick={Phoneshow}>
                Call me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

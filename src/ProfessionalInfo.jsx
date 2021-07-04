import React from "react";
import NavB from "./NavB";
import { Table } from "react-bootstrap";
import BhupenderPareek from "./images/BhupenderPareek.png";

const ProfessionalInfo = () => {
  const [count, setCount] = React.useState(0);
  let timeNow = new Date().getHours();
  React.useEffect(() => {
    setTimeout(function () {
      setCount(count + 1);
    }, 1000);
  });
  if (count < 1 && timeNow < 12) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Morning!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 2 && timeNow < 12) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Morning!</h5>
              <h5 className="intro">I'm Bhupender</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 4 && timeNow < 12) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Morning!</h5>
              <h5 className="intro">I'm Bhupender,</h5>
              <h5 className="intro">Here's some professional info about me!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 1 && timeNow > 12 && timeNow < 17) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Afternoon!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 2 && timeNow > 12 && timeNow < 17) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Aftrenoon!</h5>
              <h5 className="intro">I'm Bhupender</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 4 && timeNow > 12 && timeNow < 17) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Afternoon!</h5>
              <h5 className="intro">I'm Bhupender,</h5>
              <h5 className="intro">Here's some professional info about me!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 1 && timeNow > 12) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Evening!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 2 && timeNow > 17) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Evening!</h5>
              <h5 className="intro">I'm Bhupender</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 4 && timeNow > 17) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Good Evening!</h5>
              <h5 className="intro">I'm Bhupender,</h5>
              <h5 className="intro">Here's some professional info about me!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
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
        <div className="row mpg mpg2">
          <div className="col-md-6 mpg">
            <h4
              style={{
                textAlign: "center !important",
                fontFamily: "Source Code Pro",
                textShadow: " 0px 0px 2px #000000ff",
              }}
              className="phone2"
            >
              Professional Information
            </h4>
            <Table responsive borderless>
              <tbody>
                <tr>
                  <td className="intro">Full Name :</td>
                  <td className="intro2">Bhupender Pareek</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Qualification :</td>
                  <td className="intro2">B.Tech (CSE) </td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Graduation Year :</td>
                  <td className="intro2">2018</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Percentage :</td>
                  <td className="intro2">66.96%</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">College:</td>
                  <td className="intro2">IIMT college of Engineering</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Major Project :</td>
                  <td className="intro2">
                    Interactive Data Structure Learning WebApp
                  </td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Skills :</td>
                  <td className="intro2">
                    C, HTML5, CSS3, JavaScript(ES6), React.Js, SFDC
                  </td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Employment Status :</td>
                  <td className="intro2">Looking for opportunity</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Joining :</td>
                  <td className="intro2">Immidiate</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Experience :</td>
                  <td className="intro2">
                    3 years (Creating and Managing own e-commerce stores)
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-md-6 phone2">
            <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfessionalInfo;

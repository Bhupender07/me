import React from "react";
import NavB from "./NavB";
import { Table } from "react-bootstrap";
import BhupenderPareek from "./images/BhupenderPareek.png";

const PersonalInfo = () => {
  const [count, setCount] = React.useState(0);
  let Age = new Date().getFullYear() - 1996;
  React.useEffect(() => {
    setTimeout(function () {
      setCount(count + 1);
    }, 1000);
  });
  if (count < 1) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Hey!</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 2) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Hey!</h5>
              <h5 className="intro">I'm Bhupender</h5>
            </div>
            <div className="col-md-6 phone3">
              <img src={BhupenderPareek} alt="Bhupender" className="bimg" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (count < 3) {
    return (
      <>
        <NavB />
        <div className="jm">
          <div className="row mpg">
            <div className="col-md-6 mpg">
              <h5 className="intro">Hey!</h5>
              <h5 className="intro">I'm Bhupender,</h5>
              <h5 className="intro">Here's some personal info about me!</h5>
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
              Personal Information
            </h4>
            <Table responsive borderless>
              <tbody>
                <tr>
                  <td className="intro">Full Name :</td>
                  <td className="intro2">Bhupender Pareek</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Age :</td>
                  <td className="intro2">{Age} Years</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Gender :</td>
                  <td className="intro2">Male</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Highest Qualification :</td>
                  <td className="intro2">B.Tech (CSE)</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Email :</td>
                  <td className="intro2">bhupendarpareek@gmail.com</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Maritial Status :</td>
                  <td className="intro2">Married</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Place of Residence :</td>
                  <td className="intro2">Delhi</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Home Town :</td>
                  <td className="intro2">Sujangarh (Rajasthan)</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Mother Tongue :</td>
                  <td className="intro2">Marwari</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Other Languages Known :</td>
                  <td className="intro2">Hindi & English</td>
                </tr>
                <tr style={{ padding: "0.2em!important" }}>
                  <td className="intro">Hobbies :</td>
                  <td className="intro2">Coocking and Watching Anime</td>
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
export default PersonalInfo;

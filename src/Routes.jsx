import React from "react";
import { Route } from "react-router-dom";
import MyInfo from "./MyInfo.jsx";
function Routes() {
  return (
    <Route path="/MyInfo">
      <MyInfo />
    </Route>
  );
}
export default Routes;

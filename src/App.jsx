import "./App.css";
import { Switch, Route } from "react-router-dom";
import JumbotronMain from "./JumbotronMain";
import MyInfo from "./MyInfo";
import Contact from "./Contact";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Social from "./Social";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/MyInfo" component={MyInfo} />
        <Route path="/social" component={Social} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/personal" exact={true} component={PersonalInfo} />
        <Route path="/professional" exact={true} component={ProfessionalInfo} />
        <Route path="/" exact={true} component={JumbotronMain} />
      </Switch>
    </div>
  );
}

export default App;

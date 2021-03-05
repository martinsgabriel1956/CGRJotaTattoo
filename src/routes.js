import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contacts from "./pages/Contacts.js";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

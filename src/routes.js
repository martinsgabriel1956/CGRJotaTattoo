import { BrowserRouter, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Route } from "./components/Route";

import { routes } from "./utils";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};

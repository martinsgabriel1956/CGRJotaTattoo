import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contacts from "../pages/Contacts.js";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },

  {
    path: "/about",
    component: About,
    exact: false,
  },
  {
    path: "/contacts",
    component: Contacts,
    exact: false,
  },
];

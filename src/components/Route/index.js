import { Route as ReactRoute } from "react-router-dom";

export const Route = ({ to, component }) => {
  return <ReactRoute to={to} component={component} />;
};

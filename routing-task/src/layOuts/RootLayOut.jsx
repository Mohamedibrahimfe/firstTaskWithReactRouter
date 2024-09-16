import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
const RootLayOut = (props) => {
  return (
    <div className="container p-3 bg-light rounded mb-5  shadow">
      <NavBar dishs={props.dishs} />
      <Outlet />
    </div>
  );
};

export default RootLayOut;

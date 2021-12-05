import LeftNavBar from "./Components/LeftNavBar";

import GetRequest from "./GetRequest";
import { Route, Router, Switch } from "react-router";
import Home from "./Home";

const AdminPage = () => {
   
  return (
    <>
      <Route exact path="/adminpage/Home" component={Home}/>
      <Route exact path="/adminpage/request" component={GetRequest}/>
      <LeftNavBar />
    </>
  );
};
export default AdminPage;

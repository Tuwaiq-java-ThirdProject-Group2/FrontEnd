import { useEffect, useState } from "react";
import axios from "axios";
import LeftNavBar from "./Components/LeftNavBar";
import DisplayRequest from "./Components/DisplayRequest";

const GetRequest = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/doctor/Request").then((r) => {
      console.log(r.data);
      setRequest(r.data)
    });
  }, []);

  return (
    <>
      <LeftNavBar />
      <div className="admin-content">
        <h3>Requests</h3>
        {/* طلبات الدكاترة */}
        {request.map((e)=>{
          return <DisplayRequest data={e}/>
        })}
      </div>
    </>
  );
};
export default GetRequest;

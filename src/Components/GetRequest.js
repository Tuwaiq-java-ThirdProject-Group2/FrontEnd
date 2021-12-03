import { useEffect, useState } from "react";
import axios from "axios";
import LeftNavBar from "./LeftNavBar";

const GetRequest=()=>{

const[request,setRequest] =useState();

useEffect(() => {
    axios.get("").then((r) => {
     
        
    });
  }, []);


  return(<>
      <LeftNavBar />
      <div className="admin-content">
            <h3>Requests</h3>
            {/* طلبات الدكاترة */}
          <GetRequest/>
      </div>

  </>)

}
export default GetRequest;
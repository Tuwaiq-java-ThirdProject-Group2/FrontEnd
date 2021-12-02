import { useEffect, useState } from "react";
import axios from "axios";

const GetRequest=()=>{

const[request,setRequest] =useState();

useEffect(() => {
    axios.get("").then((r) => {
     
        
    });
  }, []);


  return(<></>)

}
export default GetRequest;
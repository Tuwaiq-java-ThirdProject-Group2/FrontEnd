import { useEffect, useState } from "react";
import axios from "axios";

const GetHospital=()=>{

const[Hospital,setHospital] =useState();

useEffect(() => {
    axios.get("").then((r) => {
     
    });
  }, []);


  return(<></>)

}
export default GetHospital;
import { useEffect, useState } from "react";
import axios from "axios";

const GetHospital=()=>{

const[Hospital,setHospital] =useState();

useEffect(() => {
    axios.get("http://localhost:8080/hospital/numbersOfHospitals").then((r) => {
     setHospital(r.data)
    });
  }, []);


  return(<><p>{Hospital}</p></>)

}
export default GetHospital;
import { useEffect, useState } from "react";
import axios from "axios";

const GetUser=()=>{

const[user,setUser] =useState();

useEffect(() => {
    axios.get("").then((r) => {
      setUser(r.data);
      console.log(r.data);
    });
  }, []);


  return(<></>)

}
export default GetUser;
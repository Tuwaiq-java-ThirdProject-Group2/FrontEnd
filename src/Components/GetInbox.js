import { useEffect, useState } from "react";
import axios from "axios";

const GetInbox=()=>{

const[inbox,setInbox] =useState();

useEffect(() => {
    axios.get("").then((r) => {
    
    });
  }, []);


  return(<></>)

}
export default GetInbox;
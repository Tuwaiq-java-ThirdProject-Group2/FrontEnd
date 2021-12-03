import { useEffect, useState } from "react";
import axios from "axios";

const GetUser=()=>{

const[user,setUser] = useState(0);


useEffect(() => {
    axios.get("http://localhost:8080/user/numbersofuser").then((r) => {
      setUser(r.data);
      console.log(r.data);
      //console.log(user);
    });
  }, []);


  return(<><p> {user}</p> </>)

}
export default GetUser;
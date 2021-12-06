import axios from 'axios';
import React from 'react'
import { useHistory } from "react-router-dom";
import { useState ,useEffect} from 'react';



export default function Login() {
   const[login,setLogin]=useState({})



useEffect(() => {
    axios.get("http://localhost:8080/user").then((r) => {
      setLogin(r.data);
      console.log(r.data);
     
    });
  }, []);
   
   const history = useHistory();

    function add() {

        let name = document.querySelector("#fname").value;
        let password = document.querySelector("#Cname").value;
    
let x={name:name,password:password};

        

        
         
{login.map((e)=>
{
    if((e.passwords)==(password)){
        console.log("match");
            setLogin({name,password})
           history.push("/mainpage")
           const jsonObj = JSON.stringify(e.userId);
           localStorage.setItem("userId", jsonObj);
           console.log(login);


    }else {
        console.log("not match");

    }

})
}

}     
            
            
                


    return (
        <div>
        
       
           <label for="name"  > name:</label><br />
            <input type="text" id="fname" name="name"  /><br />
            <label for="Cname">password:</label><br />
            <input type="text" id="Cname" name="lname" /><br />
            <button onClick={add}> login</button>


            
        </div>
    )
}

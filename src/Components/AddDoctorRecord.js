import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import SearchBySpecialtiesData from "./SearchBySpecialtiesData";

export default function AddDoctorRecord() {
    const [addDoctor, setAddDoctor] = useState([]);
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:8080/specialties").then((r) => {
            //   مثال
            console.log(r);
            console.log(r.data);

            setSpecialties(r.data);
            //console.log(r.data)
        });
    }, []);


    useEffect(() => {
        axios.get("http://localhost:8080/specialties").then((r) => {
            //   مثال
            console.log(r);
            console.log(r.data);

            setSpecialties(r.data);
            //console.log(r.data)
        });
    }, []);






    function add() {

        let name = document.querySelector("#fname").value;
        let certificate_name = document.querySelector("#Cname").value;
        let certificate_date = document.querySelector("#datemax").value;
        let special = document.getElementById("specialty").value;
let doctorId = 45;
        let x = {
            doctorId, name,certificate_name,certificate_date
        }
        console.log(x);
        fetch("http://localhost:8080/doctor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(x)
        }).then(() => {
            console.log("New Doctor Added")
            
        })

    }


    return (
        <div>




            <label for="name"  > name:</label><br />
            <input type="text" id="fname" name="name" /><br />
            <label for="Cname">Certifcate name:</label><br />
            <input type="text" id="Cname" name="lname" /><br />
            <label for="datemax">Certifcate date:</label><br />
            <input type="text" id="datemax" max="1979-12-31" /><br></br>
            <select id="specialty">
                {specialties.map((e) => {
                    return <SearchBySpecialtiesData data={e} />;

                })}
            </select>  <input type="submit" value="Submit" onClick={add} />



        </div>
    )
}

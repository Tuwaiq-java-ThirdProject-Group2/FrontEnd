import { useEffect, useState } from "react";
import axios from "axios";import { useParams } from "react-router";

const DoctorProfile = () => {
    const [comment, setComment] = useState([]);

const [doctor, setDoctor] = useState([]);
const [hospital, setHospital] = useState({});
const [specialties, setspecialties] = useState({});

const { doctorId } = useParams();
console.log(doctorId);
let url = "http://localhost:8080/evaluation/AllComment/"+doctorId;
useEffect(() => {
    axios.get(url).then((r) => {
        setComment(r);
      console.log(r);
     
    }).catch((err)=> {
        console.log(err)
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8080/doctor/"+doctorId).then((r) => {
      setDoctor(r.data);
      setHospital(r.data.sectionId.hospital);
      setspecialties(r.data.specialties)
      console.log(doctor);
      console.log(r.data);
    });
  }, []);
  return (
    <>
      <h1>Hello {doctorId}</h1>
      <h1>Doctor name {doctor.name}</h1>
      <h1>certificate date:  {doctor.certificate_date}</h1>
      <h1>Hospilat name:  {hospital.name}</h1>
      <h1>specialties:  {specialties.specialtyName}</h1>
      <h1>Rate:  {doctor.total_rate}</h1>



      {/* <h1>Doctor name {doctor.sectionId.hospital.name}</h1> */}

      {/* <h1>Doctor name {comment.name}</h1> */}



    </>
  );
};
export default DoctorProfile;

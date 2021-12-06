import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import DisplayAllComment from "./DisplayAllComment";

const DoctorProfile = () => {
  const [comment, setComment] = useState([]);

  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState({});
  const [specialties, setspecialties] = useState({});

  const { doctorId } = useParams();
  console.log(doctorId);
  let url = "http://localhost:8080/evaluation/AllComment/" + doctorId;
  useEffect(() => {
    axios
      .get(url)
      .then((r) => {
        setComment(r.data);
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/doctor/" + doctorId).then((r) => {
      setDoctor(r.data);
      setHospital(r.data.sectionId.hospital);
      setspecialties(r.data.specialties);
      console.log(doctor);
      console.log(r.data);
    });
  }, []);

  function add() {
    //   let evaluationId = 1;
    let comment = document.querySelector("#comment").value;
    let rate = document.querySelector("#rate").value;
    let Aproved = true;
    let userId = 24;
    let x = {
      evaluation: { comment, rate, Aproved },
      doctorId,
      userId,
    };
    console.log(x);
    // console.log(JSON.stringify(x, doctorId, UserId));
    fetch("http://localhost:8080/evaluation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(x, doctorId, UserId),
      body: JSON.stringify(x),
    }).then((e) => {
      console.log("New comment Added", e);
    });
  }
  return (
    <>
      <div className="doctorProfile-container">
        <div className="doctorProfile-informion">
          <h1>Hello: {doctorId}</h1>
          <h1>Doctor name: {doctor.name}</h1>
          <h1>certificate date: {doctor.certificate_date}</h1>
          <h1>Hospilat name: {hospital.name}</h1>
          <h1>specialties: {specialties.specialtyName}</h1>
          <h1>Rate: {doctor.total_rate}</h1>
        </div>

        {comment.map((e) => {
          return <DisplayAllComment data={e} />;
        })}

        {/* <h1>Doctor name {doctor.sectionId.hospital.name}</h1> */}

        {/* <h1>Doctor name {comment.name}</h1> */}

        <div className="comment-form">
          <label for="comment">comment:</label>
          <br />
          <input type="text" id="comment" name="comment" />
          <br />
          <label for="rate">Choose rate:</label>
          <select name="rate" id="rate">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input type="submit" value="Submit" onClick={add} />
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>

    </>
  );
};
export default DoctorProfile;

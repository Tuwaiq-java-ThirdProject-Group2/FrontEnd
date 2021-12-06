import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


export default function AddEvaluationRecord() {
  const [addEvaluation, setAddEvaluation] = useState([]);
  
  
  
 

  function add() {
    let comment = document.querySelector("#comment").value;
    let rate = document.querySelector("#rate").value;
   let evaluationId=2; 
    let x = {
        evaluation: { evaluationId, comment,  rate },
        // doctorId,
        // UserId,
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
    <div>
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
       
  );
}

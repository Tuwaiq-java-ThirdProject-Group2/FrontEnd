import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

function Comment(data) {
  function remove(e){
    axios.delete("http://localhost:8080/evaluation/");
    console.log(e);
  } 
  console.log(data);
  return (
    <div className="comment-container">
      <div className="comment">{data.data.comment}</div>
      <button className="btn-delete" onClick={remove(data.data.evaluationId)}>
        Delete
      </button>
    </div>
  );
}

export default Comment;

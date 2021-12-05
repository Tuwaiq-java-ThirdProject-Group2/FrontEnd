import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

function Comment(data) {
  function remove(e) {
    axios
      .delete("http://localhost:8080/evaluation/" + data.data.evaluationId)
      .then((res) => {
        console.log(1);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(e);
  }
  console.log(data);
  return (
    <div className="comment-container">
      <div className="comment">{data.data.comment}</div>
      <button id ="det" className="btn-delete" onClick={remove}>
        Delete
      </button>
    </div>
  );
}

export default Comment;

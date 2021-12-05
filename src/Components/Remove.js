import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
const Remove = (e) => {
  function remove(e) {
    axios.delete("http://localhost:8080/evaluation/");
    console.log(e);
    console.log(e);
  }
  return (
    <button className="btn-delete" onClick={remove(e)}>
      Delete
    </button>
  );
};
export default Remove;

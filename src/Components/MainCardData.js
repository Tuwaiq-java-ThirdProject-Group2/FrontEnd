import { useEffect, useState } from "react";
import axios from "axios";

const MainCardData = (data) => {
 console.log(data.data.name);
  return (
    <>
      <div className="doctor-maincard-container">
        <div className="doctor-name">
          <h5>{data.data.name}</h5>
        </div>
        <div className="hospital-name">
          <h5>hospital name</h5>
        </div>
        <div className="comment">
          <h5>comment nsnvs vnsjnv nvsnvjs kjvnsjvsjn</h5>
        </div>
        <div>
          <button>More</button>
        </div>
      </div>
    </>
  );
};
export default MainCardData;

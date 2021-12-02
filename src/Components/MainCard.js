import { useEffect, useState } from "react";
import axios from "axios";
import MainCardData from "./MainCardData";

const Card = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/doctor").then((r) => {
      setDoctor(r.data);
      console.log(r.data);
    });
  }, []);
  return (
    <>
      {doctor.map((e) => {
        return <MainCardData data={e} />;
      })}
    </>
  );
};
export default Card;

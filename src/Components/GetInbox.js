import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";

const GetInbox = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/evaluation")
      .then((r) => {
        setComment(r.data);
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="inbox-container">
        {comment.map((e) => {
          return <Comment data={e} />;
        })}
      </div>
    </>
  );
};
export default GetInbox;

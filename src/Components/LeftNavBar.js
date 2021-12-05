import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const LeftNavBar = () => {
  const history = useHistory();

  return (
    <>
      <div class="leftnav-container">
        <div class="leftnav">
          <a href="http://localhost:3000/adminpage/Home">Home</a>
          <a href="http://localhost:3000/adminpage/inbox">Inbox </a>
          {/* <a href="/MainSearch/doctorprofile/1">Resquests </a> */}

          <a href="http://localhost:3000/adminpage/request">Request</a>
        </div>
      </div>
    </>
  );
};
export default LeftNavBar;

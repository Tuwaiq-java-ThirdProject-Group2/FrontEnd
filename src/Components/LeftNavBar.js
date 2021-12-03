import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const LeftNavBar = () => {
  const history = useHistory();

  return (
    <>
      <div class="leftnav-container">
        <div class="leftnav">
          <a
            onClick={() => {
              history.replace("");
            }}
            class="active"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => {
              history.replace("MainSearch");
            }}
            href="#news"
          >
    Inbox    </a>

<Link to="/requests">RequestsNew</Link>
    <a
            onClick={() => {
              history.replace("requests");
            }}
           
          >
    Resquests    </a>
 
    

          <a href="#contact">Request</a>
        </div>
      </div>
    </>
  );
};
export default LeftNavBar;

import LeftNavBar from "./Components/LeftNavBar";
import GetDoctor from "./Components/GetDoctor";
import GetUser from "./Components/GetUser";
import GetHospital from "./Components/GetHospital";
import GetRequest from "./Components/GetRequest";
import GetInbox from "./Components/GetInbox";
import { Route, Router, Switch } from "react-router";

const AdminPage = () => {
   
  return (
    <>
      <LeftNavBar />

      <div className="admin-content">
        <div className="row">
          <div>
            {/* احصاءات اليوزر */}
            <h3>All Users</h3>
            <GetUser />
          </div>
          <div>
            <h3>Doctors</h3>
            {/* احصاءات الدكاترة */}
            <GetDoctor />
          </div>
          <div>
            <h3>Hospitals</h3>
            {/* احصاءات المستشفيات */}
            <GetHospital />
          </div>
        </div>
        <div className="inbox-container" >
            <h1>Comments</h1>
                {/* حذف التعليقات */}
                <GetInbox/>                  
            </div>
      </div>
    </>
  );
};
export default AdminPage;

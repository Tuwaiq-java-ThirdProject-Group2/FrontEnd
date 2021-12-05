import React from "react";
import GetDoctor from "./Components/GetDoctor";
import GetHospital from "./Components/GetHospital";
import GetUser from "./Components/GetUser";
import GetInbox from "./Components/GetInbox";

const Home=()=> {
  return (
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
      <div className="inbox-container">
        <h1>Comments</h1>
        {/* حذف التعليقات */}
        <GetInbox />
      </div>
    </div>
  );
}
export default Home;

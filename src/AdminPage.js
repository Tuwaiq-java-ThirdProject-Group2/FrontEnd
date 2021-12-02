import LeftNavBar from "./Components/LeftNavBar";
import GetDoctor from "./Components/GetDoctor";
import GetUser from "./Components/GetUser";
import GetHospital from "./Components/GetHospital";
import GetRequest from "./Components/GetRequest";
import GetInbox from "./Components/GetInbox";

const AdminPage = ()=>{
    return(<>
    <LeftNavBar/>

    {/* احصاءات الدكاترة */}
    <GetDoctor/>
    {/* احصاءات اليوزر */}
    <GetUser/>
    {/* احصاءات المستشفيات */}
    <GetHospital/>

    {/* طلبات الدكاترة */}
    <GetRequest/>
    {/* حذف التعليقات */}
    <GetInbox/>
    </>)
}
export default AdminPage;
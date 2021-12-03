import { useHistory } from "react-router";
const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <div class="topnav">
        <a onClick={()=>{history.replace("MainPage")}} class="active" >
          Home
        </a>
        <a onClick={()=>{history.replace("MainSearch")}} >Search By Name</a>
        <a onClick={()=>{history.replace("MainSearch/SearchBySpecialties")}}>Search By Specialties</a>
        <a >Search By Location</a>
      </div>
    </>
  );
};
export default Navbar;

import { useHistory } from "react-router";
const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <div class="topnav">
        <a href="http://localhost:3000/MainPage" class="active" >
          Home
        </a>
        <a href="http://localhost:3000/MainSearch/SearchByName" >Search By Name</a>
        <a href="http://localhost:3000/MainSearch/SearchBySpecialties">Search By Specialties</a>
        <a href="http://localhost:3000/MainSearch/addNewDoctor">Add new Doctor Record</a>
      </div>
    </>
  );
};
export default Navbar;

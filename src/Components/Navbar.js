import { useHistory } from "react-router";
const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <div class="topnav">
        <a onClick={()=>{history.replace("MainPage")}} class="active" href="#home">
          Home
        </a>
        <a onClick={()=>{history.replace("MainSearch")}} href="#news">Search By Name</a>
        <a href="#contact">Search By Specialties</a>
        <a href="#about">Search By Location</a>
      </div>
    </>
  );
};
export default Navbar;

import docimg from "../images/docimg.png";
import or from "../images/or.png"
import SearchHero from "./SearchHero";
const Hero = () => {
  return (
    <>
      <div className={"hero-container"}>
        <div className="left-container">
          <div>
            <h1 className=" white">Welcome To Explore <br/>Doctors</h1>
          </div>
          <div className="login-container">
            <button>login</button>
            
            <img className="or" src={or}/>
            <p className="createAccountStyle  bottom">Create account</p>
          </div>
          <div>
            <SearchHero/>
          </div>
        </div>
        <div>
          <img className={"doc-img"} src={docimg} />
        </div>
      </div>
    </>
  );
};
export default Hero;

import axios from "axios";

const DisplayRequest=(data)=>{
    console.log(data.data);

    function remove(e) {
        axios
          .delete("http://localhost:8080/doctor/" + data.data.doctorId)
          .then((res) => {
            console.log(1);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(e);
      }
      function accept(e) {
          let url = "http://localhost:8080/doctor/" + data.data.doctorId+"/true";
          console.log(url);
        axios
          .put(url)
          .then((res) => {
            console.log(1);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(e);
      }
return(<>

<div>
    <h1>name: {data.data.name}</h1>
    <h1>certificate_name: {data.data.certificate_name}</h1>
    <h1>hospital name: {data.data.sectionId.hospital.name}</h1>
    <h1>name: {data.data.name}</h1>
    <h1>name: {data.data.name}</h1>
    <button id ="det" className="btn-delete" onClick={remove}>
        Delete
      </button>
      <button id ="det" className="btn-accept" onClick={accept}>
        Delete
      </button>
</div>
</>)
}
export default DisplayRequest;
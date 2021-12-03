import { useEffect, useState } from "react";
import axios from "axios";

const GetInbox=()=>{

const[inbox,setInbox] =useState(["comment0","comment1"]);

const [accepted,setAccepted] = useState(["Comment1"])

useEffect(() => {
    axios.get("url").then((r) => {
    setInbox([...inbox,r.data.comment])

    });
  }, []);

  const onDel = (x)=>{
    let newInbox = inbox.filter((y)=>y != x)
    setInbox([...newInbox])
  }
  const onAccept = (x)=>{
    setAccepted([...accepted,x])
    onDel(x)
  }

  return(<>
  <h2>Inbox</h2>
  {inbox.map((item)=>(<div className="inbox-item">
    <p>{item}</p>
    <div>
      <button onClick={()=>onAccept(item)}>Accept</button>
      <button onClick={()=>onDel(item)}>Delete</button>
    </div>
  </div>))}
  <hr/>
  <h2>Accepted</h2>
    {accepted.map((com)=>(
      <p>{com}</p>
    ))}
  </>)

}
export default GetInbox;
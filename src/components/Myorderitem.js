import React, { useContext } from 'react'
import NoteContext from "../context/NoteContext";
export default function Myorderitem(props) {
  const context = useContext(NoteContext);
  const { delete_order } = context;
  const handleclick = async(e)=>{
    e.preventDefault();
    console.log(props.id)
    delete_order(props.id);
    
  }
  return (
        <div className="col-md-3 ">
       <div className="card my-2" style={{width: "18rem"}}>
  <img src={props.images || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoeAzRtCJuOXlGfk5kpN1vdJ-1h7GFI-T9w&usqp=CAU"} className="card-img-top" alt="..."/>
  <div id="food" className="card-body ">
                <h5 className="card-title">Food :{props.name}</h5>
                <h6 className="card-text">Desc :{props.desc}</h6>
                <h6 className="card-text">price :{props.price}</h6>
                <button className="remove btn btn-danger" onClick={handleclick} > Remove</button>
  </div>
</div>
</div>
  )
}

import React from "react";

export default function Useritem(props) {
  const handleClick2 = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem("cust_id");
    console.log(id);
    console.log(props);
    const response = await fetch(`http://localhost:8081/api/users/user/${id}`, {
      method: "POST",
    });
    const json = await response.json();
    console.log(json);

    let qty = document.getElementById(props.id).value;
    console.log(qty);
    console.log(props.id);
    const respond = await fetch(
      `http://localhost:8081/api/user/menu/orders/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_id: props.id,
          quantity: qty,
        }),
      }
    );

    const json1 = await respond.json();
    console.log(json1);
  };
  //

  return (
    <>
    <div className="col-md-3 ">
      <div className="card my-2" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoeAzRtCJuOXlGfk5kpN1vdJ-1h7GFI-T9w&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div id="food" className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.desc}</p>
          <div>
            <label for="qty">Quantity :</label>
            <input id={props.id} type="number" defaultValue={0}/>
          </div>
          <a href="/" className="btn btn-success my-3" onClick={handleClick2}>Add to cart</a>
        </div>
      </div>
    </div>
    
    </>
  );
}

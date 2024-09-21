import React, { useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";
import Navbar from "./Navbar";

export default function Menu() {
  const context = useContext(NoteContext);
  const { fetchUsers, users, myOrders } = context;
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick2 = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem("cust_id");
   
    const response = await fetch(`http://localhost:8081/api/users/user/${id}`, {
      method: "POST",
    });
    const json = await response.json();
    console.log(json);

    for (let i = 0; i < 7; i++) {
      let qty = await document.getElementById(users[i].food_id).value;
      if (qty>0) {
        const respond = await fetch(
          "http://localhost:8081/api/user/menu/orders",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              food_id: users[i].food_id,
              quantity: qty
              
            }),
          }
        );


        const json1 = await respond.json();
        // console.log(json1);
        
      }
    }
    myOrders(); 
  };

  return (
    <>
      <Navbar />
      <div className="row">
      {users.map((user) => {
        return (
          <div className="col-md-3 ">
            <div className="card my-2" style={{ width: "18rem" }}>
              <img
                src={ user.images ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoeAzRtCJuOXlGfk5kpN1vdJ-1h7GFI-T9w&usqp=CAU"} width="20%"
                className="card-img-top"
                alt="..."
              />
              <div id="food" className="card-body ">
                <h5 className="card-title">Food :{user.food_name}</h5>
                <h6 className="card-text">Desc :{user.food_description}</h6>
                <h6 className="card-text">price :{user.food_price}</h6>
                <div>
                  <label for="qty">Quantity :</label>
                  <input id={user.food_id} type="number" defaultValue={0} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <a href="/" className="btn btn-success my-3" onClick={handleClick2}>
        Add to cart
      </a>
    </>
  );
}

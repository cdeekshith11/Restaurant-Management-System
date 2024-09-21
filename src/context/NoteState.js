import React, { useState,useEffect } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props) {
  const [users, setusers] = useState([]);
  const [orders, setorders] = useState([]);
  const [bills,setbills] = useState([])

  const fetchUsers = async () => {
    const response = await fetch(
      "http://localhost:8081/api/user/menu/showmenu",
      {
        method: "GET",
      }
    );

    const json = await response.json();
    // console.log(json);
    setusers(json);
  };
  const myOrders = async () => {
   // console.log("hyy3");
    const id = localStorage.getItem("cust_id");
    console.log(id);
    const response1 = await fetch(
      `http://localhost:8081/api/users/yourorders/${id}`,
      {
        method: "GET",
      }
    );

    const json1 = await response1.json();
     setorders(json1);
    console.log(orders)
  };
  const delete_order = async (id) => {
    const response = await fetch(
      `http://localhost:8081/api/users/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
    myOrders();
  };

  const bill = async()=>{
    const response2 = await fetch(
      `http://localhost:8081/api/users/bill`,
      {
        method : "GET"
      }
    );
    const {data1,data} = await response2.json()
     console.log(data1, data)
     for(let i=0;i<data1.length ;i++){
      data[i].quantity = data1[i].quantity
     }
     console.log(data)
    //  let a = new Array(json2)
    setbills(data)
  //  console.log(typeof(a))
  //  let b = new Array()
  //  console.log(a.length)
  //   for(let i=0;i<a.length ;i++){
  //     for(let j=0 ; j<bills[i].data.length ;j++){
  //       bills[i].data[j].quantity = bills[i].data1[j].quantity
  //       console.log( bills[i].data[j].quantity)
    //   }

    // }

  }
  useEffect(() => {
    console.log("Updated bills:", bills);
  }, [bills]);

  return (
    <NoteContext.Provider
      value={{ fetchUsers, users, myOrders, orders, delete_order,bill,bills }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

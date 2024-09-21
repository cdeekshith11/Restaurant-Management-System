import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [newUser, setnewUser] = useState({
    cust_name: "",
    cust_password: "",
    cpassword: "",
    cust_email: "",
    cust_address: "",
  });
  //const[id,setId]=useState(30);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleclick = async () => {
    if (newUser.cpassword === newUser.cust_password) {
      const response = await fetch(
        "http://localhost:8081/api/users/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cust_name: newUser.cust_name,
            cust_email: newUser.cust_email,
            cust_password: newUser.cust_password,
            cust_address: newUser.cust_address,
          }),
        }
      );

      const json = await response.json();
      console.log(json);
      navigate("/");
    } else {
      alert("verify correctly");
    }
  };
  return (
    <div>
      <form className="signup">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="cust_name"
            value={newUser.cust_name}
            onChange={handleChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="cust_email"
            value={newUser.cust_email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          name="cust_password"
          value={newUser.cust_password}
          className="form-control"
          onChange={handleChange}
          aria-describedby="passwordHelpBlock"
        />
        <label htmlFor="inputPassword5" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="cinputPassword8"
          name="cpassword"
          value={newUser.cpassword}
          className="form-control"
          onChange={handleChange}
          aria-describedby="passwordHelpBlock"
        />
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          name="cust_address"
          value={newUser.cust_address}
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={handleclick}
        >
          submit
        </button>
      </form>
    </div>
  );
}

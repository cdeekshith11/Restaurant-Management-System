import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user,setuser] = useState({cust_email : "",cust_password : ""})
    const navigate = useNavigate()
    const handleChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    const handleclick=async()=>{
      console.log(user)
      if(user.cust_email!=="" && user.cust_password!==""){
    
      const response = await fetch(
          "http://localhost:8081/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              cust_email: user.cust_email,
              cust_password: user.cust_password
            }),
          }
        );
        const json = await response.json()
        console.log(json)
        if(json.error){
              alert(json.error)
        }
        else{
          localStorage.setItem('cust_id',json[0].cust_id )
          localStorage.setItem('cust_name',json[0].cust_name)
          const d = localStorage.getItem('cust_name')
          
          console.log(d)
        
          navigate('/home')
          
           
        }
       }
      else{
          alert("Please enter the given fields")
      }


  }
  
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name="cust_email" value={user.cust_email} onChange={handleChange} placeholder="name@example.com"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="inputPassword5" name="cust_password" value={user.cust_password}  className="form-control" onChange={handleChange} aria-describedby="passwordHelpBlock"/>
          </div>
          <button type="button" className="btn btn-primary my-3" onClick={handleclick}>Login</button>
        </form>
        <div class="mt-3">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

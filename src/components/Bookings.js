import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Bookings() {
  const [ reserve , setreserve] = useState([
    {reserve :"Reserve",desc : " This farmhouse-style dining table exudes rustic charm with its distressed wood finish and sturdy construction. Its rectangular shape comfortably accommodates large gatherings, making it perfect for family dinners or festive celebrations."},
     {reserve : "Reserve", desc : "Sleek and sophisticated, this modern glass dining table adds a touch of elegance to any dining space. Its minimalist design features a tempered glass tabletop supported by sleek metal or acrylic legs, creating a chic and airy aesthetic."},
      {reserve : "Reserve" , desc : " Inspired by industrial design, this dining table combines rugged materials with sleek lines for a distinctive look. Its solid wood tabletop is complemented by metal accents and exposed hardware, adding character to any dining room."},
    {reserve : "Reserve" , desc : "Designed for versatility, this extendable dining table is perfect for small spaces or multifunctional rooms. Its innovative design allows the tabletop to expand, providing additional seating when needed, while maintaining a compact footprint for everyday use."},
    {reserve : "Reserve" ,desc : "Make a statement with this ornate pedestal dining table featuring intricate carvings and decorative details. Its round or oval tabletop sits atop a sculptural pedestal base, creating a focal point that elevates the dining experience."},
    {reserve : "Reserve" , desc : "Bring the comfort of indoor dining outdoors with this teak dining table designed for al fresco entertaining. Crafted from weather-resistant teak wood, this table features a slatted tabletop and built-in umbrella hole, making it ideal for patio or garden gatherings."}])
  const [alert , setalert] = useState(null)
  const navigate = useNavigate()
  const handleclick = (e)=>{
    const d = localStorage.getItem('cust_name')
    if(reserve[e.target.name].reserve === "Reserved"){
      setalert(`Table number ${e.target.name} is already reserved by Cutomer ${d}`)
      return setTimeout(() => {
       setalert(null)
      }, 5000); 
    }
    e.preventDefault()
    console.log(e.target.name)
   const updatereserve = [...reserve]
   updatereserve[e.target.name].reserve = "Reserved"
   setreserve(updatereserve)
  }
  const handleclick2 =(e)=>{
    e.preventDefault()
    navigate("/menu")

  }
  return (
    <>
    <Navbar/>
    {alert && (
        <div className="alert alert-info" role="alert">
          {alert}
        </div>
      )}
    <div className='row'>
      {reserve.map((book,index)=>{
          return <div className="card col-md-4 mx-2 my-4" key = {index} style={{width: '35rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoeAzRtCJuOXlGfk5kpN1vdJ-1h7GFI-T9w&usqp=CAU" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Table no.{index+1}</h5>
    <p className="card-text my-2">Description:{book.desc} </p>
    <button href="/" className={`btn btn-${book.reserve==="Reserved"?"success" : "primary"}`} onClick={handleclick} name= {index}style={{width : "50%"}} value = {book.reserve} >{book.reserve}</button>
    {book.reserve === "Reserved" && <button className='mx-4 my-2 btn btn-success' onClick={handleclick2}>order</button>}
  </div>
</div>
})}
    </div>
    </>
  )
}

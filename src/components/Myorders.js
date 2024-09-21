import React, { useContext} from 'react'
import Navbar from './Navbar'
import NoteContext from '../context/NoteContext'
import Myorderitem from './Myorderitem'
import { useNavigate } from 'react-router-dom'

export default function Myorders() {
  const context = useContext(NoteContext)
  const { orders,bill,bills} = context
  const navigate = useNavigate()
    // const context = useContext(NoteContext)
    // const { myOrders,orders}  = context
    // useEffect(()=>{
    //     myOrders();
    // },[])
    const handleClick=(e)=>{
      e.preventDefault()
      bill()
      console.log(bills)
      navigate('/bill')


    }
  return (
    <>
    <Navbar/>
    <div className='row'>
    {orders.map((users)=>{
       return <Myorderitem name={users.food_name} id={users.food_id} key={users.id}desc={users.food_description} images={users.images} price={users.food_price}/>

      })}
    </div>
    <div>
      <button className={`order btn btn-success ${(orders.length === 0)?"disabled":""}`} onClick={handleClick}> Order</button>
    </div>
    </>
  )
}

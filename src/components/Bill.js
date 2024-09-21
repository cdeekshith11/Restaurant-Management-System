import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
export default function Bill() {
    const context = useContext(NoteContext)
  const { orders,bills} = context
  const calculateTotalAmount = () => {
    return bills.reduce((acc, bill) => acc + (bill.quantity * bill.food_price), 0);
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
    <div className="bill-container my-4">
      <h2>Restaurant Bill</h2>
      <form id="bill">
        <div className="bill-item header">
          <span>Item Name</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        {bills.map((bill, index) => (
          <div className="bill-item" key={index}>
            <span>{bill.food_name}</span>
            <span>{bill.quantity}</span>
            <span>₹{bill.food_price.toFixed(2)}</span>
            <span>₹{(bill.quantity * bill.food_price).toFixed(2)}</span>
          </div>
        ))}
        <div className="total">
          <span>Total Amount: ₹{calculateTotalAmount().toFixed(2)}</span>
          <p> Thank You!!Visit again</p>
        </div>
      </form>
      <button className="print-button" onClick={handlePrint}>Print Bill</button>
    </div>
    </>
  )
}

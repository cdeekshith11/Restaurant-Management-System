import React from "react";
//import Initaial from './components/Initaial'
//import NoteContext from './context/NoteContext'
import NoteState from "./context/NoteState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Bookings from "./components/Bookings";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Myorders from "./components/Myorders";
import Bill from "./components/Bill";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <div className="container">
            {/* <Signup/> */}
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/navbar/booking" element={<Bookings />} />
              <Route exact path="/yourorders" element={<Myorders />} />
              <Route exact path="/bill" element={<Bill />} />
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

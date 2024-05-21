import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Rent from "./components/Rent";
import AboutUs from "./components/AboutUs";
import Lk from "./components/Lk";
import Rules from "./components/Rules";
import Contacts from "./components/Contacts";
import Counter from "./components/Counter";
import Charts from './components/Charts';
import Feedback from './components/Feedback';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          <Route path="/" element={<Navigate to="/rent" />} />
          <Route exact path="/rent" element={<Rent/>} />
          <Route exact path="/aboutus" element={<AboutUs/>} />
          <Route exact path="/lk" element={<Lk/>} />
          <Route exact path="/rules" element={<Rules/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
          <Route exact path="/counter" element={<Counter/>} />
          <Route exact path="/charts" element={<Charts/>} />
          <Route exact path="/feedback" element={<Feedback/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

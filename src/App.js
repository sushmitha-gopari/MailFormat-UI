// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import EmailUI from "./components/email/Email";
import Home from "./components/Home";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/email" element={<EmailUI />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

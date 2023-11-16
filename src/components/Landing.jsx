import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Home } from "./Home";
import { Assingment35 } from "./Assingment35";
import { Asgn35todolist } from "./Asgn35todolist";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Assingment35 />} />
        <Route path="/asgn" element={<Asgn35todolist />} />
      </Routes>
    </BrowserRouter>
  );
};

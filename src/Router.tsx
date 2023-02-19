import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Redux from "./pages/reudx/Redux";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<MainPage /> />
        <Route path="/redux" element=<Redux /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

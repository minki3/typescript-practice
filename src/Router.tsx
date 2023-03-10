import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Redux from "./pages/reudx/Redux";
import ReactQuery from "./pages/reactQuery/ReactQuery";
import Page from "./pages/responsiveWeb/Page";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<MainPage /> />
        <Route path="/redux" element=<Redux /> />
        <Route path="/reactquery" element=<ReactQuery /> />
        <Route path="/page" element=<Page /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Redux from "./pages/reudx/Redux";
import RtkQuery from "./pages/rtkQuery/rtkQuery";
import Page from "./pages/responsiveWeb/Page";
import ReactQuery from "./pages/react-query/ReactQuery";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<MainPage /> />
        <Route path="/redux" element=<Redux /> />
        <Route path="/rtkquery" element=<RtkQuery /> />
        <Route path="/page" element=<Page /> />
        <Route path="/reactquery" element=<ReactQuery /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

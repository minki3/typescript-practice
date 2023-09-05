import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Redux from "./pages/reudx/Redux";
import RtkQuery from "./pages/rtkQuery/rtkQuery";
import Page from "./pages/responsiveWeb/Page";
import ReactQuery from "./pages/react-query/ReactQuery";
import Practice from "./pages/react-hook-form/Practice";
import PdfPage from "./pages/pdf/Pdf";
import ReactScrollPage from "./pages/react-scroll/ReactScroll";
import ContextCheck from "./pages/ContextCheck/ContextCheck";
import TestPage from "./pages/TestPaga/TestPage";
import Component from "./pages/Composite/Component";
import CssPractice from "./pages/CssPractice/Css";
import TestPage1 from "./pages/Practice/TestPage1";
import Motion from "./pages/Framer/Motion";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<MainPage /> />
        <Route path="/redux" element=<Redux /> />
        <Route path="/rtkquery" element=<RtkQuery /> />
        <Route path="/page" element=<Page /> />
        <Route path="/reactquery" element=<ReactQuery /> />
        <Route path="/reactform" element=<Practice /> />
        <Route path="/pdf" element=<PdfPage /> />
        <Route path="/scroll" element=<ReactScrollPage /> />
        <Route path="/context" element=<ContextCheck /> />
        <Route path="/test" element=<TestPage /> />
        <Route path="/composite" element=<Component /> />
        <Route path="/css" element=<CssPractice /> />
        <Route path="/testpage" element=<TestPage1 /> />
        <Route path="/motion" element=<Motion /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

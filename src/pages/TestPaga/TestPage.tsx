import { TestContextProvider } from "../../ContextTest";
import Page1 from "./Page1";
import { useTestContextProvider } from "../../ContextTest";
import { useEffect } from "react";
import { ReducerContextProvider } from "../../ReducerContext";
import Page3 from "./Page3";
import TestPage2 from "./TestPage2";

export default function TestPage() {
  return (
    <>
      <TestContextProvider>
        <Page1 />
        <Page3 />
      </TestContextProvider>
      <ReducerContextProvider>
        <TestPage2 />
      </ReducerContextProvider>
    </>
  );
}

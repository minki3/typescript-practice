import { TestContextProvider } from "../../ContextTest";
import Page1 from "./Page1";
import { useTestContextProvider } from "../../ContextTest";
import { useEffect } from "react";
import { ReducerContextProvider } from "../../ReducerContext";
import TestPage2 from "./TestPage2";

export default function TestPage() {
  return (
    <>
      <TestContextProvider>
        <Page1 />
      </TestContextProvider>
      <ReducerContextProvider>
        <TestPage2 />
      </ReducerContextProvider>
    </>
  );
}

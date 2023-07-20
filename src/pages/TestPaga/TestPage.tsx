import { TestContextProvider } from "../../ContextTest";
import Page1 from "./Page1";
import { useTestContextProvider } from "../../ContextTest";
import { useEffect } from "react";

export default function TestPage() {
  return (
    <>
      <TestContextProvider>
        <Page1 />
      </TestContextProvider>
    </>
  );
}

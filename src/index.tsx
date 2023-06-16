import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import ReactPDF from "@react-pdf/renderer";
import FormPage from "./pages/react-hook-form/Form";
import ReactPDFView from "@react-pdf/renderer";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// ReactPDF.render(<FormPage />, `${__dirname}/example.pdf`);
// ReactPDFView.renderToStream(<FormPage />);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

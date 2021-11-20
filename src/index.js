import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CandidateProvider from "./context/CandidateProvider";

ReactDOM.render(
  <React.StrictMode>
    <CandidateProvider>
      <App />
    </CandidateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

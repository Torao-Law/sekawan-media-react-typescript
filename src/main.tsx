import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./i18n";
import RootProvider from "./store/rootProvider.tsx";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootProvider>
      <Router>
        <App />
      </Router>
    </RootProvider>
  </React.StrictMode>
);

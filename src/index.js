import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Toast from "components/LoadingError/Toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
const initialOptions = {
  clientId:
    "AU5kgjXC_8Mm4F3xc3InzNSXPEkrAEKI3wAOCTiHBGRzPHMrvZEZe8QLi8xu0_3R9ijUNB9LiEVh7rAB",
  currency: "USD",
  intent: "capture",
};
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toast />
        </Provider>
      </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PaymentOptions from "./components/PaymentOptions";
import PaymentPix from "./components/PaymentPix";

function App() {
  return (
    <div className="App">
      {/* <PaymentOptions /> */}
      <PaymentPix />
    </div>
  );
}

export default App;

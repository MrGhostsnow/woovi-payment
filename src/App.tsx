import "./App.css";
import PaymentOptions from "./components/PaymentOptions";
import PaymentPix from "./components/PaymentPix";
import PaymentCard from "./components/PaymentCard";

function App() {
  return (
    <div className="App">
      <PaymentOptions />
      <PaymentPix />
      <PaymentCard />
    </div>
  );
}

export default App;

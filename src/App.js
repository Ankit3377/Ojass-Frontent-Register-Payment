import logo from './logo.svg';
import './App.css';
import  PayButton  from './Components/PayButton';
import  PaymentSuccess  from './Components/PaymentSuccess';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <>
              <PayButton />
            </>}
          />
          <Route path="/payment-success" element={
            <>
              <PaymentSuccess />
            </>}
          />
        </Routes>
      </Router>
  );
}

export default App;
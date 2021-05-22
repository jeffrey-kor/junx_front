import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hello from "./pages/Hello";
import Bye from "./pages/Bye";
// import Button from "./components/atom/Button";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path='/' component={ Hello } />
        <Route exact path='/bye' component={ Bye } />
      </div>
      <Footer />
    </Router>
  )
}

export default App;

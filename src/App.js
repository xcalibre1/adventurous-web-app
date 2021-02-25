import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Home from "./Components/pages/Home"
import SignUp from "./Components/pages/SignUp"
import Services from "./Components/pages/Services"
import Products from "./Components/pages/Products"
import Amazon from "./Components/pages/Amazon"
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/Amazon" exact component={Amazon}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;

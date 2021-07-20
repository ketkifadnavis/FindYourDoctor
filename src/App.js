import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from './component/EditUser';
import AddUser from './component/AddUser';
import User from './component/User';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar></Navbar> 
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route exact path="/:id" component={User} />
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;

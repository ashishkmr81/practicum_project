import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Github from "./components/Github";
import Education from "./components/Education";
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/github" component={Github} />
        </Switch>


      </div>

    </Router>

  );
}

export default App;

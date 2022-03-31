import React from 'react';
import { HashRouter as Router, Routes, Link, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Assignment from './Assignment';


function App() {
  return (
    <div className="App">
         <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/assignment">Assignment</Link>
                </li>
              </ul>
            </nav>
          </div>
    <Navbar />
    <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/assignment">
              <Assignment />
            </Route>
          </Routes>
    </div>
  );
}

export default App;

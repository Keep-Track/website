import React from 'react';
import { HashRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Assignment from './Assignment';


function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    <Switch>
        <Route exact path='/' element={<Home />} />
        <Route path='/assignment' element={<Assignment/>} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;

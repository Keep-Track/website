import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Assignment from './Assignment';


function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/assignment' element={<Assignment/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;

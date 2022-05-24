   
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from "./Components/Create_user/Create";

const App = () => (
   <Router>
      <Routes>
                <Route exact path="/" element={<Create/>} />
        </Routes>
    </Router>
);


export default App;
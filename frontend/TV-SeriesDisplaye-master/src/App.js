import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Assuming this is the file containing your store configuration
import Channel from './Pages/Channal/chanal';
import Program from './Pages/Program/program';
import Home from './HomePage';
import Login from './Pages/Login/login';
import CardContainer './Pages/music_page/CardContainer'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/customer" element={<CardContainer />} />

          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />

          <Route path="/Channel" element={<Channel />} />
          <Route path="/Program" element={<Program />} />
        </Routes>
      </Router>
    </Provider>
    // <Login/>
  );
};

export default App;

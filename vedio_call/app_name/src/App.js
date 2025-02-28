import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import Home from './pages/Home';
import Room from './pages/Room';
import JoinRoom from './pages/JoinRoom';

// Components
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
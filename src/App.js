import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import './App.css';

import GlobalStyles from './globalStyles';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import { Resume } from './pages/Resume/Resume';
import Skills from './pages/Skills/Skills';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Resume />} />
            {/* <Route path='/profile' element={<Profile/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile' element={<Profile/>} /> */}
          </Routes>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;

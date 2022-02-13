import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import "./App.css"

import GlobalStyles from './globalStyles';
import Footer from './components/Footer/Footer';
import { Resume } from "./pages/Resume/Resume";

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
            <Route path='/resume' element={<Resume/>} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Navbar from './component/Navbar'
import React, { Component } from 'react'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Footer from './component/Footer'


class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<News pageSize={5} category="general" />} />
        <Route path='/business' element={<News key="business" pageSize={5} country="in" category="business" />} />
        <Route path='/entertainment' element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
        <Route path='/general' element={<News key="general" pageSize={5} country="in" category="general" />} />
        <Route path='/health' element={<News key="health" pageSize={5} country="in" category="health" />} />
        <Route path='/science' element={<News key="science" pageSize={5} country="in" category="science" />} />
        <Route path='/sports' element={<News key="sports" pageSize={5} country="in" category="sports" />} />
        <Route path='/technology' element={<News key="technology" pageSize={5} country="in" category="technology" />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}
}

export default App

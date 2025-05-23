import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import React, { Component } from 'react'
import Body from './component/Body'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    )
  }
}


export default App

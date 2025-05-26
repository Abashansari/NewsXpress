import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import News  from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import Footer from './component/Footer';

class App extends Component {

    apiKey = import.meta.env.VITE_API_KEY

  state = {
    progress:0
  }

  setProgress = (progress) =>{
    this.setState({progress})
  }

  render() {
    return (
      <>
        <Router>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        height={3}
        onLoaderFinished={()=>this.setState({progress:0})} 
      />
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='general' pageSize={9} country='us' category='general' />} />
            <Route path='/business' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='business' pageSize={9} country='us' category='business' />} />
            <Route path='/entertainment' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='entertainment' pageSize={9} country='us' category='entertainment' />} />
            <Route path='/general' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='general' pageSize={9} country='us' category='general' />} />
            <Route path='/health' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='health' pageSize={9} country='us' category='health' />} />
            <Route path='/science' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='science' pageSize={9} country='us' category='science' />} />
            <Route path='/sports' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='sports' pageSize={9} country='us' category='sports' />} />
            <Route path='/technology' element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key='technology' pageSize={9} country='us' category='technology' />} />


          </Routes>
        </Router>
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;

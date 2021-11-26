import { useState } from 'react'
import './App.scss'
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App

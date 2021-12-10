import './App.css';
import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}

        />
        <Switch>
          <Route exact path="/"><News setProgess={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general" /></Route>
          <Route exact path="/business"><News setProgess={setProgress} apiKey={apiKey} key="business" pageSize={9} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgess={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
          <Route exact path="/health"><News setProgess={setProgress} apiKey={apiKey} key="health" pageSize={9} country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgess={setProgress} apiKey={apiKey} key="science" pageSize={9} country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgess={setProgress} apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgess={setProgress} apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App



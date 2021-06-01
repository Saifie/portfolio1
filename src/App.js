import React from 'react'
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Education from "./components/Education"
import Project from "./components/Project"
import Reviews from "./components/Reviews"
export default function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/reviews" component={Reviews}/>

    <Route exact path="/projects" component={Project}/>
    <Route exact path="/" component={Header}/>
    <Route exact path="/education" component={Education}/>
    
    </Switch>

       

    
    </Router>
    
   
      
    </>
  )
}


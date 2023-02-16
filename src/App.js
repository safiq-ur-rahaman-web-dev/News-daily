
import NavBar from './Components/NavBar'
import React from 'react'
import News from './Components/News'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = ()=>  {
  
    return (
      <>
      <Router>
      <NavBar/>
      <Routes>
      
      
      <Route exact path="/" element = {<News key="General" pageSize = "9" country="in" category ="General" />}/>
      <Route exact path="/business" element = {<News key="Business" pageSize = "9" country="in" category ="Business" />}/>
      <Route exact path="/entertainment" element = {<News key="Entertainment" pageSize = "9" country="in" category ="Entertainment" />}/>
      <Route exact path="/health" element = {<News key="Health" pageSize = "9" country="in" category ="Health" />}/>
      <Route exact path="/science" element = {<News key="Science" pageSize = "9" country="in" category ="Science" />}/>
      <Route exact path="/technology" element = {<News key="Technology" pageSize = "9" country="in" category ="Technology" />}/>
      <Route exact path="/sports" element = {<News key="Sports" pageSize = "9" country="in" category ="Sports" />}/>
      </Routes>
      </Router>
      
      </>
    )
  
}
export default App;




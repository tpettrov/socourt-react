import React, { Component } from 'react'
import './App.css'
import contacts from './assets/contactList'
import Sidenav from './components/Sidenav'
import Contact from './components/Contact'
import {Route} from 'react-router-dom'

class App extends Component {
  componentWillMount(){
    console.log(contacts)
  }


  render () {
    return (
      <div className='App'>
      <Sidenav></Sidenav>
        <div className='container'>
        <div>
        <Route path={`/contact/:id`} component={Contact}></Route>
        </div>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import contacts from '../assets/contactList'
import Search from './Search'
import './Sidenav.css'
import ContactListItem from './ContactListItem'

class Sidenav extends Component {
  componentWillMount(){
    console.log(contacts)
  }
  render () {
    return (
      <div className='sidenav'>
        <Search></Search>
        {contacts.map((contact) => <ContactListItem contact ={contact}></ContactListItem> )}
      </div>
    )
  }
}

export default Sidenav
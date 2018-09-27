import React, { Component } from 'react'
import './ContactListItem.css'
import {Link, Route} from 'react-router-dom'


class ContactListItem extends Component {

  componentWillMount(){
    
  }
  render () {
    return (
      <Link className='list-item' to={`/contact/${this.props.contact.id}`}>
        <img className='avatar' src={this.props.contact.avatar}></img>
        <span>{this.props.contact.name}</span>
      </Link>
      
    )
  }
}

export default ContactListItem
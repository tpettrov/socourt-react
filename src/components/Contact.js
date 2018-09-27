import React, { Component } from 'react'
import contacts from '../assets/contactList'
import '../assets/contactList'
import './Contact.css'

class Contact extends Component {

    constructor(props) {
        super(props);
    }

  state = {
    contact: null
  }

  componentWillMount(){
   // console.log(contacts.find((c) => {return c.id == this.props.match.params.id}) + 'DAAAAA');
   this.setState({ contact: contacts.find((c) => {return c.id == this.props.match.params.id}) })
 }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id !== prevProps.match.params.id) {
        this.setState({ contact: contacts.find((c) => {return c.id == this.props.match.params.id}) })
    }
  }

  render () {
    return (
        <div className='contact-screen'>
        <div className='contact-header'>
        <span>Edit</span>
        <div className='icon-question'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="22" class="undefined icon-faq" height="22" width="22"><path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path><path d="M235 339h42v42h-42zM276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"></path></svg>
       </div>
        </div>
        <div className='contact-container'>
        <div className='contact-wrap'>
        <div className='main-row'>
        <div className='main-avatar'><img src={this.state.contact.avatar}></img></div>
        <div className='main-text'><span>{this.state.contact.name}</span></div>
        </div>
        <div className='secondary-row'>Telephone: {this.state.contact.phones[0].home}</div>
        <div className='secondary-row'>Homepage: {this.state.contact.homepage}</div>
        <div className='secondary-row'>Work: {this.state.contact.work}</div>
        <div className='secondary-row'>Notes: {this.state.contact.notes[0]}</div>
        </div>
        </div>
        </div>
    )
  }
}

export default Contact
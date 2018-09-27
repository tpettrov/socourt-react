import React, { Component } from 'react'
import contacts from '../assets/contactList'
import './Search.css'

class Search extends Component {
  componentWillMount(){
    console.log(contacts)
  }
  render () {
    return (
      <div className='search-box'>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" size="22" color="#999999" class="undefined icon"  height="22" width="22"><path d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"></path></svg>
        <input className='search-input' placeholder='Search all inputs'></input>
      </div>
    )
  }
}

export default Search
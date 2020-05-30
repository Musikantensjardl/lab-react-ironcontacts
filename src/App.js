import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contact from './Contact.js'
import _ from 'lodash'

class App extends Component {




  state = {
    contacts: contacts,
  }

  onlyShowFive = () => {
    this.setState({ contacts: this.state.contacts.slice(0, 5) })
  }

  sortHandlerPopularity = () => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'popularity').reverse()
    })
  }

  sortHandlerName = () => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'name')
    })
  }

  deleteHandler = (id) => {
    this.setState({
      contacts: this.state.movies.filter((m) => m.id !== id) // include all movies except the one with `id`
    })
  }


  addRandomContact = () => {
    let contactsCopy = [...this.state.contacts]
    let randomNumber = Math.floor((Math.random() * contacts.length) + 5)
    contactsCopy.push(contacts[randomNumber])
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {


    return (



      <div className="App" >
        <h1>Iron Contacts</h1>
        <button onClick={() => this.onlyShowFive()}>Only Show first 5</button>
        <button onClick={() => this.addRandomContact()}>Add random contact</button>
        <button onClick={this.sortHandlerPopularity}>Sort by popularity</button>
        <button onClick={this.sortHandlerName}>Sort by name</button>


        <table >
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.contacts.map((c) => <Contact name={c.name} pictureUrl={c.pictureUrl} popularity={c.popularity} deleteHandler={this.deleteHandler} contactId={this.id}/>)}

        </table>

      </div>
    )
  };
}

export default App;

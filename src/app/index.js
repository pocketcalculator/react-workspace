import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { ContactsList } from './components/ContactsList'

const contacts = [{
  name: 'Scott',
  phone: '555 333 5555'
},
{
  name: 'Paul',
  phone: '203 333 5555'
},
{
  name: 'Anne',
  phone: '404 333 5555'
}]

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Max"} initialAge={27}/>
          </div>
        </div>
        <div>
          <h1>Contacts List</h1>
          <ContactsList contacts={this.props.contacts}/>
        </div>
      </div>
    )
  }
}

render(<App contacts={contacts}/>, window.document.getElementById("app"))

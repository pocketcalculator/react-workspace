import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
  render() {
    const user = {
      name: "Anna",
      hobbies: ["Sports", "Reading", "Sleeping"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Max"} aget={27} user={user}>
              <p>This is a paragraph</p>
              <p>And this is another.</p>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById("app"))

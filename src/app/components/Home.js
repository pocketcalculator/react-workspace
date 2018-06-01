import React from 'react'

export class Home extends React.Component {
  render() {
    var text = "Something"
    console.log(this.props)
    return (
      <div>
        <p>In a new component!</p>
        <p>{text}</p>
        <p>Your name is {this.props.name}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

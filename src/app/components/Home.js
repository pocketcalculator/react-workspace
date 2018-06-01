import React from 'react'
import PropTypes from 'prop-types'

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
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  childre: PropTypes.element.isRequired
}

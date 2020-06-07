// Code EyesOnMe Component Here
import React, { Component } from 'react'

export class EyesOnMe extends Component {

  render() {
    return (
      <div>
        <button type="button" onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Focus/Blur</button>
      </div>
    )
  }
}

export default EyesOnMe

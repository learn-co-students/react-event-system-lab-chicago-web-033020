// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    handlePasswordInput = () => {console.log("Entering password...")}

    render() {
        return <input type="password" onKeyUp={this.handlePasswordInput}></input>
    }
}

export default Keypad


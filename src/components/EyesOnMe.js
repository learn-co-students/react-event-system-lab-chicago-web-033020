import React from "react";

export default class EyesOnMe extends React.Component {

  dealWithFocus(){
    console.log("Good!")
  }

  dealWithBlur(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return (
      <button 
        onFocus={this.dealWithFocus}
        onBlur={this.dealWithBlur}
      />
    )
  }
}

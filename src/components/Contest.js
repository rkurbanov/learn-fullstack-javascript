import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className="Contest">
        {this.props.id}
      </div>
    )
  }
}

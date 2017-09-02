import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Content extends Component {
  render() {
    return (
      <div className="Contest">
        {this.props.description}
      </div>
    )
  }
}

Content.propTypes = {
  description: PropTypes.string.isRequired
}
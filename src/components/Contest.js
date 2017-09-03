import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Content extends Component {
  render() {
    return (
      <div className="Contest">
        <div className='contest-descriptions' >
          {this.props.description}
        </div>
        <div className='home-link link' onClick={this.props.contestListClick}>
          Contest list
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
}
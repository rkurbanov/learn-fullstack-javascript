import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContestPreview extends Component {
    handleClick = () => {
       this.props.onClick(this.props._id) 
    }

    render() {
        return (
            <div className="link ContestPreview" onClick={this.handleClick}>
                <div className="category-name">
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>
        );
    }
}

ContestPreview.propType = {
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
}
export default ContestPreview;
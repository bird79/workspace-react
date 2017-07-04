import React, { Component, PropTypes } from 'react';

const defaultProps = {
    number: -1
};

const propsTypes = {
    number: PropTypes.number
};

class Value extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <h2>{this.props.number}</h2>
            </div>
        );
    }
}

Value.defaultProps = defaultProps;
Value.propsTypes = propsTypes;

export default Value;
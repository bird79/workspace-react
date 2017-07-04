import React, { Component, PropTypes } from 'react';

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtact'),
    onRandomizeColor: createWarning('onRandomizeColor')
};
function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}
const propsTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

class Control extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <p>
                    <button onClick={this.props.onPlus}>+</button>
                    <button onClick={this.props.onSubtract}>-</button>
                    <button onClick={this.props.onRandomizeColor}>Random</button>
                </p>
            </div>
        );
    }
}

Control.defaultProps = defaultProps;
Control.propsTypes = propsTypes;

export default Control;

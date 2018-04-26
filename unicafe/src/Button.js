import React, { Component } from 'react';
import './index.css';

class Button extends Component {

    render() {
        return (
            <input type='submit'
                onClick={this.props.kasvata}
                value={this.props.nimi} />
        )
    }
}
export default Button;
import React, {Component} from 'react';
import './index.css';

class Statistic extends Component {
    render() {
        if (this.props.nimi === 'positiivisia') {
            return (
                <p>{this.props.nimi}: {this.props.arvo} %</p>
            )
        }
        
        return (
            <p>{this.props.nimi}: {this.props.arvo}</p>
        )
    }
}
export default Statistic;
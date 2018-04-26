import React, {Component} from 'react';
import './index.css';

class Statistic extends Component {
    render() {
        if (this.props.nimi === 'positiivisia') {
            return (
                <tr>
                    <td>{this.props.nimi}</td>
                    <td>{this.props.arvo} %</td>
                </tr>
            )
        }

        return (
            <tr>
                <td>{this.props.nimi}</td>
                <td>{this.props.arvo}</td>
            </tr>
        )
    }
}
export default Statistic;
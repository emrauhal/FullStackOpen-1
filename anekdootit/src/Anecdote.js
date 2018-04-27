import React, {Component} from 'react';
import './index.css';

class Anecdote extends Component {
    render() {
        return (
            <div>
                <p>{this.props.anecdote}</p>
                <p>has {this.props.votes} votes</p>
            </div>
        )
    }
}
export default Anecdote;
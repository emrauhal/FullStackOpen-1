import React, { Component } from 'react';
import './index.css';
import Button from './Button';
import Statistics from './Statistics';

class App extends Component {

    state = {hyva: 0, neutraali: 0, huono: 0}

    vastaaHyva = () => {
        this.setState({hyva: this.state.hyva + 1})
    }

    vastaaNeutraali = () => {
        this.setState({neutraali: this.state.neutraali + 1})
    }

    vastaaHuono = () => {
        this.setState({huono: this.state.huono + 1})
    }

    render() {
        return (
            <div className='App'>
                <h1>Anna palautetta: </h1>
                <Button nimi='hyvä' kasvata={this.vastaaHyva}/>
                <Button nimi='neutraali' kasvata={this.vastaaNeutraali}/>
                <Button nimi='huono' kasvata={this.vastaaHuono}/>
                <Statistics data={this.state} />
            </div>
        )
    }
}
export default App;
import React, { Component } from 'react';
import './index.css';
import Button from './Button';
import Statistics from './Statistics';

class App extends Component {

    state = {hyva: 0, neutraali: 0, huono: 0}

    uusiVastaus = (mielipide, arvo) => {
        return () => {
    
            if (mielipide === 'hyva') {
                this.setState({hyva: arvo});
            } else if (mielipide === 'neutraali') {
                this.setState({neutraali: arvo});
            } else if (mielipide === 'huono') {
                this.setState({huono: arvo});
            }
        }
    }

    render() {
        return (
            <div className='App'>
                <h1>Anna palautetta: </h1>
                <Button nimi='hyvä' 
                    kasvata={this.uusiVastaus('hyva', this.state.hyva + 1)}/>
                <Button nimi='neutraali' 
                    kasvata={this.uusiVastaus('neutraali', this.state.neutraali + 1)}/>
                <Button nimi='huono' 
                    kasvata={this.uusiVastaus('huono', this.state.huono + 1)}/>
                <Statistics data={this.state} />
            </div>
        )
    }
}
export default App;
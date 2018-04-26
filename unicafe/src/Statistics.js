import React, {Component} from 'react';
import Statistic from './Statistic';
import './index.css';

class Statistics extends Component {

    render() {
        const hyva = this.props.data.hyva;
        const neutraali = this.props.data.neutraali;
        const huono = this.props.data.huono;
        const yhteensa = hyva + neutraali + huono;
        const keskiarvo = (hyva - huono) / yhteensa;
        const positiivisia = hyva / yhteensa * 100;

        if (isNaN(keskiarvo) || isNaN(positiivisia)) {
            return (
                <div>
                    <h2>Statistiikka:</h2>
                    <p>ei annettuja palautteita</p>
                </div>    
            )
        }
        
        return (
            <div>
                <h2>Statistiikka:</h2>
                <Statistic nimi='hyvä' arvo={hyva} />
                <Statistic nimi='neutraali' arvo={neutraali} />
                <Statistic nimi='huono' arvo={huono} />
                <p> ------------------------- </p>
                <Statistic nimi='keskiarvo' 
                    arvo={parseFloat(keskiarvo).toFixed(1)} />
                <Statistic nimi='positiivisia' 
                    arvo={parseFloat(positiivisia).toFixed(1)}/>
            </div>
        )
    }
}
export default Statistics;
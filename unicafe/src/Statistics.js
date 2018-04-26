import React, {Component} from 'react';
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
                    <p>hyvä: {hyva}</p>
                    <p>neutraali: {neutraali}</p>
                    <p>huono: {huono}</p>
                </div>    
            )
        }
        
        return (
            <div>
                <h2>Statistiikka:</h2>
                <p>hyvä: {hyva}</p>
                <p>neutraali: {neutraali}</p>
                <p>huono: {huono}</p>
                <p> ------------------------- </p>
                <p>keskiarvo: {parseFloat(keskiarvo).toFixed(1)}</p>
                <p>positiivisia: {parseFloat(positiivisia).toFixed(1)} %</p>
            </div>
        )
    }
}
export default Statistics;
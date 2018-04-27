import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Anecdote from './Anecdote';
import './index.css';

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of ' +
        'the development time... The remaining 10 percent of the code accounts ' +
        'for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. ' +
        'Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. ' +
        'Therefore, if you write the code as cleverly as possible, you are, ' +
        'by definition, not smart enough to debug it.'] 

let random = 3 // harkittu päätös: aloitetaan aina anekdootilla nro 3
const likes = [0, 0, 0, 0, 0, 0] // kunkin anekdootin saamat tykkäykset taulukossa

class App extends Component {

    state = {selected: 3} // tähän myös kolmonen lähtöarvoksi

    // anekdoottien lukumäärä niin pieni, että hyvinkin mahdollista
    // että sama tulee useastikin peräkkäin
    // -> välillä vaikuttaa siltä, kuin next-nappi ei toimisi
    paivita = () => {
        random = Math.floor((Math.random() * 5)) // arvotaan uusi luku
        this.setState({selected: random}) // uudelleenrenderöinti
    }

    tykkaa = () => {
        likes[random] += 1
        this.setState({selected: random}) // uudelleenrenderöinti päivittää tykkäysmäärän
    }

    render() {

        let eniten = 0;
        for (let i = 0; i < 6; i++) {
            // käydään pistetaulukko läpi ja etsitään indeksi, jolla eniten tykkäyksiä
            // jos usealla anekdootilla sama määrä, tulostuu ensimmäisenä taulukossa oleva
            if (likes[i] > eniten) {
                eniten = i
            }
        }

        // jos yhtään ääntä ei ole annettu, ei tulosteta high scorea
        if (eniten === 0) {
            return (
                <div>
                    <h3>Anecdote of the day: </h3>
                    <Anecdote anecdote={anecdotes[random]} votes={likes[random]} />
                    <input type='submit' value='next' onClick={this.paivita} />
                    <input type='submit' value='like' onClick={this.tykkaa} />
                </div>
            )
        }

        return (
            <div className='App'>
                <h3>Anecdote of the day: </h3>
                <Anecdote anecdote={anecdotes[random]} votes={likes[random]} />
                <input type='submit' value='next' onClick={this.paivita} />
                <input type='submit' value='like' onClick={this.tykkaa} />
                <h3>Anecdote with most votes: </h3>
                <Anecdote anecdote={anecdotes[eniten]} votes={likes[eniten]} />
            </div>
        )
    }
}       

ReactDOM.render(
    <App anecdotes={anecdotes} />, 
    document.getElementById('root'));
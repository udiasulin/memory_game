import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import data from "./superheroes.json";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.guess = this.guess.bind(this)
        this.state = {
            heroes: data.superheroes,
            score: 0,
            topScore: 0
        }

    }

    shuffleArr = (data) => {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        return data
    }

    incrementCount() {
        this.setState((state) => {
            return { score: state.score + 1, topScore: state.score + 1 }
        });
        if (this.state.score < this.state.topScore) {
            this.setState({ topScore: this.state.topScore });
        }
    }
    guess = (event, data) => {
        this.setState({ heroes: this.shuffleArr(this.state.heroes) })
        if (data.clicked) {
            this.setState({ score: 0 })
            this.state.heroes.forEach(e => e.clicked = false)
        } else {
            data.clicked = true;
            this.incrementCount();
        }

    }



    render() {
        return (
            <>
                <Nav score={this.state.score} topScore={this.state.topScore} />
                <div className="container-fluid">
                    <div className="row">
                        <Card data={this.state} guess={this.guess} />
                    </div>
                </div>
            </>
        );
    }

}

export default App;

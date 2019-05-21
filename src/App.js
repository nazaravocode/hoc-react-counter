import React, {Component} from 'react';
import './App.css';
import styled from "styled-components";

import Counter from "./components/Counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state =
            {counter: 10}
        ;
        this.decrementCounter = this.decrementCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        console.log('this.state', this.state);
    }

    incrementCounter() {
        let {counter} = this.state;
        this.setState({counter: ++counter})
    }

    decrementCounter() {
        let {counter} = this.state;
        this.setState({counter: --counter})
    }

    render() {
        return (
            <div className="App">

                <Counter counter={this.state.counter}
                         incrementCounter={this.incrementCounter}
                         decrementCounter={this.decrementCounter}
                />
            </div>
        )
    }
}

export default App;

import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({name : 'mspark'})}}>Click Me</button>
                <h1>Hello! 112{this.state.name}</h1>
            </div>
        );
    }
}

export default hot(module)(App);
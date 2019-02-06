import React from 'react';
import Contact from './Contact'
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <Contact />
        );
    }
}

export default hot(module)(App);
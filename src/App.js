import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/index';


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <h1>Yooo</h1>
                </div>
            </div>
        );
    }
}

export default App;
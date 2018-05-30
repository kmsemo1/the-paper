import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Nav/index';


class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Yooo</h1>
                </div>
            </div>
        );
    }
}

export default App;
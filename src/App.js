import React, {Component} from 'react';
import './App.css';
import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div>
                        <ul>
                            <li>Edge</li>
                            <li>Hosting</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                            <li>Login</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </header>
                <p className="App-intro">
                    <h1 className="App-title">Leveraging today's technology to empower the decisions of tomorrow.</h1>
                </p>
            </div>
        );
    }
}

export default App;

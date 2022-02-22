import React, { Component } from 'react';
import Planet from './Planet';
import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div className='main'>
                <div className="planet-container">
                    <Planet/>
                </div>
                <div className="presentation">
                    <header>
                        <p className='present-title'>DARK SYSTEM</p>
                        <div className="text">
                            A React.js website demonstration, using the <a href="https://api.le-systeme-solaire.net/en/">Systeme Solaire API</a>
                        </div>
                    </header>
                    <button></button>
                </div>
            </div>
        );
    }
}

export default Landing;
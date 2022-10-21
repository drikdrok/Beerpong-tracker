import logo from './logo.svg';
import './App.css';
import axios from "axios"

import React, { useState, useEffect } from 'react';

import { PlayerComponent } from "./playerComponent";

function App() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function func() {
            const result = await axios(
                'http://localhost:8080/getStats',
            );

            setPlayers(result.data);

        }

        func();
    }, [])

    return (
        <div>
            <h1>Beer Pong Tracker</h1>


            <table>
                <thead>

                <tr>
                    <th>Name</th>
                    <th>Cups made</th>
                    <th>Same Cups</th>
                    <th>Islands</th>
                    <th>Redemptions</th>
                    <th>Final Cups</th>
                    <th>Bitch Cups</th>
                    <th>Titties</th>
                    <th>Blows</th>
                    <th>Games Played</th>
                    <th>Wins</th>
                </tr>
                </thead>
                <tbody>
                    {
                        players.map(player => {
                            return (
                                    <PlayerComponent player={player}></PlayerComponent>
                            );
                        })
                    }

                </tbody>

            </table>



        </div>
    );
}

export default App;

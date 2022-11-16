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
                        players.sort(function(a, b) {
                            return a.name.localeCompare(b.name);}).map(player => {
                            return (
                                <PlayerComponent player={player}></PlayerComponent>
                            );
                        })
                    }

                </tbody>

            </table>

            <button onClick={async () => {
                let name = prompt("Enter player name");
                await axios.post('http://localhost:8080/newPlayer', { name: name });
                window.location.reload();
            }}>Add player</button>
            <br/>
            <h1>Statistics</h1>
            <h2>Cups / Game</h2>
            <ol>
                {
                    players.filter(obj => {
                        return obj.gamesPlayed >= 10;
                      }).sort(function(a,b){
                        if (a.cupsMade / a.gamesPlayed < b.cupsMade / b.gamesPlayed){
                            return 1;
                        }else if (a.cupsMade / a.gamesPlayed > b.cupsMade / b.gamesPlayed){
                            return -1;
                        }
                        return a.name.localeCompare(b.name);
                    }).map(player =>{
                        return (
                            <li>{player.name}: {(player.cupsMade / player.gamesPlayed).toFixed(2)}</li>
                        );
                    })
                }
            </ol>

            <h2>Win %</h2>
            <ol>
                {
                    players.filter(obj => {
                        return obj.gamesPlayed >= 10;
                      }).sort(function(a,b){
                        if (a.wins / a.gamesPlayed < b.wins / b.gamesPlayed){
                            return 1;
                        }else if (a.wins / a.gamesPlayed > b.wins / b.gamesPlayed){
                            return -1;
                        }
                        return a.name.localeCompare(b.name);
                    }).map(player =>{
                        return (
                            <li>{player.name}: {(player.wins / player.gamesPlayed).toFixed(2) * 100}%</li>
                        );
                    })
                }
            </ol>

        </div>
    );
}

export default App;

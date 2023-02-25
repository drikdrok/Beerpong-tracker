import logo from './logo.svg';
import './App.css';
import axios from "axios"

import React, { useState, useEffect } from 'react';

import { PlayerComponent } from "./playerComponent";

let filterPeopleOut = [
    "Casper",
    "Anne Marie",
    "Pablo"
]


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
            <h1>Beer Pong Tracker - Winter 23</h1>


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
                        players.filter(obj=>{
                            return !filterPeopleOut.includes(obj.name);
                        }).sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                        }).map(player => {
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
            <br />
            <h1 align="center">Statistics</h1>
            <div class="stats">
                <div id="stat">

                    <h2>Cups / Game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie" ;
                            }).sort(function (a, b) {
                                if (a.cupsMade / a.gamesPlayed < b.cupsMade / b.gamesPlayed) {
                                    return 1;
                                } else if (a.cupsMade / a.gamesPlayed > b.cupsMade / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.cupsMade / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>
                <div id="stat">

                    <h2>Win %</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.wins / a.gamesPlayed < b.wins / b.gamesPlayed) {
                                    return 1;
                                } else if (a.wins / a.gamesPlayed > b.wins / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.wins / player.gamesPlayed).toFixed(2) * 100}%</li>
                                );
                            })
                        }
                    </ol>
                </div>
                <div id="stat">

                    <h2>Same cups/game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.sameCups / a.gamesPlayed < b.sameCups / b.gamesPlayed) {
                                    return 1;
                                } else if (a.sameCups / a.gamesPlayed > b.sameCups / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.sameCups / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>

            <div class="stats">
                <div id="stat">

                    <h2>Islands/game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.islands / a.gamesPlayed < b.islands / b.gamesPlayed) {
                                    return 1;
                                } else if (a.islands / a.gamesPlayed > b.islands / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.islands / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>

                <div id="stat">

                    <h2>Redemptions/game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.redemptions / a.gamesPlayed < b.redemptions / b.gamesPlayed) {
                                    return 1;
                                } else if (a.redemptions / a.gamesPlayed > b.redemptions / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.redemptions / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>
                <div id="stat">

                    <h2>Final Cups/game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.finalCups / a.gamesPlayed < b.finalCups / b.gamesPlayed) {
                                    return 1;
                                } else if (a.finalCups / a.gamesPlayed > b.finalCups / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.finalCups / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>

                <div id="stat">

                    <h2>Titties/game</h2>
                    <ol>
                        {
                            players.filter(obj => {
                                return obj.gamesPlayed >= 1 && obj.name != "Casper"  && obj.name != "Anne Marie";
                            }).sort(function (a, b) {
                                if (a.titties / a.gamesPlayed < b.titties / b.gamesPlayed) {
                                    return 1;
                                } else if (a.titties / a.gamesPlayed > b.titties / b.gamesPlayed) {
                                    return -1;
                                }
                                return a.name.localeCompare(b.name);
                            }).map(player => {
                                return (
                                    <li>{player.name}: {(player.titties / player.gamesPlayed).toFixed(2)}</li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default App;

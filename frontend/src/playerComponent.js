import React from "react";

import Button from '@mui/material/Button';
import axios from "axios";


export class PlayerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.addCup = this.addCup.bind(this);
        this.postStats = this.postStats.bind(this);

        this.state = {
            _id: props.player._id,
            name: props.player.name,
            cupsMade: props.player.cupsMade,
            sameCups: props.player.sameCups,
            islands: props.player.islands,
            redemptions: props.player.redemptions,
            finalCups: props.player.finalCups,
            bitchCups: props.player.bitchCups,
            titties: props.player.titties,
            blows: props.player.blows,
            gamesPlayed: props.player.gamesPlayed,
            wins: props.player.wins,

        }

    }

    postStats(){
        let newStats = {
            _id: this.state._id,
            cupsMade: this.state.cupsMade,
            sameCups: this.state.sameCups,
            islands: this.state.islands,
            redemptions: this.state.redemptions,
            finalCups: this.state.finalCups,
            bitchCups: this.state.bitchCups,
            titties: this.state.titties,
            blows: this.state.blows,
            gamesPlayed: this.state.gamesPlayed,
            wins: this.state.wins,
        }

        axios.post("http://localhost:8080/setStats", {newStats: newStats})
    }

    addCup(amount) {
        let newAmount = this.state.cupsMade + amount;
        this.setState({
            cupsMade: newAmount
        });

        this.postStats();
    }

    render() {
        return (
            <tr id={this.state._id}>
                <td>
                    {this.state.name}
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.cupsMade}</p>
                        <Button variant="contained" onClick={() => { this.addCup(1); }}><b>+</b></Button>
                        <Button variant="contained" onClick={() => { this.addCup(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    {this.state.sameCups}
                </td>
                <td>
                    {this.state.islands}
                </td>
                <td>
                    {this.state.redemptions}
                </td>
                <td>
                    {this.state.finalCups}
                </td>
                <td>
                    {this.state.bitchCups}
                </td>
                <td>
                    {this.state.titties}
                </td>
                <td>
                    {this.state.blows}
                </td>
                <td>
                    {this.state.gamesPlayed}
                </td>
                <td>
                    {this.state.wins}
                </td>

            </tr>

        );
    }
}
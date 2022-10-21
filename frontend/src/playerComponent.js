import React from "react";

import Button from '@mui/material/Button';
import axios from "axios";

export class PlayerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.addCup = this.addCup.bind(this);
        this.sameCup = this.sameCup.bind(this);
        this.island = this.island.bind(this);
        this.redemption = this.redemption.bind(this);
        this.finalCup = this.finalCup.bind(this);
        this.bitchCup = this.bitchCup.bind(this);
        this.titties = this.titties.bind(this);
        this.blow = this.blow.bind(this);
        this.playGame = this.playGame.bind(this);
        this.win = this.win.bind(this);

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

            error: false

        }

    }

    postStats() {
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

        axios.post("http://localhost:8080/setStats", { newStats: newStats }).catch((err)=>{
            this.setState({error: true});
            throw err;
        })
    }

    async addCup(amount) {
        let newAmount = this.state.cupsMade + amount;
        await this.setState({
            cupsMade: newAmount
        });

        this.postStats();
    }

    async sameCup(action) {
        await this.setState({
            cupsMade: this.state.cupsMade + 2 * action,
            sameCups: this.state.sameCups + 1 * action
        });

        this.postStats();
    }

    async island(action) {
        await this.setState({
            cupsMade: this.state.cupsMade + 2 * action,
            islands: this.state.islands + 1 * action
        });
        this.postStats();
    }
    async redemption(action) {
        await this.setState({
            cupsMade: this.state.cupsMade + 1 * action,
            redemptions: this.state.redemptions + 1 * action
        });
        this.postStats();
    }
    async finalCup(action) {
        await this.setState({
            cupsMade: this.state.cupsMade + 1 * action,
            finalCups: this.state.finalCups + 1 * action
        });
        this.postStats();
    }
    async bitchCup(action) {
        await this.setState({
            cupsMade: this.state.cupsMade + 1 * action,
            bitchCups: this.state.bitchCups + 1 * action
        });
        this.postStats();
    }
    async titties(action) {
        await this.setState({
            titties: this.state.titties + 1 * action,
        });
        this.postStats();
    }
    async blow(action) {
        await this.setState({
            blows: this.state.blows + 1 * action,
        });
        this.postStats();
    }

    async playGame(action) {
        await this.setState({
            gamesPlayed: this.state.gamesPlayed + 1 * action,
        });
        this.postStats();
    }

    async win(action) {
        await this.setState({
            wins: this.state.wins + 1 * action,
        });
        this.postStats();
    }

    render() {
        return (
            <tr id={this.state._id}>
                {this.state.error && 
                <div className="error"><h1>DATA HAS NOT BEEN SAVED!!!</h1></div>}
                <td>
                    {this.state.name}
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.cupsMade}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.addCup(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.addCup(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.sameCups}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.sameCup(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.sameCup(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.islands}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.island(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.island(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.redemptions}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.redemption(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.redemption(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.finalCups}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.finalCup(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.finalCup(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.bitchCups}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.bitchCup(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.bitchCup(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.titties}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.titties(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.titties(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.blows}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.blow(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.blow(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.gamesPlayed}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.playGame(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.playGame(-1); }}><b>-</b></Button>
                    </div>
                </td>
                <td>
                    <div className="stat">
                        <p>{this.state.wins}</p>
                        <Button variant="outlined" size="small" onClick={() => { this.win(1); }}><b>+</b></Button>
                        <Button variant="outlined" size="small" onClick={() => { this.win(-1); }}><b>-</b></Button>
                    </div>
                </td>

            </tr>

        );
    }
}
// Platform.
import React from 'react';

// Application
import GameEngine from './GameEngine';

// Interface
import './style.css';
import CardHandView from './CardHandView';

class App extends React.Component {
    game = undefined;

    constructor() {
        super();
        this.state = { canRender: false, runningScore: 0, highScore: 0, gameOver: false };
    }

    async componentDidMount() {
        this.game = new GameEngine();
        await this.doStartGame();
    }

    doStartGame = async () => {
        await this.game.start();
        this.setState({ canRender: true, runningScore: 0, gameOver: false });
    }

    doEndGame = async () => {
        let ncards = this.game.getNumberCards() - 1;
        let newHighScore = Math.max(this.state.highScore, ncards);
        this.setState({highScore: newHighScore, gameOver: true});
    }

    handleDrawCardClick = async () => {
        if (this.state.gameOver) {
            await this.doStartGame();
        }
        else {
            await this.game.drawCard();
            let isBust = this.game.isBust();

            if (isBust) this.doEndGame();
            this.setState({ runningScore: this.game.getTotal(), gameOver: isBust })
        }
    }

    render() {
        if (!this.state.canRender) {
            return <p className="cntr">Loading...</p>;
        }

        let buttonLabel = "DRAW CARD"
        let currentScore = this.state.runningScore; 

        if (this.state.gameOver) {
            buttonLabel = "BUST - TRY AGAIN";
            currentScore = "BUST"
        }

        return (
            <div>
                <p className="tar">High Score: {this.state.highScore} </p>
                <div className="vgap"/>
                <CardHandView hand = { this.game.getHand() }/>
                <div className="vgap"/>
                <p className="cntr"> Current Score: { currentScore }</p>
                <div className="cntr">
                    <button type="button" className="btn" onClick={this.handleDrawCardClick}>{buttonLabel}</button>
                </div>
            </div>
        );
    }
}

export default App;

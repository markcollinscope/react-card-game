// Platform.
import React from 'react';

// Application
import GameEngine from './GameEngine';

// Interface
import './style.css';
import CardHandView from './CardHandView';
import Button from './Button';

class App extends React.Component {
    game = undefined;

    constructor() {
        super();
        this.state = { canRender: false, runningScore: 0, highScore: 0, gameOver: true };
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
        console.log("Clicked");
        await this.game.drawCard();

        if (this.game.isBust())

        this.setState({ runningScore: this.game.getTotal() })
    }

    render() {
        let buttonLabel = "Another Game?"

        if (!this.state.gameOver) {
            buttonLabel = "Draw Card";
        }

        if (!this.state.canRender) {
            return <p className="cntr">Loading...</p>;
        }

        return (
            <div>
                <div style={{background: "azure"}}><p>debug:</p></div>

                <p className="tar">High Score: {this.state.highScore} </p>
                <div className="vgap"/>
                <CardHandView hand = { this.game.getHand() }/>
                <div className="vgap"/>
                <p className="cntr"> Current Score: { this.state.runningScore }</p>
                <div className="cntr">
                    <Button className="button" label={buttonLabel} onClick={this.handleDrawCardClick}/>
                </div>
            </div>
        );
    }
}

export default App;

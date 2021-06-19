import React from 'react';
import './style.css';

import Deck from './Deck';
import Card from './Card';
import CardHandView from './CardHandView';
import Button from './Button';
import TxtOut from './TxtOut';

class App extends React.Component {
    deck = undefined;

    constructor() {
        super();
        this.state = { canRender: false, deckId: undefined, score: 0 };
        this.deck = new Deck();
    }

    async componentDidMount() {
        let id = await this.deck.newDeck();

        this.setState({ canRender: true, deckId: id });
        console.log("DID MOUNT: ", this.state.deckId);
        await this.testDeck();
    }

    testDeck = async () => {
        const MAX=7;
        let card = undefined;

        console.log("testDeck - deckId: ", this.deck.id())

        for (let i=0; i<MAX; i++) {
            card = await this.deck.drawCard();
            console.log("CARD: ", i, card);
        }
    }

    handleDrawCardClick = () => {
        console.log("Clicked");
    }

    render() {
        console.log("Rendering - canRender: ", this.state.canRender);
        
        if (! this.state.canRender) {
            return <div className="cntr"><TxtOut label="Loading"/></div>
        }

        return (
            <div className="green" >
                <TxtOut msg={ ": " + this.state.score }/>
                <div className="vgap"/>
                <CardHandView cards = {[
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                        new Card ( { image: "https://deckofcardsapi.com/static/img/JS.png", value: " ", suit: " ", code: " "} ),
                    ]}
                />
                <div className="vgap"/>
                <div className="flexhline">
                    <Button label="Draw Card" onClick={this.handleDrawCardClick}/>
                </div>
            </div>
        );
    }
}

export default App;


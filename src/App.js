import React from 'react';

import * as deck from './cardapi';

class App extends React.Component {
    constructor() {
        super();
        this.state = { canRender: false, deckId: undefined };
    }

    async componentDidMount() {
        let id = await deck.deck.newDeck();
        this.setState({ canRender: true, deckId: id })

        console.log("DID MOUNT: ", this.state.deckId)

    }

    render() {
        let msg = 'Nothing Here!';

        console.log("Rendering - canRender: ", this.state.canRender)
        
        if (this.state.canRender) {
            console.log("Updating MSG");
            msg = this.state.deckId;
        }

        return (
            <div className="App">
                <p>Hello World</p>
                { msg }
            </div>
        );
    }
}

export default App;


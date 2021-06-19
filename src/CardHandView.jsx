import React from 'react';
import './style.css';

import CardView from './CardView';

export default class CardHandView extends React.Component {

	constructor(props) {
  		super(props);
  		// console.log("CardHandView: ", this.props);
	}

	render() {
		console.log("CardHandView render: " + this.props.cards )

		return (
			<div className="flexhline blue">
				{  this.props.cards.map((theCard, key) => ( <CardView card={theCard} key={key}/> ))  }
			</div>
		)
	}
}

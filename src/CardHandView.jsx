import React from 'react';
import './style.css';

import CardView from './CardView';

export default class CardHandView extends React.Component {
	render() {
		return (
			<div className="flex-horiz">
				{  this.props.hand.cards.map((theCard, key) => ( <CardView card={theCard} key={key}/> ))  }
			</div>
		)
	}
}

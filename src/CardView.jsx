import React from 'react';
import './style.css';

export default class CardView extends React.Component {

	constructor(props) {
  		super(props);
	}

	render() {
		const image = <img src={this.props.card.getImage()} alt="a card you can't see" className="cardwidth cardpad" />

		return (
			<div>
				{ image }
			</div>
		);
	}
}

import React from 'react';
import './style.css';

export default class CardView extends React.Component {
	render() {
		const image = <img src={this.props.card.getImage()} alt="a card you can't see" className="card" />

		return (
			<div>
				{ image }
			</div>
		);
	}
}

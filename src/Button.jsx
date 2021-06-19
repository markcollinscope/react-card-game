import React from 'react';
import './style.css';

export default class Button extends React.Component {

	static defaultProps = {
		label: "no-text",
		onClicck: () => {}
	}

	constructor(props) {
  		super(props);
	}

	render() {
		const button  = <button className={"button"} onClick={this.props.onClick}>{this.props.label}</button>

		return (
			<div>
				{ button }
			</div>
		);
	}
}


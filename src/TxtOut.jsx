import React from 'react';
import './style.css';

export default class TxtOut extends React.Component {

	static defaultProps = {
		label: "Score",
		msg: "..."
	}

	constructor(props) {
  		super(props);
	}

	render() {
		const text = <p>{this.props.label + this.props.msg }</p>;

		return (
			<div className="txtout">
				{ text }
			</div>
		);
	}
}


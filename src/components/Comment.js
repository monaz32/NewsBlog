import React, { Component } from 'react'
import PropTypes from 'prop-types'

var moment = require('moment');

export default class Comment extends Component {
	static propTypes = {
		id: PropTypes.number,
		author: PropTypes.string,
		score: PropTypes.number,
		time: PropTypes.number,
		parent: PropTypes.number,
		text: PropTypes.string
	}

	render() {
		const { id, author, score, time, parent, text } = this.props

		return (
			<div style={{ marginBottom: 20 }}>
				<div className="comment-subtext">
					by {author} | {moment.utc(time * 1000).fromNow()}
				</div>
				<div className="comment-content">
					{text}
				</div>
			</div>
		)
	}
}
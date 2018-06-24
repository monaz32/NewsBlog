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
		text: PropTypes.string,
		onUpvoteClicked: PropTypes.func.isRequired
	}
	
	render() {
		const { id, author, score, time, parent, text, onUpvoteClicked } = this.props

		return (
			<div style={{ marginBottom: 20 }}>
				<div className="comment-vote">
					<button><img src="/upvotearrow.gif" width="10" alt="upvote button" onClick={() => onUpvoteClicked(id)} /></button>
				</div>
				<div className="comment-subtext">
				{score} points by {author} | {moment.utc(time * 1000).fromNow()}
				</div>
				<div className="comment-content">
					{text}
				</div>
			</div>
		)
	}
}
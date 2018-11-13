import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

var moment = require('moment');

const Button = styled.button`
	border-radius: 5px;
	margin: 0 0.5em;
	padding: 0.25em 1em;
	cursor: pointer;
	border: 0.25em solid grey;
	&:focus {
    outline: none;
	}
`

const UpvoteButton = styled(Button)`
	&:hover {
		border: 0.25em solid green;
	}
`

const DeleteButton = styled(Button)`
	&:hover {
		border: 0.25em solid red;
	}
`

const CommentSubtext = styled.div`
	color: dimgrey;
	font-size: 12px;
`

export default class Comment extends Component {
	static propTypes = {
		id: PropTypes.number,
		author: PropTypes.string,
		score: PropTypes.number,
		time: PropTypes.number,
		parent: PropTypes.number,
		text: PropTypes.string,
		onUpvoteClicked: PropTypes.func.isRequired,
		onDeleteComment: PropTypes.func.isRequired
	}

	render() {
		const { id, author, score, time, parent, text, onUpvoteClicked, onDeleteComment } = this.props

		return (
			<div style={{ marginBottom: 20 }}>
				<CommentSubtext>
					<UpvoteButton><img src="/upvotearrow.gif" width="10" alt="upvote button" onClick={() => onUpvoteClicked(id)} /></UpvoteButton>
					{score} points by {author} | {moment.utc(time * 1000).fromNow()} |
					<DeleteButton><img src="/trash.png" width="10" alt="delete post" onClick={() => onDeleteComment(id)} /></DeleteButton>
				</CommentSubtext>
				<div className="comment-content">
					{text}
				</div>
			</div>
		)
	}
}
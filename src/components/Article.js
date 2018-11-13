import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

var URL = require('url');
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

const ArticleBox = styled.div`
	margin: 0 1em;
`

const ArticleLink = styled.a`
	color: #2196F3;
	&:visited {
		color: #673AB7;
	}
	&:hover {
		color: #FFEB3B;
	}
`

const ArticleDomain = styled.span`
	padding: 0.25em;
	color: #0D47A1;
`

const ArticleSubtext = styled.div`
	color: dimgrey;
	font-size: 12px;
`

export default class Article extends Component {
	static propTypes = {
		id: PropTypes.number,
		author: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string,
		time: PropTypes.number,
		score: PropTypes.number,
		commentnum: PropTypes.number,
		onUpvoteClicked: PropTypes.func.isRequired,
		onDeleteArticle: PropTypes.func.isRequired
	}

	state = {
		score: this.props.score
	}

	render() {
		const { id, author, title, url, time, score, commentnum, onUpvoteClicked, onDeleteArticle } = this.props

		return (
			<ArticleBox>
				<div className="article-itemText">
					<div className="article-titletext">
						<ArticleLink href={url}>
							{title}
						</ArticleLink>
						<ArticleDomain>
							({URL.parse(url).hostname})
						</ArticleDomain>
					</div>
					<ArticleSubtext>
						<UpvoteButton><img src="/upvotearrow.gif" width="10" alt="upvote button" onClick={() => onUpvoteClicked(id)} /></UpvoteButton>
						{score} points by {author} | {moment.utc(time * 1000).fromNow()} |
						<DeleteButton><img src="/trash.png" width="10" alt="delete post" onClick={onDeleteArticle} /></DeleteButton>
					</ArticleSubtext>
				</div>
			</ArticleBox>
		)
	}
}
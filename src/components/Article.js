import React, { Component } from 'react'
import PropTypes from 'prop-types'

var URL = require('url');
var moment = require('moment');

export default class Article extends Component {
	static propTypes = {
		id: PropTypes.number,
		author: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string,
		time: PropTypes.number,
		score: PropTypes.number,
		commentnum: PropTypes.number,
		onUpvoteClicked: PropTypes.func.isRequired
	}

	state = {
		score: this.props.score
	}

	render() {
		const { id, author, title, url, time, score, commentnum, onUpvoteClicked } = this.props

		return (
			<div>
				<div className="article-vote">
					<button><img src="/upvotearrow.gif" width="10" alt="upvote button" onClick={() => onUpvoteClicked(id)} /></button>
				</div>
				<div className="article-itemText">
					<div className="article-titletext">
						<a className="article-titleLink" href={url}>{title}</a>
						<span className="article-domain">
							({URL.parse(url).hostname})
						</span>
					</div>
					<div className="article-subtext">
						{score} points by {author} | {moment.utc(time * 1000).fromNow()}
					</div>
				</div>
			</div>
		)
	}

}

// const Article = ({ id, author, title, url, time, score, commentnum }) => (
// 	<div>
//     <div className="article-vote">
// 			{/* todo: add function to upvote article */}
// 			<img src="../img/grayarrow2x.gif" width="10" alt="upvote button"/>
// 		</div>
//     <div className="article-itemText">
// 			<div className="article-titletext">
// 				<a className="article-titleLink" href={url}>{title}</a>
// 				<span className="article-domain">
// 					({URL.parse(url).hostname})
// 				</span>
// 			</div>
// 			<div className="article-subtext">
//         {score} points by {author} {moment.utc(time * 1000).fromNow()}
//     	</div>
//     </div>
		
//   </div>
// )

// Article.propTypes = {
// 	id: PropTypes.number,
//   author: PropTypes.string,
//   title: PropTypes.string,
// 	url: PropTypes.string,
// 	time: PropTypes.number,
// 	score: PropTypes.number,
// 	commentnum: PropTypes.number
// }

//export default Article
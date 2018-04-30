import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Comment from './Comment'
import { Accordion, AccordionItem } from 'react-sanfona';

export default class ArticleItem extends Component {

	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.number.isRequired,
			author: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			time: PropTypes.number.isRequired,
			score: PropTypes.number.isRequired,
			commentnum: PropTypes.number.isRequired
		}).isRequired,
		comments: PropTypes.array.isRequired,
		onUpvoteClicked: PropTypes.func.isRequired
	}

	getCommentLink = (commentnum) => {
    var commentText = '0 comment';
    if (commentnum) {
      commentText = commentnum + ' comments';
    }

    return (
      commentText
    );
  }

  render() {
		const { article, comments, onUpvoteClicked } = this.props

		return (
			<div style={{ marginBottom: 20 }}>
				<Article
					id={article.id}
					author={article.author}
					title={article.title}
					url={article.url}
					time={article.time}
					score={article.score}
					commentnum={article.commentnum}
					onUpvoteClicked={onUpvoteClicked} />
				<Accordion>
					<AccordionItem title={this.getCommentLink(article.commentnum)} expanded={false}>
						{comments.map(comment => {
							return (
								<Comment key={comment.id} id={comment.id} author={comment.author} score={comment.score}
									time={comment.time} parent={comment.parent} text={comment.text}
								/>
							)
						})}
					</AccordionItem>
				</Accordion>
			</div>
		)
	}
}

// ArticleItem.propTypes = {
//   article: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     author: PropTypes.string.isRequired,
// 		title: PropTypes.string.isRequired,
// 		url: PropTypes.string.isRequired,
// 		time: PropTypes.number.isRequired,
// 		score: PropTypes.number.isRequired,
// 		commentnum: PropTypes.number.isRequired
//   }).isRequired
// }

// export default ArticleItem

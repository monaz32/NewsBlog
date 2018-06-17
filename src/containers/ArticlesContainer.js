import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleItem from '../components/ArticleItem'
import { addComment, upvoteArticle } from '../actions'

const ArticlesContainer = ({ posts, onAddComment, onUpvoteArticle }) => (
	<div>
		{posts.filter(post => post.type === "story").map(article =>
			<ArticleItem
				key={article.id}
				article={article}
				comments={posts.filter(post => post.type === "comment").filter(comment => comment.parent === article.id)}
				onUpvoteClicked={() => onUpvoteArticle(article.id)}
				onAddComment={(text) => onAddComment(article.id, text)}
				 />
		)}
	</div>
)

ArticlesContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	onUpvoteArticle: PropTypes.func.isRequired,
	onAddComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	posts: state.articles
})

const mapDispatchToProps = dispatch => ({
	onUpvoteArticle: id => dispatch(upvoteArticle(id)),
	onAddComment: (articleId, text) => dispatch(addComment(articleId, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)
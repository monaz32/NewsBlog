import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleItem from '../components/ArticleItem'
import { addComment, upvotePost, deleteArticle, deleteComment } from '../actions'

const ArticlesContainer = ({ posts, onAddComment, onUpvotePost, onDeleteArticle, onDeleteComment }) => (
	<div>
		{posts.filter(post => post.type === "story").map(article =>
			<ArticleItem
				key={article.id}
				article={article}
				comments={posts.filter(post => post.type === "comment").filter(comment => comment.parent === article.id)}
				onUpvoteClicked={(id) => onUpvotePost(id)}
				onAddComment={(text) => onAddComment(article.id, text)}
				onDeleteArticle={() => onDeleteArticle(article.id)}
				onDeleteComment={(id) => onDeleteComment(id)}
				 />
		)}
	</div>
)

ArticlesContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
	onAddComment: PropTypes.func.isRequired,
	onDeleteArticle: PropTypes.func.isRequired,
	onDeleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	posts: state.articles
})

const mapDispatchToProps = dispatch => ({
	onUpvotePost: id => dispatch(upvotePost(id)),
	onAddComment: (articleId, text) => dispatch(addComment(articleId, text)),
	onDeleteArticle: id => dispatch(deleteArticle(id)),
	onDeleteComment: id => dispatch(deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)
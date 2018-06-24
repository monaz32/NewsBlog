import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleItem from '../components/ArticleItem'
import { addComment, upvotePost } from '../actions'

const ArticlesContainer = ({ posts, onAddComment, onUpvotePost }) => (
	<div>
		{posts.filter(post => post.type === "story").map(article =>
			<ArticleItem
				key={article.id}
				article={article}
				comments={posts.filter(post => post.type === "comment").filter(comment => comment.parent === article.id)}
				onUpvoteClicked={(id) => onUpvotePost(id)}
				onAddComment={(text) => onAddComment(article.id, text)}
				 />
		)}
	</div>
)

ArticlesContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	onUpvotePost: PropTypes.func.isRequired,
	onAddComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	posts: state.articles
})

const mapDispatchToProps = dispatch => ({
	onUpvotePost: id => dispatch(upvotePost(id)),
	onAddComment: (articleId, text) => dispatch(addComment(articleId, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)
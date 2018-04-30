import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleItem from '../components/ArticleItem'
import { upvoteArticle } from '../actions'


const ArticlesContainer = ({ posts, upvoteArticle }) => (
	<div>
		{posts.filter(post => post.type === "story").map(article =>
			<ArticleItem
				key={article.id}
				article={article}
				comments={posts.filter(post => post.type === "comment").filter(comment => comment.parent === article.id)}
				onUpvoteClicked={() => upvoteArticle(article.id)} />
		)}
	</div>
)

ArticlesContainer.propTypes = {
	posts: PropTypes.array.isRequired,
	upvoteArticle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	posts: state.articles
})

export default connect(mapStateToProps, { upvoteArticle })(ArticlesContainer)
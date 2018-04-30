// import React from 'react';
// import PropTypes from 'prop-types'
// import ArticleItem from '../components/ArticleItem'
// import { upvoteArticle } from '../actions'

// const ArticleList = ({ children, allComments, onUpvoteClicked }) => (
// 	<div>
// 		{children.map(article =>
// 			<ArticleItem
// 				key={article.id}
// 				article={article}
// 				comments={allComments.filter(comment => comment.parent === article.id)}
// 				onUpvoteClicked={onUpvoteClicked} />
// 		)}
// 	</div>
// )

// ArticleList.protoTypes = {
// 	// children: PropTypes.node,
// 	// comments: PropTypes.node
// }

// export default ArticleList
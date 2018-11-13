import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Article from './Article'
import CommentItem from './CommentItem'

const ArticleItemBox = styled.div`
	padding-bottom: 1.5em;
`

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
		onUpvoteClicked: PropTypes.func.isRequired,
		onAddComment: PropTypes.func.isRequired,
		onDeleteArticle: PropTypes.func.isRequired,
		onDeleteComment: PropTypes.func.isRequired
	}

	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

	handleChange(event) {
    this.setState({ value: event.target.value });
	}
	
	handleSubmit(event) {
		alert('A comment was submitted: ' + this.state.value);
		this.setState({ value: '' })
    event.preventDefault();
	}

  render() {
		const { article, comments, onUpvoteClicked, onAddComment, onDeleteArticle, onDeleteComment } = this.props

		return (
			<ArticleItemBox>
				<Article
					id={article.id}
					author={article.author}
					title={article.title}
					url={article.url}
					time={article.time}
					score={article.score}
					commentnum={article.commentnum}
					onUpvoteClicked={onUpvoteClicked}
					onDeleteArticle={onDeleteArticle}/>

				<CommentItem comments={comments} onAddComment={onAddComment}
					onUpvoteClicked={onUpvoteClicked} onDeleteComment={onDeleteComment}/>
			</ArticleItemBox>
		)
	}
}

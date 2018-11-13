import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Comment from './Comment'
import { Accordion, AccordionItem } from 'react-sanfona';

const CommentBox = styled.div`
	margin: 0 2em;
	color: white;
`

export default class CommentItem extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired,
		onAddComment: PropTypes.func.isRequired,
		onUpvoteClicked: PropTypes.func.isRequired,
		onDeleteComment: PropTypes.func.isRequired
	}

	constructor(props) {
    super(props);
    this.state = {newCommentText: ''};

    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

	getCommentTitle = (commentnum) => {
    var commentSectionTitle = '0 comment';
    if (commentnum) {
      commentSectionTitle = commentnum + ' comments';
    }

    return (
      commentSectionTitle
    );
	}

	handleChangeComment(event) {
    this.setState({ newCommentText: event.target.value });
	}
	
	handleSubmitComment(event) {
		event.preventDefault();
		if (!this.state.newCommentText.trim()) {
			// Make sure we don't submit an empty comment.
			alert('You cannot submit an empty comment!');
			return
		}
		this.props.onAddComment(this.state.newCommentText);
		this.setState({ newCommentText: '' })
  }

	render() {
		const { comments, onUpvoteClicked, onDeleteComment } = this.props

		return (
			<CommentBox>
				<Accordion>
					<AccordionItem title={this.getCommentTitle(comments.length)} expanded={false}>
						{comments.map(comment => {
							return (
								<Comment key={comment.id} id={comment.id} author={comment.author} score={comment.score}
									time={comment.time} parent={comment.parent} text={comment.text} onUpvoteClicked={onUpvoteClicked}
									onDeleteComment={onDeleteComment}
								/>
							)
						})}

						<form onSubmit={this.handleSubmitComment}>
							
								<textarea
									className='form-control'
									type="text"
									cols="40"
									rows="5"
									value={this.state.newCommentText}
									onChange={this.handleChangeComment}
								/>
							<input type="submit" value="Add Comment" />
						</form>
					</AccordionItem>
				</Accordion>
			</CommentBox>
		)
	}
}
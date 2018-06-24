import * as actionTypes from '../constants/actionTypes';
import initialData from '../json/data.json'

var moment = require('moment');

const initialState = initialData;

export default function(state = initialState, action) {

  switch (action.type) {
		case actionTypes.DELETE_ARTICLE:
			return state.filter(article =>
				article.id !== action.articleId
			)

		case actionTypes.UPVOTE_POST:
			return state.map(post =>
				post.id === action.id ?
					{ ...post, score: post.score+1 } :
					post
			)

		case actionTypes.ADD_COMMENT:
			var newCommentID = Math.round(Date.now() + Math.random());

			// Add newCommentID to kids of parent article first.
			var addCommentIDToArticle = state.map(article =>
				{
					if (article.id === action.articleId) {
						article.kids.push(newCommentID);
						article.commentnum++;
					}
					return article;
				}
			)

			// Append comment to state
			var newState = [
				...addCommentIDToArticle,
				{
					id: newCommentID, 
					type: 'comment',
					author: 'default_user',
					score: 0,
					time: Math.round(moment.utc().valueOf() / 1000),
					parent: action.articleId,
					text: action.text,
				}
			];
			return newState;
			
		default:
			console.log("default action with state: " + state);
			return state;
  }
}
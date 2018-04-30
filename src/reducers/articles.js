import * as actionTypes from '../constants/actionTypes';
import initialData from '../json/data.json'

const initialState = initialData;

export default function(state = initialState, action) {

  switch (action.type) {
		case actionTypes.DELETE_ARTICLE:
			return state.filter(article =>
				article.id !== action.articleID
			)

		case actionTypes.UPVOTE_ARTICLE:
			return state.map(article =>
				article.id === action.id ?
					{ ...article, score: article.score+1 } :
					article
			)
			
		default:
			console.log(state);
			return state;
  }
}
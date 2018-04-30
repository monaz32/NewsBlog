import { combineReducers } from 'redux';
import articles from './articles';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
	articles,
	visibilityFilter
});
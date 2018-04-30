import * as actionTypes from '../constants/actionTypes';

export const getAllArticles = () => ({
  type: actionTypes.GET_ALL_ARTICLES
})

export const deleteArticle = (articleId) => ({
  type: actionTypes.DELETE_ARTICLE,
  articleId
})

export const upvoteArticle = (id) => ({
  type: actionTypes.UPVOTE_ARTICLE,
  id
})

export const setVisibilityFilter = filter => ({ type: actionTypes.SET_VISIBILITY_FILTER, filter})
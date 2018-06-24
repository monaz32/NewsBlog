import * as actionTypes from '../constants/actionTypes';

export const getAllArticles = () => ({
  type: actionTypes.GET_ALL_ARTICLES
})

export const deleteArticle = (articleId) => ({
  type: actionTypes.DELETE_ARTICLE,
  articleId
})

export const upvotePost = (id) => ({
  type: actionTypes.UPVOTE_POST,
  id
})

export const addComment = (articleId, text) => ({
  type: actionTypes.ADD_COMMENT,
  articleId,
  text
})

export const setVisibilityFilter = filter => ({ type: actionTypes.SET_VISIBILITY_FILTER, filter})
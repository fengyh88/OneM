/**
 * Created by guangqiang on 2017/9/6.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import actions from '../../actionCreators/movie'

// 表单校验器
// const getMovieList = createAction(type.MOVIE_LIST, actions.movieList, actions.testValidator)
const getMovieList = createAction(type.MOVIE_LIST, actions.movieList)
const getMovieListForDemo = createAction(type.MOVIE_LIST, actions.movieListForDemo)
const getMovieDetail = createAction(type.MOVIE_DETAIL, actions.movieDetail)
const getMovieStory = createAction(type.MOVIE_STORY, actions.movieStory)
const getMovieShowTimeList = createAction(type.MOVIE_SHOWTIME_LIST, actions.movieShowTimeList)
const getMovieComeingNewList = createAction(type.MOVIE_COMEING_NEW_LIST, actions.movieComeingNewList)
const getMovieComment = createAction(type.MOVIE_COMMENT_LIST, actions.movieCommentList)
const getMiniComment = createAction(type.MOVIE_MINI_COMMENT, actions.movieMiniCommentList)
const getPlusComment = createAction(type.MOVIE_PLUS_COMMENT, actions.moviePlusCommentList)

const actionCreators = {
  getMovieList: (params) => getMovieList(params),
  getMovieDetail,
  getMovieStory,
  getMovieListForDemo,
  getMovieShowTimeList,
  getMovieComeingNewList,
  getMovieComment,
  getMiniComment,
  getPlusComment
}

export default {actionCreators}
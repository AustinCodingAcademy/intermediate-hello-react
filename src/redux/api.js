// @flow
import axios from 'axios'

const initialState = {
  isFetching: false,
  error: {
    status: '',
    message: '',
  },
  results: {},
}

const FETCH_USERS_BEGIN: string = 'FETCH_USERS_BEGIN'
const FETCH_USERS_SUCCESS: string  = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR: string  = 'FETCH_USERS_ERROR'

type State = {|
  +isFetching: boolean,
  +error: {
    +status: string,
    +message: string,
  },
  +results: Object,
|}
type Action = {
  type: string,
  payload: Object,
}

const api = (state: State = initialState, action: Object) => {

  switch (action.type) {
  case FETCH_USERS_BEGIN:
    return {
      ...state,
      isFetching: true,
    }
  case FETCH_USERS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      users: {...action.payload[0]},
    }
  case FETCH_USERS_ERROR:
    return {
      ...state,
      isFetching: false,
      error: {
        ...state.error,
        message: 'error',
      },
    }
  default:
    return state
  }

}

export const fetchUsersBegin = () =>
  ({ type: FETCH_USERS_BEGIN })
export const fetchUsersSuccess = (payload: Array<*>) =>
  ({ type: FETCH_USERS_SUCCESS, payload })
export const fetchUsersError = (error: Object) =>
  ({ type: FETCH_USERS_ERROR, error })

export const fetchUsersAction = (amount: number = 10) => {
  return (dispatch: any) => {
    dispatch(fetchUsersBegin())
    return axios.get(`https://randomuser.me/api?results=${amount}`)
      .then(res =>
        dispatch(
          fetchUsersSuccess(res.data.results)
        )
      )
      .catch(err =>
        dispatch(
          fetchUsersError(err)
        )
      )
  }

}

export default api

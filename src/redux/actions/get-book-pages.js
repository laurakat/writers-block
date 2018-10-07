import { createApolloFetch } from 'apollo-fetch'

import { API_URL } from '../../constants'
import { getBookPages } from '../../graphql/queries'

export default bookId => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_BOOK_PAGES_START'
    })

    const query = getBookPages
    const variables = { bookId }

    const uri = API_URL
    const fetch = createApolloFetch({uri})
    const response = await fetch({ query, variables })

    if (response.errors) {
      dispatch({
        type: 'GET_BOOK_PAGES_FAILURE',
        payload: response.errors
      })

      return
    }

    dispatch({
      type: 'GET_BOOK_PAGES_SUCCESS',
      payload: {
        pages: response.data.getBookPages
      }
    })

  } catch (error) {
    dispatch({
      type: 'GET_BOOK_PAGES_FAILURE',
      payload: error
    })
  }
}

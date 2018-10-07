import { createApolloFetch } from 'apollo-fetch'

import { API_URL } from '../../constants'
import { getBooks } from '../../graphql/queries'

export default () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'LOAD_BOOKS_START'
    })

    const query = getBooks

    const uri = API_URL
    const fetch = createApolloFetch({uri})
    const response = await fetch({query})

    if (response.errors) {
      dispatch({
        type: 'LOAD_BOOKS_FAILURE',
        payload: response.errors
      })

      return
    }

    dispatch({
      type: 'LOAD_BOOKS_SUCCESS',
      payload: {
        books: response.data.getBooks
      }
    })

  } catch (error) {
    dispatch({
      type: 'LOAD_BOOKS_FAILURE',
      payload: error
    })
  }
}

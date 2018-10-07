import { createApolloFetch } from 'apollo-fetch'

import { API_URL } from '../../constants'
import { getPageById } from '../../graphql/queries'

export default pageId => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'GET_PAGE_START'
    })

    const query = getPageById
    const variables = { id: pageId }

    const uri = API_URL
    const fetch = createApolloFetch({uri})
    const response = await fetch({ query, variables })

    if (response.errors) {
      dispatch({
        type: 'GET_PAGE_FAILURE',
        payload: response.errors
      })

      return
    }

    dispatch({
      type: 'GET_PAGE_SUCCESS',
      payload: {
        page: response.data.getPageById
      }
    })

  } catch (error) {
    dispatch({
      type: 'GET_PAGE_FAILURE',
      payload: error
    })
  }
}

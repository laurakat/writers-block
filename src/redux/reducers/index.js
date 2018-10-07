import objectPathImmutable from 'object-path-immutable'

const DEFAULT_STATE = {
  books: [],
  pages: [],
  currentPage: {},
  isLoading: false,
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_PAGE_START':
    case 'LOAD_BOOKS_START':
    case 'GET_BOOK_PAGES':
      return objectPathImmutable(state)
        .set('isLoading', true)
        .value()

    case 'GET_PAGE_FAILURE':
    case 'LOAD_BOOKS_FAILURE':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .value()

    case 'GET_PAGE_SUCCESS':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .set('currentPage', action.payload.page)
        .value()

    case 'LOAD_BOOKS_SUCCESS':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .set('books', action.payload.books)
        .value()

    case 'GET_BOOK_PAGES_SUCCESS':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .set('pages', action.payload.pages)
        .value()

    default:
      return state
  }
}

export default reducer

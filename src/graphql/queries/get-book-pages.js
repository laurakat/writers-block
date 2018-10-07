export default `query (
  $bookId: String!
) {
  getBookPages(bookId: $bookId) {
    _id
    name
    chapterNumber
    chapterTitle
    text
    image
    sound
    choices {
      nextPage,
      text
    }
  }
}`

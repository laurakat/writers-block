export default `query (
  $id: String!
) {
  getPageById(id: $id) {
    _id
    name
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

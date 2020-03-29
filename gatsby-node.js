exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.startsWith("/404")) {
    page.context.layout = "emptyLayout"
    createPage(page)
  }
}
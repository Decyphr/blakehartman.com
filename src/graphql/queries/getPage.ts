export const GET_PAGE = `
  query getPage($preview: Boolean, $slug: String!) {
    pagesCollection(preview: $preview, where: { slug: $slug }) {
      pages: items {
        slug
        title
      } 
    }
  }
`;

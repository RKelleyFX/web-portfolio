export const getPageIntro = /* GraphQL */ `
  query GetPageIntro($page: String!) {
    getPageIntro(page: $page) {
      id
      page
      body
    }
  }
`
;
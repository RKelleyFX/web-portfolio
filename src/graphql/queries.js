/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      firstName
      lastName
      email
      phone
      message
      contactReason
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        message
        contactReason
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPageIntro = /* GraphQL */ `
  query GetPageIntro($id: ID!) {
    getPageIntro(id: $id) {
      id
      page
      body
      createdAt
      updatedAt
    }
  }
`;
export const listPageIntros = /* GraphQL */ `
  query ListPageIntros(
    $filter: ModelPageIntroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageIntros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        page
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPortfolioPost = /* GraphQL */ `
  query GetPortfolioPost($id: ID!) {
    getPortfolioPost(id: $id) {
      id
      page
      title
      intro
      body
      featured
      keywords
      createdAt
      updatedAt
    }
  }
`;
export const listPortfolioPosts = /* GraphQL */ `
  query ListPortfolioPosts(
    $filter: ModelPortfolioPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolioPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        page
        title
        intro
        body
        featured
        keywords
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

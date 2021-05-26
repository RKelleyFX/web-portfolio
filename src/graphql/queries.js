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
      icon
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
        icon
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
      attachment
      archive
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
        attachment
        archive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurveyOfmParent = /* GraphQL */ `
  query GetSurveyOfmParent($id: ID!) {
    getSurveyOFMParent(id: $id) {
      id
      fName
      lName
      email
      stem
      education
      spouse
      college
      tech
      dream
      dreamAge
      children {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSurveyOfmParents = /* GraphQL */ `
  query ListSurveyOfmParents(
    $filter: ModelSurveyOFMParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyOFMParents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fName
        lName
        email
        stem
        education
        spouse
        college
        tech
        dream
        dreamAge
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSurveyOfmChild = /* GraphQL */ `
  query GetSurveyOfmChild($id: ID!) {
    getSurveyOFMChild(id: $id) {
      id
      parentID
      age
      gender
      activity
      learnAge
      parent {
        id
        fName
        lName
        email
        stem
        education
        spouse
        college
        tech
        dream
        dreamAge
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSurveyOfmChilds = /* GraphQL */ `
  query ListSurveyOfmChilds(
    $filter: ModelSurveyOFMChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurveyOFMChilds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentID
        age
        gender
        activity
        learnAge
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

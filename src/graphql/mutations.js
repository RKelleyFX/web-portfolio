/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createPageIntro = /* GraphQL */ `
  mutation CreatePageIntro(
    $input: CreatePageIntroInput!
    $condition: ModelPageIntroConditionInput
  ) {
    createPageIntro(input: $input, condition: $condition) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const updatePageIntro = /* GraphQL */ `
  mutation UpdatePageIntro(
    $input: UpdatePageIntroInput!
    $condition: ModelPageIntroConditionInput
  ) {
    updatePageIntro(input: $input, condition: $condition) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const deletePageIntro = /* GraphQL */ `
  mutation DeletePageIntro(
    $input: DeletePageIntroInput!
    $condition: ModelPageIntroConditionInput
  ) {
    deletePageIntro(input: $input, condition: $condition) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const createPortfolioPost = /* GraphQL */ `
  mutation CreatePortfolioPost(
    $input: CreatePortfolioPostInput!
    $condition: ModelPortfolioPostConditionInput
  ) {
    createPortfolioPost(input: $input, condition: $condition) {
      id
      page
      title
      intro
      body
      featured
      keywords
      attachment
      createdAt
      updatedAt
    }
  }
`;
export const updatePortfolioPost = /* GraphQL */ `
  mutation UpdatePortfolioPost(
    $input: UpdatePortfolioPostInput!
    $condition: ModelPortfolioPostConditionInput
  ) {
    updatePortfolioPost(input: $input, condition: $condition) {
      id
      page
      title
      intro
      body
      featured
      keywords
      attachment
      createdAt
      updatedAt
    }
  }
`;
export const deletePortfolioPost = /* GraphQL */ `
  mutation DeletePortfolioPost(
    $input: DeletePortfolioPostInput!
    $condition: ModelPortfolioPostConditionInput
  ) {
    deletePortfolioPost(input: $input, condition: $condition) {
      id
      page
      title
      intro
      body
      featured
      keywords
      attachment
      createdAt
      updatedAt
    }
  }
`;

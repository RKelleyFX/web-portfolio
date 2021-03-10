/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePageIntro = /* GraphQL */ `
  subscription OnCreatePageIntro($page: String) {
    onCreatePageIntro(page: $page) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePageIntro = /* GraphQL */ `
  subscription OnUpdatePageIntro($page: String) {
    onUpdatePageIntro(page: $page) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePageIntro = /* GraphQL */ `
  subscription OnDeletePageIntro($page: String) {
    onDeletePageIntro(page: $page) {
      id
      page
      body
      icon
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePortfolioPost = /* GraphQL */ `
  subscription OnCreatePortfolioPost(
    $page: String
    $featured: Boolean
    $keywords: String
  ) {
    onCreatePortfolioPost(
      page: $page
      featured: $featured
      keywords: $keywords
    ) {
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
export const onUpdatePortfolioPost = /* GraphQL */ `
  subscription OnUpdatePortfolioPost(
    $page: String
    $featured: Boolean
    $keywords: String
  ) {
    onUpdatePortfolioPost(
      page: $page
      featured: $featured
      keywords: $keywords
    ) {
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
export const onDeletePortfolioPost = /* GraphQL */ `
  subscription OnDeletePortfolioPost(
    $page: String
    $featured: Boolean
    $keywords: String
  ) {
    onDeletePortfolioPost(
      page: $page
      featured: $featured
      keywords: $keywords
    ) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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

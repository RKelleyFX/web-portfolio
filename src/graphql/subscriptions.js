/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreatePageIntro = /* GraphQL */ `
  subscription OnCreatePageIntro {
    onCreatePageIntro {
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
  subscription OnUpdatePageIntro {
    onUpdatePageIntro {
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
  subscription OnDeletePageIntro {
    onDeletePageIntro {
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
  subscription OnCreatePortfolioPost {
    onCreatePortfolioPost {
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
export const onUpdatePortfolioPost = /* GraphQL */ `
  subscription OnUpdatePortfolioPost {
    onUpdatePortfolioPost {
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
export const onDeletePortfolioPost = /* GraphQL */ `
  subscription OnDeletePortfolioPost {
    onDeletePortfolioPost {
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
export const onCreateSurveyOfmParent = /* GraphQL */ `
  subscription OnCreateSurveyOfmParent {
    onCreateSurveyOFMParent {
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
export const onUpdateSurveyOfmParent = /* GraphQL */ `
  subscription OnUpdateSurveyOfmParent {
    onUpdateSurveyOFMParent {
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
export const onDeleteSurveyOfmParent = /* GraphQL */ `
  subscription OnDeleteSurveyOfmParent {
    onDeleteSurveyOFMParent {
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
export const onCreateSurveyOfmChild = /* GraphQL */ `
  subscription OnCreateSurveyOfmChild {
    onCreateSurveyOFMChild {
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
export const onUpdateSurveyOfmChild = /* GraphQL */ `
  subscription OnUpdateSurveyOfmChild {
    onUpdateSurveyOFMChild {
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
export const onDeleteSurveyOfmChild = /* GraphQL */ `
  subscription OnDeleteSurveyOfmChild {
    onDeleteSurveyOFMChild {
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

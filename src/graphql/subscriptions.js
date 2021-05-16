/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      books {
        items {
          id
          title
          userID
          isbn
          coverURL
          language
          pageCount
          publisher
          publishedDate
          description
          categories
          authors
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      books {
        items {
          id
          title
          userID
          isbn
          coverURL
          language
          pageCount
          publisher
          publishedDate
          description
          categories
          authors
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      books {
        items {
          id
          title
          userID
          isbn
          coverURL
          language
          pageCount
          publisher
          publishedDate
          description
          categories
          authors
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      title
      userID
      isbn
      coverURL
      language
      pageCount
      publisher
      publishedDate
      description
      categories
      authors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      title
      userID
      isbn
      coverURL
      language
      pageCount
      publisher
      publishedDate
      description
      categories
      authors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      title
      userID
      isbn
      coverURL
      language
      pageCount
      publisher
      publishedDate
      description
      categories
      authors
      createdAt
      updatedAt
    }
  }
`;

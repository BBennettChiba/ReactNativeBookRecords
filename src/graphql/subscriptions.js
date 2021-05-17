/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      ownedBooks {
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
      booksToRead {
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
      ownedBooks {
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
      booksToRead {
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
      ownedBooks {
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
      booksToRead {
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
export const onCreateOwnedBook = /* GraphQL */ `
  subscription OnCreateOwnedBook {
    onCreateOwnedBook {
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
export const onUpdateOwnedBook = /* GraphQL */ `
  subscription OnUpdateOwnedBook {
    onUpdateOwnedBook {
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
export const onDeleteOwnedBook = /* GraphQL */ `
  subscription OnDeleteOwnedBook {
    onDeleteOwnedBook {
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
export const onCreateBookToRead = /* GraphQL */ `
  subscription OnCreateBookToRead {
    onCreateBookToRead {
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
export const onUpdateBookToRead = /* GraphQL */ `
  subscription OnUpdateBookToRead {
    onUpdateBookToRead {
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
export const onDeleteBookToRead = /* GraphQL */ `
  subscription OnDeleteBookToRead {
    onDeleteBookToRead {
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

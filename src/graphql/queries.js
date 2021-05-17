/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ownedBooks {
          nextToken
        }
        booksToRead {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOwnedBook = /* GraphQL */ `
  query GetOwnedBook($id: ID!) {
    getOwnedBook(id: $id) {
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
export const listOwnedBooks = /* GraphQL */ `
  query ListOwnedBooks(
    $filter: ModelOwnedBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwnedBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getBookToRead = /* GraphQL */ `
  query GetBookToRead($id: ID!) {
    getBookToRead(id: $id) {
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
export const listBookToReads = /* GraphQL */ `
  query ListBookToReads(
    $filter: ModelBookToReadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookToReads(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;

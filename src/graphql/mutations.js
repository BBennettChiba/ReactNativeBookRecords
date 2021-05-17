/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOwnedBook = /* GraphQL */ `
  mutation CreateOwnedBook(
    $input: CreateOwnedBookInput!
    $condition: ModelOwnedBookConditionInput
  ) {
    createOwnedBook(input: $input, condition: $condition) {
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
export const updateOwnedBook = /* GraphQL */ `
  mutation UpdateOwnedBook(
    $input: UpdateOwnedBookInput!
    $condition: ModelOwnedBookConditionInput
  ) {
    updateOwnedBook(input: $input, condition: $condition) {
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
export const deleteOwnedBook = /* GraphQL */ `
  mutation DeleteOwnedBook(
    $input: DeleteOwnedBookInput!
    $condition: ModelOwnedBookConditionInput
  ) {
    deleteOwnedBook(input: $input, condition: $condition) {
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
export const createBookToRead = /* GraphQL */ `
  mutation CreateBookToRead(
    $input: CreateBookToReadInput!
    $condition: ModelBookToReadConditionInput
  ) {
    createBookToRead(input: $input, condition: $condition) {
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
export const updateBookToRead = /* GraphQL */ `
  mutation UpdateBookToRead(
    $input: UpdateBookToReadInput!
    $condition: ModelBookToReadConditionInput
  ) {
    updateBookToRead(input: $input, condition: $condition) {
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
export const deleteBookToRead = /* GraphQL */ `
  mutation DeleteBookToRead(
    $input: DeleteBookToReadInput!
    $condition: ModelBookToReadConditionInput
  ) {
    deleteBookToRead(input: $input, condition: $condition) {
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

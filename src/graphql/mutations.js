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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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

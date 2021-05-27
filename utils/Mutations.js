import axios from "axios";
import {LOCAL} from "@env"

const local = LOCAL

export async function createUser(id, username) {
  try {
    let fetch = (
      await axios({
        url: local,
        method: "post",
        data: {
          query: createUserQuery,
          variables: { id, name: username },
        },
      })
    ).data.data.createUser;
    return fetch;
  } catch (e) {
    console.log(e);
  }
}

export async function createBookToRead(input) {
  try {
    let fetch = (
      await axios({
        url: local,
        method: "post",
        data: {
          query: createBookToReadQuery,
          variables: { input: input },
        },
      })
    ).data.data.createBookToRead;
    return fetch;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteBookToRead(input) {
  try {
    let fetch = await axios({
      url: local,
      method: "post",
      data: {
        query: deleteBookToReadQuery,
        variables: { input: input },
      },
    });
    return;
  } catch (e) {
    console.log(e);
  }
}

export async function createOwnedBook(input) {
  try {
    let fetch = (await axios({
      url: local,
      method: "post",
      data: {
        query: createOwnedBookQuery,
        variables: {input:input},
      },
    })).data.data.createOwnedBook
    return fetch
  } catch (e) {
    console.log(e);
  }
  return input;
}

export async function deleteOwnedBook(input) {
  try {
    let fetch = await axios({
      url: local,
      method: "post",
      data: {
        query: deleteOwnedBookQuery,
        variables: { input: input },
      },
    });
    return;
  } catch (e) {
    console.log(e);
  }
}

const createUserQuery = `
    mutation createUser($id:String!, $name:String!){
        createUser(input: {id:$id, name:$name}){
            name
            createdAt
            updatedAt
            id
            ownedBooks
            booksToRead
        }
    }
  `;
const createBookToReadQuery = `
    mutation createBookToRead($input: createBookToReadInput!){
        createBookToRead(input: $input){
          id
          title
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

const deleteBookToReadQuery = `
    mutation deleteBookToRead($input: deleteBookToReadInput!){
      deleteBookToRead(input: $input)
    }
  `;
const deleteOwnedBookQuery = `
    mutation deleteOwnedBook($input: deleteOwnedBookInput!){
      deleteOwnedBook(input: $input)
    }
  `;

  const createOwnedBookQuery = `
  mutation createOwnedBook($input: createOwnedBookInput!){
      createOwnedBook(input: $input){
        id
        title
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
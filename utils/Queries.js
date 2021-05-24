import axios from "axios";

export async function getUser(id) {
  try {
    let fetch = (
      await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: getUserQuery(id),
        },
      })
    ).data.data.getUser;
    return fetch;
  } catch (e) {
    console.log(e);
  }
}

const getUserQuery = (id) => `{
    getUser(id:"${id}"){
      name
      ownedBooks{
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
      booksToRead{
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
  }`;

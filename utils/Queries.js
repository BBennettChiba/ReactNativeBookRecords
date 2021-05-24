import axios from "axios";

export async function getUser(id) {
  try {
    let fetch = (
      await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `{
            getUser(id:"c8721468-828a-47a9-a673-137d43cfb062"){
              name
              ownedBooks{
                title
                isbn
                publisher
                categories
                authors
              }
              booksToRead{
                title
              }
            }
          }`,
        },
      })
    ).data.data.getUser
    console.log(fetch);
    return fetch;
  } catch (e) {
    console.log(e);
  }
}

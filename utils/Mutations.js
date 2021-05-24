import axios from "axios";

export async function createUser(id, username) {
  try {
    let fetch = (
      await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: createUserQuery(id, username),
          variables: { id, name: username },
        },
      })
    ).data.data.createUser;
    return fetch;
  } catch (e) {
    console.log(e);
  }
}

const createUserQuery = (id, username) => `
    mutation createUser($id:String!, $name:String!){
        createUser(input: {id:$id, name:$name}){
            name
            createdAt
            updatedAt
            id
        }
    }
  `;

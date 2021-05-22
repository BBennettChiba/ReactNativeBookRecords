import React, { createContext, useState, useContext, useEffect } from "react";
import { getUser } from "../src/graphql/queries";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createUser } from "../src/graphql/mutations";

const UserContext = createContext(null);
const UserContextUpdate = createContext(null);

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
  return useContext(UserContextUpdate);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      let id;
      let username;
      id = await Auth.currentUserInfo();
      username = id.username;
      id = id.id;
      let userData;
      userData = (await API.graphql(graphqlOperation(getUser, { id }))).data.getUser
      if (userData === null) {
        userData = createNewUser(id, username);
      }
      setUser(userData);
    } catch (err) {
      console.log("error fetching books", err);
    }
  }

  async function createNewUser(id, username) {
    console.log("working?");
    let user = (
      await API.graphql(graphqlOperation(createUser, {
        input: { id, name:username },
      }))
    ).data.createUser;
    return user;
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={setUser}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}

import React, { createContext, useState, useContext, useEffect } from "react";
import { getUser } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const UserContext = createContext(null);
const UserContextUpdate = createContext(null);

export function useUser() {
  return useContext(UserContext);
}
export function useUserUpdate() {
    return useContext(UserContextUpdate);
}

export function UserContextProvider({ children }) {
  const me = { name: "Bryson", id: "c83d9cb1-aaf2-4fcd-8dd5-a38aab6ce485" };
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      let userData = await API.graphql(graphqlOperation(getUser, {id:me.id}));
      userData = userData.data.getUser;
      setUser(userData)
    } catch (err) {
      console.log("error fetching books", err);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={setUser} >
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}

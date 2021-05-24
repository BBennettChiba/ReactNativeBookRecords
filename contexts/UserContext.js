import React, { createContext, useState, useContext, useEffect } from "react";
import { getUser } from "../utils/Queries";
import {createUser} from '../utils/Mutations'
import { Auth } from "aws-amplify";

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
      let userData = await getUser(id);
      if (userData === null) {
        userData = (await createUser(id, username));
      }
      setUser(userData);
    } catch (err) {
      console.log("error fetching books", err);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={setUser}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}

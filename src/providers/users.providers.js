import React, { createContext, useState } from "react";

import { filterInterestFromUser, filterUserFromList } from "./users.utils";
import Users from "../contexts/users.json";

export const UsersContext = createContext({
  users: [],
  clearUserFromCart: () => {},
  clearInterestsFromUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(Users);

  const clearUserFromList = (usr) => {
    return setUsers(filterUserFromList(users, usr));
  };
  const clearInterestsFromUser = (usr, interest) => {
    return setUsers(filterInterestFromUser(users, usr, interest));
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        clearUserFromList,
        clearInterestsFromUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

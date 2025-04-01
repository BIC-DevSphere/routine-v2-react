import React, { createContext, useContext, useState } from "react";

const UserGroupContext = createContext();

export const useUserGroup = () => useContext(UserGroupContext);

export const UserGroupProvider = ({ children }) => {
  const [userGroup, setUserGroup] = useState(
    localStorage.getItem("user") || "",
  );
  const handleUserGroup = (group) => {
    localStorage.setItem("user", group);
    setUserGroup(group);
  };
  return (
    <UserGroupContext.Provider
      value={{ userGroup, setUserGroup: handleUserGroup }}
    >
      {children}
    </UserGroupContext.Provider>
  );
};

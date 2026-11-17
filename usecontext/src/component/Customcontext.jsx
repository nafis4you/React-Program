import React, { createContext } from "react";

export const userContext  = createContext();
const Customcontext = ({children}) => {
  
  const users = [
    {
        name: "Nafis",
        role: "Developer"
    },
    {
        name: "Khizer",
        role: "Student"
    }
  ];
  
  return <userContext.Provider value={users}>{children}</userContext.Provider>;
};

export default Customcontext;
import { createContext, useContext, useState } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

interface UserContextInteface {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextInteface>({
  user: {
    id: 0,
    name: "",
    username: "",
    password: "",
  },
  setUser: (user: User) => {},
  isAuthenticated: false,
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: user === null ? false : true,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;

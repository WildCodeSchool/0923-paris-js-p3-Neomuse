import { useMemo, useState, createContext, useContext } from "react";

const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
const useUser = () => useContext(UserContext);
export default useUser;

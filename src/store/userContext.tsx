import React from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  isAuthenticated: boolean;
}

export type AuthContextType = {
  user: IUser | null;
  login: (data: any) => void;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const login = (data: any) => {
    if (data) {
      const objectFromArrayOfObjects = data.reduce((acc: any, obj: any) => {
        acc = { ...acc, ...obj, isAuthenticated: true };
        return acc;
      }, {});

      setUser(objectFromArrayOfObjects);
      localStorage.setItem("user", JSON.stringify(objectFromArrayOfObjects));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

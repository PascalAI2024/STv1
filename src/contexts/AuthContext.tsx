import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  role: 'admin' | 'company';
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Demo mode auto-login
  useEffect(() => {
    const demoLogin = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUser({
        id: 'demo-user',
        name: 'Demo Company',
        role: 'company',
        email: 'demo@example.com'
      });
      setIsAuthenticated(true);
    };

    demoLogin();
  }, []);

  const login = async (email: string, password: string) => {
    // Demo implementation
    setUser({
      id: 'demo-user',
      name: 'Demo Company',
      role: 'company',
      email: email
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
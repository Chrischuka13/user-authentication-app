import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("Auth_user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (err) {
      console.error("Error loading user:", err);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("Auth_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("Auth_user");
      }
    } catch (err) {
      console.error("Error saving user:", err);
    }
  }, [user]);

  const logout = () => {
    setUser(null)
    localStorage.removeItem("Auth_user");
  };

  // Provide headers for authenticated requests
  const getAuthHeaders = () => {
    if (!user?.token) return { "Content-Type": "application/json" };
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    };
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { useState } from 'react';
export const AuthContext = React.createContext([{}, () => {}]);

const AuthContextManager = ({ children }) => {
  const [auth, setAuth] = useState({ auth: null });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextManager;

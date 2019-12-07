import React, { useState } from "react";
export const FirebaseContext = React.createContext([{}, () => {}]);

const UserContextManager = ({ children }) => {
  const [firebase, setFirebase] = useState({ firebase: null });
  return (
    <FirebaseContext.Provider value={[firebase, setFirebase]}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default UserContextManager;

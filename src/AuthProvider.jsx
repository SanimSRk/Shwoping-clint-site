import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './Firebase/Firebase';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const creatAccount = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const UpdateProfiles = (fullName, photo) => {
    return updateProfile(auth?.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };

  const singinUsers = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setUser(null);
    setLoding(false);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoding(false);
      } else {
        setLoding(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const info = { creatAccount, singinUsers, logOutUser, user, UpdateProfiles };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

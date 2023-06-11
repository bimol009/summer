

import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";



import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
// import { axios } from 'axios';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(null);

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const showEmailVerification = (user) => {
    setLoading(true);
    return sendEmailVerification(user);
  };

  const googleSignEmailPass = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubProviderEmailPass = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const forgotPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutEmail = () => {
    return signOut(auth);
  };

  const createdProfile = (name, photo) => {
    setReload(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   observe user state

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })

          .then((data) => {
        
            localStorage.setItem('access-token',data.data.token);
            setLoading(false);
          });
      }
      else{
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });
    // stop unmount observe
    return () => {
      return unsubsCribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserEmailPass,
    showEmailVerification,
    forgotPass,
    signIn,
    logOutEmail,
    googleSignEmailPass,
    gitHubProviderEmailPass,
    createdProfile,
    setReload,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

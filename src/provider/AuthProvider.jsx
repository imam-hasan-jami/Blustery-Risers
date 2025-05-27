import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
      return signOut(auth);
    };

    //fetch user data from server
    const fetchUserData = (email) => {
      fetch(`http://localhost/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

        if (currentUser?.email) {
          fetchUserData(currentUser.email);
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logOut,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
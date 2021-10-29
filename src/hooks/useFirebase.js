import { useState, useEffect } from 'react';
import initializeAuthenticationFirebase from './../components/Firebase/firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  
} from "firebase/auth";
initializeAuthenticationFirebase();

const auth = getAuth();

const useFireBase = () => {
    const [user, setUser] = useState({});
 
    const [isLoading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;

    }, []);
    const logout = () => {

        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }
    return {
        user,
        signInUsingGoogle,
        logout,
        isLoading,

    }
};

export default useFireBase;
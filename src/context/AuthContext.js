import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	});
	return (
		<AuthContext.Provider value={{ signUp, login, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}

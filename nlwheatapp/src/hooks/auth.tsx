import React, { createContext, useContext } from 'react'

type User = {
  id: string,
  avatar_url: string,
  name: string,
  login: string
}

type AuthContextData ={
  user: User | null,
  isSigninIng: boolean,
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }) {

}
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

type AuthContextData = {
  user: User | null;
  signinUrl: string;
  SignOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);


  const signinUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=5c104d007f315390bc7f`;

  async function signin(githubCode: string) {
    const response = await api.post<AuthResponse>('/authenticate', { 
      code: githubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@doWhile:token', token);
    setUser(user);
  }


  async function SignOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@doWhile:token');
     
    if (token ){
      api.defaults.headers.common.authorization=`Bearer ${token}`
      api.get<User>('/profile').then(response => {
        setUser(response.data);
      });
    }
  }, [])

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, '', urlWithoutCode);
      signin(githubCode);
    }
  }, [])
  
  
  return (
    <AuthContext.Provider value={{ signinUrl, user, SignOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
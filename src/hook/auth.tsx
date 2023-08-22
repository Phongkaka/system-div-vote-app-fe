import { ReactNode, createContext, useContext } from 'react'
import { Flowise } from '~/models/auth'
import useLocalStorageState from './useLocalStorageState'

interface AuthContextType {
  user?: Flowise.IUser
  signin?: (user: Flowise.IUser) => void
  signout?: () => void
}

const AuthContext = createContext<AuthContextType>({})

const defaultValue = {
  data: { id: 0, name: '', email: '' },
  access_token: ''
}

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useLocalStorageState<Flowise.IUser>('access_token', defaultValue)

  const signin = (newUser: Flowise.IUser): void => {
    setUser(newUser)
  }

  const signout = (): void => {
    setUser(defaultValue)
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth(): AuthContextType {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }

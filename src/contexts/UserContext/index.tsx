import React, { useReducer, useContext } from 'react'
import { act } from 'react-dom/test-utils'

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}
type Action = { type: ActionTypes; payload?: unknown }
type Props = React.PropsWithChildren<{}>
type State = {
  isAuthenticated: boolean
}
const initialState = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      console.log("login")
      return { ...state, isAuthenticated: true }
    default:
      return state
  }
}
const UserContext = React.createContext(initialState)
const useUserContext = () => useContext(UserContext)

function UserProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  function login() {
    dispatch({ type: ActionTypes.LOGIN })
  }
  function logout() {
    dispatch({ type: ActionTypes.LOGOUT })
  }
  const value = {
    ...state,
    login,
    logout,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { useUserContext, UserProvider }

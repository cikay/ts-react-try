import React from 'react'
import Login from './components/Login'
import { UserProvider } from './contexts/UserContext'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  )
}

export default App

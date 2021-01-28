import { createContext, useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../navbar'
import { Flex } from '@fluentui/react-northstar'

import { LoginPage } from '../../pages/LoginPage'
import { HomePage } from '../../pages/HomePage'

import { authReducer } from './authReducer'

export const UserContext = createContext()

function App() {
  const [selfState, dispatch] = useReducer(authReducer, {
    auth: false,
    user: null
  })


  return (
    <UserContext.Provider value={{ selfState, dispatch }}>
      <Router className="App">
        <Flex styles={{ minHeight: '100vh', flexDirection: 'column' }}>
          <Navbar></Navbar>
          <Switch>
            <Route path={`/login`}>
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Flex>
      </Router>
    </UserContext.Provider>
  )
}

export default App;

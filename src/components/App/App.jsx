import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../navbar'
import { Flex } from '@fluentui/react-northstar'

import { LoginPage } from '../../pages/LoginPage'
import { HomePage } from '../../pages/HomePage'


function App() {


  return (
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
  )
}

export default App;

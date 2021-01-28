import { createContext, useReducer, useState, useEffect } from 'react'
import { getCategories } from '../../data/api'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../navbar'
import { Flex } from '@fluentui/react-northstar'

import { LoginPage } from '../../pages/LoginPage'
import { CreateArticlePage } from '../../pages/CreateArticle'
import { EditArticlePage } from '../../pages/EditArticle'
import { HomePage } from '../../pages/HomePage'

import { authReducer } from './authReducer'
import { getArticles } from '../../data/api'

export const UserContext = createContext()

function App() {
  const [selfState, dispatch] = useReducer(authReducer, {
    auth: false,
    user: null
  })

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories((data) => {
      setCategories(data)
    })
  }, [])



  const [listArticles, setListArticles] = useState([])


  useEffect(() => {
    getArticles((articles) => {
      setListArticles(articles)
    })
  }, [])

  return (
    <UserContext.Provider value={{ selfState, dispatch }}>
      <Router className="App">
        <Flex styles={{ minHeight: '100vh', flexDirection: 'column' }}>
          <Navbar></Navbar>
          <Switch>
            <Route path={`/login`}>
              <LoginPage />
            </Route>

            <Route path={`/articles/new`}>
              <CreateArticlePage categories={categories} setListArticles={setListArticles} />
            </Route>

            <Route path={`/articles/edit/:id`}>
              <EditArticlePage categories={categories} setListArticles={setListArticles} />
            </Route>

            <Route path="/">
              <HomePage categories={categories} listArticles={listArticles} />
            </Route>
          </Switch>
        </Flex>
      </Router>
    </UserContext.Provider>
  )
}

export default App;

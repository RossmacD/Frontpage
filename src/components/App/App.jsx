import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from '../navbar'
import Filters from '../filtersform'
import ArticleList from '../articleslist'
import { getCategories } from '../../data/api'
import { Flex } from '@fluentui/react-northstar'

import { LoginPage } from '../../pages/LoginPage'


function App() {
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ categories: [] })
  useEffect(() => {
    getCategories((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Flex styles={{ minHeight: '100vh', flexDirection: 'column' }}>
          <Navbar></Navbar>
          <Switch>
            <Route path={`/login`}>
              <LoginPage />
            </Route>
            <Route path="/">
              <Filters categories={categories} setFilters={setFilters} />
              <ArticleList filters={filters}></ArticleList>
            </Route>
          </Switch>
        </Flex>
      </Router>
    </div >
  )
}

export default App;

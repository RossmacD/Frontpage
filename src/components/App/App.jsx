import { useState, useEffect } from 'react'
import Navbar from '../navbar'
import Filters from '../filtersform'
import ArticleList from '../articleslist'
import { getCategories } from '../../data/api'
import { Flex } from '@fluentui/react-northstar'

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <div className="App">
      <Flex styles={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Navbar></Navbar>
        <Filters categories={categories} />
        <ArticleList></ArticleList>
      </Flex>
    </div>)
}

export default App;

import { useState, useEffect } from 'react'
import Navbar from '../navbar'
import Filters from '../filtersform'
import ArticleList from '../articleslist'
import { API_URL } from '../../config'
import { Flex } from '@fluentui/react-northstar'

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setCategories(data)
      })
      .catch((err) => console.error(err))
  }, [])



  return (
    <div className="App">
      <Flex styles={{ height: '100vh', width: '100vw', flexDirection: 'column' }}>
        <Navbar></Navbar>
        <Filters categories={categories} />
        <ArticleList></ArticleList>
      </Flex>
    </div>)
}

export default App;

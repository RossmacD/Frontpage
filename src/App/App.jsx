import './App.css';
import { Component } from 'react';
import Navbar from '../components/navbar'
import Filters from '../components/filtersform'
import ArticleList from '../components/articleslist'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Filters />
        <ArticleList></ArticleList>
      </div>)
  }
}

export default App;

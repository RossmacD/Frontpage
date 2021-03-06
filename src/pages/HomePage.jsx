import { useState, useEffect } from 'react'

import Filters from '../components/filtersform'
import ArticleList from '../components/articleslist'

export const HomePage = ({ categories, listArticles, setListArticles }) => {

    const [filters, setFilters] = useState({ categories: [], filters: 100 })




    return (
        <div>
            <Filters categories={categories} setFilters={setFilters} filters={filters} />
            <ArticleList filters={filters} listArticles={listArticles} setListArticles={setListArticles}></ArticleList>
        </div>
    )
}
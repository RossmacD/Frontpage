import { useState, useEffect } from 'react'

import Filters from '../components/filtersform'
import ArticleList from '../components/articleslist'
import { getCategories } from '../data/api'


export const HomePage = () => {
    const [categories, setCategories] = useState([])
    const [filters, setFilters] = useState({ categories: [], filters: 100 })
    useEffect(() => {
        getCategories((data) => {
            setCategories(data)
        })
    }, [])



    return (
        <div>
            <Filters categories={categories} setFilters={setFilters} filters={filters} />
            <ArticleList filters={filters}></ArticleList>
        </div>
    )
}
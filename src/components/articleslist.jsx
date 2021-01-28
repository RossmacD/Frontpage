import { useState, useEffect, useContext } from 'react'
import { getArticles } from '../data/api'
import { Grid, Card, Text, Flex, } from '@fluentui/react-northstar'
import { UserContext } from './App/App'
import { Link } from 'react-router-dom'
const ArticleList = ({ filters, listArticles }) => {
    const { selfState: { auth, user }, } = useContext(UserContext)


    return (
        <Flex column gap="gap.medium">
            {listArticles.filter(
                (article) => {
                    const hasCat = filters.categories.length > 0
                    const hasAuth = filters.author
                    let result = true;
                    if ((hasCat && !filters.categories.includes(article.category_id)) || (hasAuth && !article.user.name.toLowerCase().includes(filters.author.toLowerCase()))) {
                        result = false
                    }
                    return result
                }
            ).slice(0, filters.pages).map((article) => (
                <Card fluid>
                    <Card.Header>
                        <Text content={article.title} weight="bold" />
                        <Text content={article.user.name} temporary />
                        {auth && article.user.id === user.id ? (<Link to={'/articles/edit/' + article.id}>Edit</Link>) : ''}
                    </Card.Header>
                    <Card.Body>
                        <Flex column gap="gap.small">
                            <Text>{article.body}</Text>
                            <Text>{article.created_at}</Text>
                        </Flex>
                    </Card.Body>
                </Card>
            ))}
        </Flex>
    )
}

export default ArticleList;
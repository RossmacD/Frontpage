import { useContext, useEffect, useState } from 'react'
import { Grid, Card, Text, Flex, List, Button, TextArea } from '@fluentui/react-northstar'
import { UserContext } from '../components/App/App'
import { getArticle } from '../data/api'
import { Link, useParams } from 'react-router-dom'
export const ViewArticlePage = ({ categories, setListArticles }) => {
    const { selfState: { auth, user }, } = useContext(UserContext)
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    useEffect(() => {
        if (id) {
            getArticle(id, (response) => {
                console.log('Response', response)
                setArticle(response)
            })
        }
    }, [id])


    return (
        <Flex styles={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            {article ? (
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
                        <Flex column gap="gap.small">
                            <Text weight={'bold'}>Comments</Text>
                            <List items={article.comments.map((comment) => ({
                                key: comment.id,
                                content: comment.body,
                                contentMedia: auth && comment.user_id === user.id ? (<Button>Edit</Button>) : comment.created_at
                            }))}></List>
                            <TextArea fluid placeholder={auth ? 'Comment' : 'You must be logged in to comment'}></TextArea>
                            <Button disabled={!auth}>Add Comment</Button>

                        </Flex>
                    </Card.Body>
                </Card>
            ) : (<p>Loading ......</p>)
            }
        </Flex >)
}
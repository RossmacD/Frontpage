import { useContext, useEffect, useState } from 'react'
import { Grid, Card, Text, Flex, List, Button, TextArea } from '@fluentui/react-northstar'
import { UserContext } from '../components/App/App'
import { getArticle, createComment } from '../data/api'
import { Link, useParams } from 'react-router-dom'
import { Comment } from '../components/comment'


export const ViewArticlePage = ({ categories, setListArticles }) => {
    const { selfState: { auth, user }, } = useContext(UserContext)
    const { id } = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
        if (id) {
            getArticle(id, (response) => {
                setArticle(response)
            })
        }
    }, [id])


    const [comment, setComment] = useState('')

    const setCommentHandler = (e) => {
        setComment(e.target.value)
    }
    const submitComment = () => {
        createComment({
            body: comment,
            article_id: id
        }, (response) => {
            setArticle(currentArticle => ({ ...currentArticle, comments: [...currentArticle.comments, response] }))
        })
    }

    // items={article.comments.map((comment) => ({
    //     key: comment.id,
    //     content: comment.body,
    //     contentMedia: auth && comment.user_id === user.id ? (<><Button>Edit</Button> <Button>Delete</Button></>) : comment.created_at
    // }))}
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
                            <List >
                                {article.comments.map((comment) => (<Comment key={comment.id} comment={comment} auth={auth} user={user} />))}
                            </List>
                            <TextArea
                                fluid
                                placeholder={auth ? 'Comment' : 'You must be logged in to comment'}
                                name='comment'
                                onChange={setCommentHandler}
                            ></TextArea>
                            <Button disabled={!auth} onClick={submitComment}>Add Comment</Button>
                        </Flex>
                    </Card.Body>
                </Card>
            ) : (<p>Loading ......</p>)
            }
        </Flex >)
}
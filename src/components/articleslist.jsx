import { useState, useEffect } from 'react'
import { getArticles } from '../data/api'
import { Grid, Card, Text, Flex } from '@fluentui/react-northstar'


// const listItems = [
//     {
//         key: 'irvin1g',
//         header: 'Irving Kuhic',
//         headerMedia: '7:26:56 AM',
//         content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
//     }, {
//         key: 'ir2ving',
//         header: 'Irving Kuhic',
//         headerMedia: '7:26:56 AM',
//         content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
//     }, {
//         key: 'irv3ing',
//         header: 'Irving Kuhic',
//         headerMedia: '7:26:56 AM',
//         content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
//     }, {
//         key: 'irv4ing',
//         header: 'Irving Kuhic',
//         headerMedia: '7:26:56 AM',
//         content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
//     }
// ]
const ArticleList = ({ filters }) => {
    const [listArticles, setListArticles] = useState([])

    // const mapArticlesToList = (data) => data.map(({ id, title, body, created_at }) => ({
    //     key: id,
    //     header: title,
    //     headerMedia: created_at,
    //     content: body
    // }))


    useEffect(() => {
        getArticles((articles) => {
            // console.log('articles', mapArticlesToList(articles))
            // setListArticles(mapArticlesToList(articles))
            setListArticles(articles)
        })
    }, [])


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
            ).map((article) => (
                <Card fluid>
                    <Card.Header>
                        <Text content={article.title} weight="bold" />
                        <Text content={article.user.name} temporary />
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
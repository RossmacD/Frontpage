import { Flex } from '@fluentui/react-northstar'
import { EditArticleForm } from '../components/articles/editArticleForm'

export const EditArticlePage = ({ categories, setListArticles }) => (
    <Flex styles={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <EditArticleForm categories={categories} setListArticles={setListArticles} />
    </Flex>)
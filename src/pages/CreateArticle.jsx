import { Flex } from '@fluentui/react-northstar'
import { CreateArticleForm } from '../components/articles/createArticleForm'

export const CreateArticlePage = ({ categories, setListArticles }) => (
    <Flex styles={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <CreateArticleForm categories={categories} setListArticles={setListArticles} />
    </Flex>)
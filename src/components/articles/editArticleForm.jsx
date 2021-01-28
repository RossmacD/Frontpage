import { useRef, useContext, useState, useEffect } from 'react'
import { UserContext } from '../App/App'
import { Form, TextArea } from '@fluentui/react-northstar'
import { createArticle, getArticle } from '../../data/api'
import { useHistory } from "react-router-dom";
import { camel2Sentence } from '../../utils/capitalise'
import { useParams } from 'react-router-dom'


export const EditArticleForm = ({ categories, setListArticles }) => {
    // Form Validation
    const titleInput = useRef(null)
    const boieInput = useRef(null)
    const [body, setBodyInput] = useState('')
    const [categorySelected, setCategorySelected] = useState(null)

    const { selfState: { auth, user }, } = useContext(UserContext)
    const { id } = useParams()
    const [title, setTitle] = useState(null)
    useEffect(() => {
        setTitle(titleInput.current?.value)
    }, [titleInput.current?.value])

    useEffect(() => {
        getArticle(id, (response) => {
            // setArticle(response)
            setBodyInput(response.body)
            setCategorySelected(response.category_id)
            setTitle(response.title)
        })
    }, [])



    const history = useHistory()

    const setBody = (e) => {
        setBodyInput(e.target.value)
    }



    const validateTitle = (email) => true
    const validateBody = (password) => true

    const handleCreate = () => {
        const title = titleInput.current.value;
        console.log('body: ', body)
        if (auth && validateTitle(title) && validateBody(body)) {
            createArticle({
                title,
                body,
                category_id: categorySelected
            },
                (response) => {
                    console.log(response, user, categories)
                    // Attach new Article with self as user and category - found by id
                    setListArticles((currentArticles) => [...currentArticles, { ...response, user, category: categories.find((category) => category.id === response.category_id) }])
                    history.push('/')
                },
                (err) => { console.error(err) }
            )
        }
    }


    const onCategoryChange = (category_id) => {
        console.log("He do", category_id)
        setCategorySelected(category_id)
    }
    const generateRadioButtons = (items) => {
        const radioButtons = [];
        for (const item of items) {
            // console.log(item)
            radioButtons.push({
                name: 'category',
                key: item.id,
                label: camel2Sentence(item.title),
                value: item.title,
                onClick: () => onCategoryChange(item.id)
            })
        }
        return radioButtons
    }





    return (
        <Form onSubmit={handleCreate} styles={{ justifyContent: 'start', width: 'auto', margin: '1rem 2rem' }}>
            <Form.Input type='title' label='Title' name='title' ref={titleInput} value={title}></Form.Input>
            <TextArea type='body' label='Body' resize='both' name='body' onChange={setBody} ref={boieInput} value={body}></TextArea>
            <Form.RadioGroup label="Categories" vertical items={generateRadioButtons(categories)} />
            <Form.Button content="Submit" loading={false} disabled={false} fluid primary />
        </Form>
    )
}

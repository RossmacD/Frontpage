import { useRef } from 'react'
import { Accordion, Card, Form } from '@fluentui/react-northstar'
import { camel2Sentence } from '../utils/capitalise'



const Filters = ({ categories, setFilters, filters }) => {

    const onCategoryChange = (e) => {
        setFilters((currentFitlers) => ({ ...currentFitlers, categories: [e] }))
    }

    const onAuthorChange = (e) => {
        setFilters((currentFitlers) => ({ ...currentFitlers, author: e.target.value }))
    }
    const onPageChange = (e) => {
        setFilters((currentFitlers) => ({ ...currentFitlers, pages: e.target.value }))
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





    const panels = [
        {
            key: 1,
            title: 'Filters',
            content: (
                <Card aria-roledescription="Filter Form" fluid selected>
                    <Form >
                        <Form.RadioGroup label="Categories" vertical items={generateRadioButtons(categories)} />
                        <Form.Input label="Author" type='text' onChange={onAuthorChange} />
                        <Form.Slider label={"Articles/Page: " + filters.pages} name="articles_num" onChange={onPageChange} />
                    </Form>
                </Card>),
        },
    ]

    return (
        <Accordion panels={panels} />
    )
}

export default Filters;
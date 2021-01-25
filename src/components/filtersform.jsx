import { Accordion, Card, Form } from '@fluentui/react-northstar'
import { camel2Sentence } from '../utils/capitalise'



const Filters = ({ categories }) => {
    const generateRadioButtons = (items) => {
        const radioButtons = [];
        for (const item of items) {
            // console.log(item)
            radioButtons.push({
                name: 'category',
                key: item.id,
                label: camel2Sentence(item.title),
                value: item.title,
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
                    <Form>
                        <Form.RadioGroup label="Categories" vertical items={generateRadioButtons(categories)} />
                        <Form.Dropdown label="Author" items={['prague', 'new york']} />
                        <Form.Slider label="Articles/Page" name="articles_num" />
                    </Form>
                </Card>),
        },
    ]

    return (
        <Accordion panels={panels} />
    )
}

export default Filters;
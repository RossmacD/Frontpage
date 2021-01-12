import { Component } from 'react'

import { Accordion, Card, Flex, Text, Form } from '@fluentui/react-northstar'
import { camel2Sentence } from '../utils/capitalise'


const generateRadioButtons = (items) => {
    const radioButtons = [];
    for (const item of items) {
        radioButtons.push({
            name: 'category',
            key: item,
            label: camel2Sentence(item),
            value: item,
        })
    }
    return radioButtons
}




const panels = [
    {
        key: 'p',
        title: 'Filters',
        content: (
            <Card aria-roledescription="Filter Form" fluid selected>
                {/*<Card.Header fitted>
                    <Flex gap="gap.small">
                        <Flex column>
                            <Text content="Title goes here" weight="bold" />
                        </Flex>
                    </Flex>
                </Card.Header>*/}
                <Form>
                    <Form.RadioGroup label="Categories" vertical items={generateRadioButtons(['swimming', 'kayaking', 'running', 'cycling', 'walking', 'karate'])} />
                    <Form.Dropdown label="Author" items={['prague', 'new york']} />
                    <Form.Slider label="Articles/Page" name="articles_num" />
                </Form>
            </Card>),
    },
]
class Filters extends Component {
    render() {
        return (
            <Accordion panels={panels} />
        )
    }
}

export default Filters;
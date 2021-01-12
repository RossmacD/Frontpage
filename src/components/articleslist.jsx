import { Component } from 'react'

import { List } from '@fluentui/react-northstar'


const listItems = [
    {
        key: 'irving',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'irving',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'irving',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'irving',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }
]
class ArticleList extends Component {
    render() {
        return (
            <List items={listItems} />
        )
    }
}

export default ArticleList;
import { Component } from 'react'

import { List } from '@fluentui/react-northstar'


const listItems = [
    {
        key: 'irvin1g',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'ir2ving',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'irv3ing',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }, {
        key: 'irv4ing',
        header: 'Irving Kuhic',
        headerMedia: '7:26:56 AM',
        content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    }
]
const ArticleList = () => {
    return (
        <List items={listItems} />
    )
}

export default ArticleList;
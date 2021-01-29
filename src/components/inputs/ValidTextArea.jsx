import { TextArea } from '@fluentui/react-northstar'
import { useRef, useContext, useState, useEffect } from 'react'


export const ValidTextArea = ({ ...props }) => {
    const boieInput = useRef(null)
    const [body, setBodyInput] = useState('')


    const setBody = (e) => {
        setBodyInput(e.target.value)
    }



    return (<TextArea label='Body' resize='both' name='body' onChange={setBody} ref={boieInput}></TextArea>)
}
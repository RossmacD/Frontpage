import { useRef, useContext } from 'react'
import { LOGIN } from './App/authReducer'
import { UserContext } from './App/App'
import { Form } from '@fluentui/react-northstar'
import { attemptLogin } from '../data/api'
import { useHistory } from "react-router-dom";


export const LoginForm = () => {
    // Form Validation
    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    const { dispatch } = useContext(UserContext)
    const history = useHistory()


    const validateEmail = (email) => true
    const validatePassword = (password) => true

    const handleLogin = () => {
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        if (validateEmail(email) && validatePassword(password)) {
            attemptLogin({
                email,
                password
            },
                (response) => {
                    //Add better auth code
                    dispatch({
                        type: LOGIN,
                        payload: response.data
                    })
                    history.push('/')
                },
                (err) => { console.error(err) }
            )
        }
    }
    return (
        <Form onSubmit={handleLogin} styles={{ justifyContent: 'start', width: 'auto', margin: '1rem 2rem' }}>
            <Form.Input type='email' label='Email' name='email' ref={emailInput}></Form.Input>
            <Form.Input type='password' label='Password' name='password' ref={passwordInput}></Form.Input>
            <Form.Button content="Submit" loading={false} disabled={false} fluid primary />
        </Form>
    )
}

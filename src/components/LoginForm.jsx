import { ReactElement, useState, useRef } from 'react'
import { Form } from '@fluentui/react-northstar'
import { attemptLogin } from '../data/api'
export const LoginForm = () => {
    // Form Validation
    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    // Submission
    // const [{ fetching }, login] = useLoginMutation()

    // const attemptLogin = (data) => {
    //     // Get email and password from data
    //     const { email, password } = data;
    //     //Try to login
    //     if (email && password) {
    //         login({ email, password })
    //             .then((all) => {
    //                 // If theres a server error show in UI
    //                 if (all.error) return setError("password", {
    //                     type: "server",
    //                     message: "Incorrect Password/Email"
    //                 })
    //                 // Process successful login
    //                 // console.log(all)
    //             })
    //             .catch((err) => console.log(err))
    //     }
    // }
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
                    console.log(response)
                    //Add better auth code
                    localStorage.setItem(response.data.api_token)
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

import { ReactElement, useState } from 'react'
import { Form } from '@fluentui/react-northstar'
import { attemptLogin } from '../data/api'
export const LoginForm = () => {
    // Form Validation
    // const { register, handleSubmit, setError, errors, formState } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });

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
    const handleLogin = () => attemptLogin({})
    // onSubmit={handleSubmit(attemptLogin)}
    return (
        <Form onSubmit={handleLogin} styles={{ justifyContent: 'start', width: 'auto', margin: '1rem 2rem' }}>
            <Form.Input type='email' label='Email' name='email' ></Form.Input>
            <Form.Input type='password' label='Password' name='password' ></Form.Input>
            <Form.Button content="Submit" loading={false} disabled={false} fluid primary />
        </Form>
    )
}

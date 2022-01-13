import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { AiOutlineUser } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'
import Constants from '../../constants.json'
import './MainPageSignin.css'

function MainPageDetails() {
    const navigate = useNavigate()
    const username = 'Rohith'
    const password = 'admin'
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const signInFormHandler = (event) => {
        event.preventDefault()
        if (username === inputUsername && password === inputPassword) {
            return (
                navigate('/newsinfo')
            )
        }
        else if (inputUsername === '' || inputPassword === '') {
            alert('Please enter the details')
        }
        else if (inputUsername === localStorage.username && inputPassword === localStorage.password) {
            return (
                navigate('/newsinfo')
            )
        }
        else {
            alert('Wrong Password or Username')
        }
    }
    return (
            <Container fluid>
                <Row>
                    <Col className='main-right-side'>
                        <h1 className='main-right-heading'>Sign in</h1>
                        <div className='main-right-sub'>Please log in into your account</div>
                        <form onSubmit={signInFormHandler}>
                            <Form.Group>
                                <Form.Label className='login-items'><AiOutlineUser className='icons' />{Constants[0].firstName}</Form.Label>
                                <Form.Control className='form-input' value={inputUsername} type='text' placeholder={Constants[0].placeholderU} onChange={(event) => setInputUsername(event.target.value)}></Form.Control>
                                <Form.Label className='login-items'><BsKey className='icons' />{Constants[0].lastName}</Form.Label>
                                <Form.Control className='form-input' value={inputPassword} type='password' placeholder={Constants[0].placeholderP} onChange={(event) => setInputPassword(event.target.value)}></Form.Control>
                                <button type='submit' className='btn mb-3 sign-in-button'>Sign in</button>
                            </Form.Group>
                        </form>
                    </Col>
                </Row>
            </Container>
    )
}

export default MainPageDetails

import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineMessage } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephonePlus, BsKey, BsWindowSidebar } from 'react-icons/bs'
import './RegisterPage.css'
function RegisterPage() {
    const initialValues = { firstName: '', lastName: '', username: '', email: '', phoneNumber: '', password: '', confirmPassword: '' }
    const [formData, setFormData] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        setIsSubmit(true)
    }
    const registerFormHandler = (event) => {
        event.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmit(true)
    }

    const dataEntry = () => {
        localStorage.setItem("username", formData.username)
        localStorage.setItem("password", formData.password)
        alert('Registration Successful')
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dataEntry()
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if (!values.firstName) {
            errors.firstName = 'First name is required'
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required'
        }
        if (!values.username) {
            errors.username = 'Username is required'
        }
        if (!values.email) {
            errors.email = 'Email is required'
        }
        else if (!regex.test(values.email)) {
            errors.email = 'Please enter a valid email'
        }
        if (values.phoneNumber < 10) {
            errors.phoneNumber = 'Please enter a valid Phone number'
        }
        if (!values.password) {
            errors.password = 'Password is required'
        }
        else if (values.password.length < 4 && values.password.length > 11) {
            errors.password = 'Password lenght should be betweee 4 and 10'
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Password is required'
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Password does not match'
        }
        return errors

    }

    const resetFormHandler = () => {
        window.location.href = '/registerpage'
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <form onSubmit={registerFormHandler}>
                            <Form.Group className='register-form'>
                                <Form.Label className='register-names'><MdOutlineMessage className='register-icons' />First Name</Form.Label>
                                <Form.Control type='text' name='firstName' placeholder='Enter your first name' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.firstName}</div>
                                <Form.Label className='register-names'><MdOutlineMessage className='register-icons' />Last Name</Form.Label>
                                <Form.Control type='text' name='lastName' placeholder='Enter your last name' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.lastName}</div>
                                <Form.Label className='register-names'><AiOutlineUser className='register-icons' />Username</Form.Label>
                                <Form.Control type='text' name='username' placeholder='Enter your username' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.username}</div>
                                <Form.Label className='register-names'><HiOutlineMail className='register-icons' />Email</Form.Label>
                                <Form.Control type='text' name='email' placeholder='Enter your email' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.email}</div>
                                <Form.Label className='register-names'><BsTelephonePlus className='register-icons' />Phone Number</Form.Label>
                                <Form.Control type='number' name='phoneNumber' placeholder='Enter your phone number' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.phoneNumber}</div>
                                <Form.Label className='register-names'><BsKey className='register-icons' />Password</Form.Label>
                                <Form.Control type='password' name='password' placeholder='Enter your password' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.password}</div>
                                <Form.Label className='register-names'><BsKey className='register-icons' />Confirm Password</Form.Label>
                                <Form.Control type='password' name='confirmPassword' placeholder='Enter your password again' onChange={handleChange}></Form.Control>
                                <div className='error-messages'>{formErrors.confirmPassword}</div>
                                <button type='submit' className='register-button'>Register</button>
                            </Form.Group>
                        </form>
                        <Link to='/'>
                            <button type='submit' className='register-go-back-button'>Go Back</button>
                        </Link>
                        <button className='reset-form-button' onClick={resetFormHandler}>Reset Form</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegisterPage

import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import './MainPageRegister.css'

function MainPageRegister() {
    return (
        <div>
            <Container fluid style={{'padding':'0px'}}>
                <Row>
                    <Col className='main-left-side'>
                        <h1 className='main-left-heading'>Welcome Back!</h1>
                        <div className='main-left-sub'>To keep connected with us please login with your personal info</div>
                        <Link to='/registerpage'>
                            <button className='btn mb-3 sign-up-button'>Sign Up</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPageRegister

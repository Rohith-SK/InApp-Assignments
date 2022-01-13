import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainPageRegister from './Main Page Register/MainPageRegister'
import MainPageSignin from './Main Page Signin/MainPageSignin'


function MainPage() {
    return (
        <div>
            <Container fluid style={{'margin':'0px'},{'padding':'0px'},{'overflowX':'hidden'}}>
                <Row >
                    <Col>
                        <MainPageRegister />
                    </Col>
                    <Col>
                        <MainPageSignin />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage

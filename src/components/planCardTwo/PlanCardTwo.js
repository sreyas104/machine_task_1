import React from 'react'
import './planCardTwo.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckDouble, faCloud, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
function PlanCardTwo(props) {


    let {
        subTitle,
        title,
        description,
        buttonTxt,
        userYouGet,
        storageYouGet,
        supportYouGet,
        content,
        color
    } = props.data


    return (
        <Card className='p-4 mt-5 cards'>
            <Container >
                <Row>
                    <Col md={7}>
                        <div className='FreeHead ' style={{ backgroundColor: `${color}` }}>{subTitle}</div>
                        <h1 style={{ fontWeight: 500 }}>{title}</h1>
                        <p>{description}</p>
                        <button className='GetButton' style={{ backgroundColor: `${color}` }} > {buttonTxt}<FontAwesomeIcon icon={faArrowRight} /></button>
                    </Col>
                    <Col md={5}>
                        <h6>What you ll get:</h6>
                        <div className="description">
                            <p>
                                <FontAwesomeIcon icon={faUser} />  {userYouGet}
                            </p>
                            {storageYouGet ? <p><FontAwesomeIcon icon={faCloud} />  {storageYouGet} </p> : null}
                            {storageYouGet ? <p><FontAwesomeIcon icon={faEnvelope} /> {supportYouGet} </p> : null}
                            <p>
                                <FontAwesomeIcon icon={faCheckDouble} /> {content}   </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default PlanCardTwo;
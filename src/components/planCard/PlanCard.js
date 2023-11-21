import React from 'react'
import './planCard.css'
import { Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCloud, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

function PlanCard() {
    return (
        <Container>
            <Card className='col-md-' style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Card.Body>
                    <Card.Title>
                        <h2>
                            Basic
                        </h2>
                    </Card.Title>
                    <p className="strikedPrice">$ 89.9/mo</p>
                    <Card.Subtitle>
                        <h4>
                            $ 9.99/mo
                        </h4>

                    </Card.Subtitle>
                    <button className='buttonGet'>Get Started  <FontAwesomeIcon icon={faArrowRight} /></button>
                    <hr />
                    <Card.Text className='p-0 m-1'>
                        <p style={{ fontSize: "13px" }}>
                            What you'll get:
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <div className="description">
                            <p>
                                <FontAwesomeIcon icon={faUser} className='px-2' />  Upto 25 users
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCloud} className='px-2' />  Upto 25gb storage
                            </p>
                            <p>

                                <FontAwesomeIcon icon={faEnvelope} className='px-2' /> Email support
                            </p>
                        </div>


                    </Card.Text>
                    <Card.Link>
                        Explore more feature
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PlanCard
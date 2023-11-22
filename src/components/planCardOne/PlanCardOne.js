import React from 'react'
import './planCardOne.css'
import { Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCloud, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

function PlanCardOne(props) {

    let { title,
        orignalPrice,
        sellingPrice,
        userYouGet,
        storageYouGet,
        supportYouGet, color } = props.data




    return (
        <Card className='cards'>
            <Container>
                <Card.Body>
                    <Card.Title>
                        <h2>
                            {title}
                        </h2>
                    </Card.Title>
                    <p className="strikedPrice">${orignalPrice}</p>
                    <Card.Subtitle>
                        <h4>
                            $&nbsp;{sellingPrice}/mo
                        </h4>

                    </Card.Subtitle>
                    <button className='buttonGet' style={{ backgroundColor: `${color}` }}>Get Started  <FontAwesomeIcon icon={faArrowRight} /></button>
                    <hr />
                    <Card.Text className='p-0 m-1'>
                        <p style={{ fontSize: "13px" }}>
                            What you'll get:
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <div className="description">
                            <p>
                                <FontAwesomeIcon icon={faUser} className='px-2' />  {userYouGet}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCloud} className='px-2' />  {storageYouGet}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className='px-2' /> {supportYouGet}
                            </p>
                        </div>
                    </Card.Text>
                    <Card.Link>
                        Explore more feature
                    </Card.Link>
                </Card.Body>
            </Container >
        </Card>
    )
}

export default PlanCardOne;
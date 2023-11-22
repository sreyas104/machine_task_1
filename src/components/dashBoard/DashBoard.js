import React from 'react'
import './dashboard.css'
import { Col, Container, Row } from 'react-bootstrap'
import ToggleSwitch from './ToggleSwitch'
import PlanCardOne from '../planCardOne/PlanCardOne'
import PlanCardTwo from '../planCardTwo/PlanCardTwo'

function DashBoard() {

    let cardOne = [{
        title: "Basic",
        orignalPrice: "89.99",
        sellingPrice: "9.99",
        userYouGet: " Upto 25 users",
        storageYouGet: "Upto 25gb storage",
        supportYouGet: "Email support",
        color: '#ffe7a9'
    },
    {
        title: "Standard",
        orignalPrice: "189.99",
        sellingPrice: "99.99",
        userYouGet: " Upto 50 users",
        storageYouGet: "Upto 60gb storage",
        supportYouGet: "Email+Chat support",
        color: '#ff9494'
    },
    {
        title: "Premium",
        orignalPrice: "389.99",
        sellingPrice: "109.99",
        userYouGet: " Upto 75 users",
        storageYouGet: "Upto 100gb storage",
        supportYouGet: "Email+Chat+Whatsapp support",
        color: '#e7a2ff'
    }
    ]

    let cardTwo = [{
        subTitle: "Free Forever",
        title: "Free Starter",
        description: "The Quickest and easiest way to try protocols with basic functinalities",
        buttonTxt: "Get started",
        userYouGet: " Upto 8 users",
        storageYouGet: "Upto 3gb storage",
        supportYouGet: "Email support",
        content: "The sun dipped below the horizon, casting a warm glow.",
        color: '#c6ff8e'
    }, {
        subTitle: "Let's connect",
        title: "Enterprise Plan ",
        description: "The Quickest and easiest way to try protocols with basic functinalities",
        buttonTxt: "Contact Us",
        userYouGet: "More than 75 users",
        storageYouGet: "",
        supportYouGet: "",
        content: "Customization of all other features",
        color: '#8ab9ff'
    }
    ]

    console.log('cardone', cardOne.length)

    return (
        <div className='dashBoard'>
            <Container>

                {/* Heading Row ----------- */}
                <Row>
                    <Col md={6}>
                        <h2 className='Heading'>Choose a plan that right for you !</h2>
                    </Col>
                </Row>

                {/* Toggle Switch -----------  */}

                <Row style={{ display: 'flex', justifyContent: 'right', padding: "1rem" }}>
                    <Col md={3}>
                        <ToggleSwitch />
                    </Col>
                </Row>
                {/* Section one Cards-------------  */}
                <Row>

                    {cardOne.map((data, index) => {
                        console.log('index', index)
                        return (
                            <Col key={index} md={4}>
                                <PlanCardOne data={data} />
                            </Col>
                        )
                    })}
                </Row>

                <Row>
                    {cardTwo.map((data, index) => {
                        return (
                            <Col key={index} md={6}>
                                <PlanCardTwo data={data} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default DashBoard
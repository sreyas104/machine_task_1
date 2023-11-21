import React from 'react'
import './HomeScreen.css'

import PlanCard from '../components/planCard/PlanCard';
import { Col } from 'react-bootstrap';



function HomeScreen() {

    let plan = [1, 2, 3]
    return (
        <div className='HomeScreen row'>
            {plan.map((value, index) => {
                return (<Col key={index}>
                    <PlanCard />
                </Col>)
            })}
        </div>
    )
}

export default HomeScreen;
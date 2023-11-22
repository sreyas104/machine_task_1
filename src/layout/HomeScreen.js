import React from 'react'
import './HomeScreen.css'
import DashBoard from '../components/dashBoard/DashBoard';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import { Col } from 'react-bootstrap';

function HomeScreen() {

    return (
        <div className='HomeScreen'>
            <Col>
                <NavBarTop />
                <DashBoard />
            </Col>
        </div>
    )
}

export default HomeScreen;
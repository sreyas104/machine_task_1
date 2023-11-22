import React, { useState } from 'react';
import './ToggleBtn.css'


const ToggleSwitchBootstrap = () => {
    const [selectedOption, setSelectedOption] = useState('monthly');

    const handleToggle = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='buttons_container'>
            <button
                type="button"
                className={`btn ${selectedOption === 'monthly' ? 'selectedBtn' : 'notSelected'}`}
                onClick={() => handleToggle('monthly')}
            >
                <b> Monthly</b>
            </button>
            <button
                type="button"
                className={`btn ${selectedOption === 'annually' ? 'selectedBtn' : 'notSelected'}`}
                onClick={() => handleToggle('annually')}
            >
                <b>  Annually </b>
            </button>
        </div>
    );
};

export default ToggleSwitchBootstrap;

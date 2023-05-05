import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import styled from "styled-components";

// Wrapper to style our Timer making use of styled from styled-components
const TimerWrapper = styled.div`
    margin-top: 10px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    background-color: yellow;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0,0,0,0.4);
    padding: 10px;

    .stop-watch {
        font-size: 50px;
        margin-right: 5px;
    }
    .semiColon {
        font-weight: bold;
        font-size: larger;
    }
    label {
        margin-bottom: 10px;
    }
    input{
        width: 70px;
        margin-right: 10px;
        margin-left: 10px;
        color: #282c34;
        outline: none;
        border: none;
        font-size: 4rem;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        border-radius: 40px;
    }
`;

export default function Timer({ seconds, minutes, hours, changeSeconds, changeMinutes, changeHours }) {
    return (
        <div>
            <TimerWrapper>
                <BsStopwatch className='stop-watch' />
                <div className="d-flex flex-column">
                    <label>Hours</label>
                    <br></br>
                    <input value={hours} onChange={changeHours} />
                </div>
                <div className='semiColon'>:</div>
                <div className="d-flex flex-column">
                    <label>Minutes</label>
                    <br></br>
                    <input value={minutes} onChange={changeMinutes} />
                </div>
                <div className='semiColon'>:</div>
                <div className="d-flex flex-column">
                    <label>Seconds</label>
                    <br></br>
                    <input value={seconds} onChange={changeSeconds} />
                </div>
            </TimerWrapper>

        </div >
    )
}
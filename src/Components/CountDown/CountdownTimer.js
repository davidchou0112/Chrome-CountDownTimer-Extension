import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';
import Timer from './Timer.js';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { BiRefresh } from 'react-icons/bi'


export default function CountdownTimer() {
    // Setting hours, minutes, seconds with default at 0
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // checking if the timer is running
    const [isRunning, setIsRunning] = useState(null);

    // Message display when time runs out
    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: 'Time is up!'
    });

    useEffect(() => {
        // Initiate variable interval
        let interval;
        // Checking if isRunning is true
        if (isRunning) {
            interval = setInterval(() => {
                // Logic for implementing seconds, minutes and hours. (Time - 1) to display proper format
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                }
                else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                }
                else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                };
            }, 1000)
        };
        // When time is up, change showEndScreen to true to display ending message and revert 'pause' button to 'play' due to interval stopping
        if (hours === 0 && minutes === 0 && seconds === 0) {
            setShowEndScreen({ ...showEndScreen, show: true });
            setIsRunning(false);
        }
        return () => clearInterval(interval);

    }, [seconds, minutes, hours, isRunning, showEndScreen]);

    // Functions for start, pause, stop
    // Start timer
    function startTimer() {
        if (hours !== 0 || minutes !== 0 || seconds !== 0) {
            setIsRunning(true);
            setShowEndScreen({ ...showEndScreen, show: false });
        }
        else {
            window.alert("Must set a time")
        }
    }
    // Pause timer
    function pauseTimer() {
        setIsRunning(false);
    }

    // Function to reset the timer
    function resetTimer() {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }


    // Handlers to input numbers to set the clock
    const changeSeconds = (e) => {
        setSeconds(e.target.value)
    };
    const changeMinutes = (e) => {
        setMinutes(e.target.value)
    };
    const changeHours = (e) => {
        setHours(e.target.value)
    };


    return (
        <div>
            <h1>Stop Watch</h1>
            {showEndScreen.show && <h1>{showEndScreen.message}</h1>}
            <Timer
                seconds={seconds}
                minutes={minutes}
                hours={hours}
                changeSeconds={changeSeconds}
                changeMinutes={changeMinutes}
                changeHours={changeHours}
            />

            <br></br>
            {!isRunning && (
                <button className='play' onClick={startTimer}><BsFillPlayFill /></button>
            )}
            {isRunning && (
                <button className='pause' onClick={pauseTimer}><BsPauseFill /></button>
            )}
            <button className='reset' onClick={resetTimer}><BiRefresh /></button>
        </div>
    )
}
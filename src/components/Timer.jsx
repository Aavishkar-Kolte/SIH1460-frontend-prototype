import React, { useState, useEffect } from 'react';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const Timer = ({ timeLimit, onTimeUp }) => {
    const [timeRemaining, setTimeRemaining] = useState(timeLimit);

    useEffect(() => {
        let timer;

        if (timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining(time => time - 1);
            }, 1000);
        } else {
            clearInterval(timer);
            onTimeUp();
        }

        return () => {
            clearInterval(timer);
        };
    }, [timeRemaining, onTimeUp]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div id='timer'>
            <AccessAlarmsIcon sx={{ fontSize: 28, padding: "5px" }} />
            <p style={{padding: "5px"}}>{formatTime(timeRemaining)}</p>
        </div>
    );
};

export default Timer;

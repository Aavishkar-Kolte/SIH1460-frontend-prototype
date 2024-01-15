import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [formattedDate, setFormattedDate] = useState('');

  const updateTime = () => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    };
    const newFormattedDate = currentDate.toLocaleString('en-US', options);
    setFormattedDate(newFormattedDate);
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
      <p>{formattedDate}</p>
  );
};

export default TimeDisplay;

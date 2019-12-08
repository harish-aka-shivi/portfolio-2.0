import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerDiv = styled.div`
  height:100%;
  width:100%;
`;

function getTimeString() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  let hoursIn12Format = hours % 12;
  hoursIn12Format = hoursIn12Format || 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hoursIn12Format}:${formattedMinutes} ${ampm}`;
  return strTime;
}

export default function Timer() {
  const [timeString, setTimeString] = useState(getTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeString(getTimeString);
    });
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerDiv>{timeString}</TimerDiv>
  );
}

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';

const StyledApp = styled.div`
  background-color: ${(props) => props.reversedRGB || 'rgb(179, 221, 90)'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${(props) => props.RGB || 'rgb(76, 34, 165)'};
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }
`;
function App() {
  const [RGB, setRGB] = useState('rgb(179, 221, 90)');
  const [reversedRGB, setReversedRGB] = useState('rgb(76, 34, 165)');

  // Function to reverse rgb
  const reverseRGBHandler = (rgb) => {
    const rgbArray = rgb.split('(')[1].split(')')[0].split(',');
    const reverseRgb = `rgb(${255 - rgbArray[0]}, ${255 - rgbArray[1]}, ${
      255 - rgbArray[2]
    })`;
    return reverseRgb;
  };

  // Function to get random rgb
  const randomRGBHandler = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const randomRGB = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomRGB;
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    const randomRGB = randomRGBHandler();
    setRGB(randomRGB);
    setReversedRGB(reverseRGBHandler(randomRGB));
    console.log(`RGB: ${RGB}`);
    console.log(`Reversed RGB: ${reversedRGB}`);
  };

  return (
    <StyledApp RGB={RGB} reversedRGB={reversedRGB}>
      <button onClick={onChangeHandler}>REVERSE RGB</button>
    </StyledApp>
  );
}

export default App;

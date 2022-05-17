import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';

const StyledApp = styled.div`
  background-color: ${(props) => props.reversedRGB || 'salmon'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${(props) => props.RGB || 'blue'};
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
  const [RGB, setRGB] = useState('blue');
  const [reversedRGB, setReversedRGB] = useState('salmon');

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
    setRGB(randomRGBHandler());
    setReversedRGB(reverseRGBHandler(RGB));
  };

  return (
    <StyledApp RGB={RGB} reversedRGB={reversedRGB}>
      <button onClick={onChangeHandler}>REVERSE RGB</button>
    </StyledApp>
  );
}

export default App;

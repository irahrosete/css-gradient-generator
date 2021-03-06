import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './App.css';

/* background-color: ${props => props.backgroundColor[0]}; */
// background: linear-gradient();
const StyledMain = styled.main`
  ${props => props.backgroundCSS}
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%
`

// takes in an array of background colours and returns CSS for a gradient background
export const generateBackgroundCSS = (backgroundColors) => {
  let output = "background: linear-gradient("
  // loop over the background colours, add each one to the string
  output += backgroundColors.join(",")
  output += ");"
  return output
}

const updateLocalStorage = (state) => {
  // JSON stringify the state
  const stringState = JSON.stringify(state)
  // save string to localStorage
  localStorage.setItem('backgroundColors', stringState)
}

const getFromLocalStorage = () => {
  const colors = localStorage.getItem('backgroundColors')
  if (!colors) {
    return null
  }
  return JSON.parse(colors)
}

const App = () => {
  const [backgroundColors, setBackgroundColors] = useState(["#efefef", "#efefef", "#efefef"])

  useEffect(() => {
    const colors = getFromLocalStorage()
    if (colors) {
      setBackgroundColors(colors)
    }
  }, [])

  useEffect(() => {
    updateLocalStorage(backgroundColors)
  }, [backgroundColors])

  const handleColorChange = (event, i) => {
    const newColor = event.target.value
    // create a copy of the backgroundColor array
    const newBackgroundColors = [...backgroundColors]
    // change the value of the array to the new color
    newBackgroundColors[i] = newColor
    console.log(newColor)
    setBackgroundColors(newBackgroundColors)
  }

  const addColor = () => {
    // clone the existing colors array
    const newBackgroundColors = [...backgroundColors]
    // add a new color to the end
    newBackgroundColors.push("#ffffff")
    // set it into state
    setBackgroundColors(newBackgroundColors)
  }

  const removeColor = (i) => {
    // clone the background color array
    const newBackgroundColors = [...backgroundColors]
    // remove the element index i
    newBackgroundColors.splice(i, 1)
    // set new array into state
    setBackgroundColors(newBackgroundColors)

  }

  const backgroundCSS = generateBackgroundCSS(backgroundColors)

  return (
    <StyledMain backgroundCSS={backgroundCSS}>
      <h1>CSS Gradient Generator</h1>
      {backgroundColors.map((color, i) => {
        return (
          <React.Fragment key={`${i}${color}`}>
            <input type="color"
              value={color}
              onChange={(event) => handleColorChange(event, i)}
              key={i}
            />
            {backgroundColors.length > 2 && <button onClick={() => removeColor(i)}>remove</button>}
          </React.Fragment>
        )
      })}
      <button onClick={addColor}>Add a color</button>
      <p>
        Your CSS is:
      </p>
      <h4>
        {backgroundCSS}
      </h4>
    </StyledMain>
  )
}

export default App;
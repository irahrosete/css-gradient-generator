import { useState } from 'react'
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

const App = () => {
  const [backgroundColors, setBackgroundColors] = useState(["#efefef", "#efefef", "#efefef"])

  const handleColorChange = (event, i) => {
    const newColor = event.target.value
    // create a copy of the backgroundColor array
    const newBackgroundColors = [...backgroundColors]
    // change the value of the array to the new color
    newBackgroundColors[i] = newColor
    console.log(newColor)
    setBackgroundColors(newBackgroundColors)
  }

  const backgroundCSS = generateBackgroundCSS(backgroundColors)

  return (
    <StyledMain backgroundCSS={backgroundCSS}>
      <h1>CSS Gradient Generator</h1>
      {backgroundColors.map((color, i) => {
        return (
          <input type="color"
            value={color}
            onChange={(event) => handleColorChange(event, i)}
            key={i}
          />
        )
      })}
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

// -----
// class OldApp extends Component {
//   state = {
//     backgroundColor: ["#c0c0c0", "#c0c0c0", "#c0c0c0"]
//   }

//   handleColorChange = (event, i) => {
//     const newColor = event.target.value
//     // create a copy of the backgroundColor array
//     const newBackgroundColor = [...this.state.backgroundColor]
//     // change the value of the array to the new color
//     newBackgroundColor[i] = newColor
//     console.log(newColor)
//     this.setState({ backgroundColor: newBackgroundColor})
//   }

// 	render() {
//     const { backgroundColor } = this.state
// 		return (
// 			<StyledMain backgroundColor={backgroundColor}>
// 				<h1>CSS Gradient Generator</h1>
//         {backgroundColor.map((color, i) => {
//           return (
//             <input type="color"
//               value={color}
//               onChange={(event) => this.handleColorChange(event, i)} />
//           )
//         })}
// 			</StyledMain>
// 		)
// 	}
// }
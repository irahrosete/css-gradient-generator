import { Component } from 'react'
import styled from 'styled-components'
import './App.css';

const StyledMain = styled.main`
  background-color: ${props => props.backgroundColor[0]};
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%
`

class App extends Component {
  state = {
    backgroundColor: ["#c0c0c0", "#c0c0c0", "#c0c0c0"]
  }

  handleColorChange = (event, i) => {
    const newColor = event.target.value
    // create a copy of the backgroundColor array
    const newBackgroundColor = [...this.state.backgroundColor]
    // change the value of the array to the new color
    newBackgroundColor[i] = newColor
    console.log(newColor)
    this.setState({ backgroundColor: newBackgroundColor})
  }

	render() {
    const { backgroundColor } = this.state
		return (
			<StyledMain backgroundColor={backgroundColor}>
				<h1>CSS Gradient Generator</h1>
        {backgroundColor.map((color, i) => {
          return (
            <input type="color"
              value={color}
              onChange={(event) => this.handleColorChange(event, i)} />
          )
        })}
			</StyledMain>
		)
	}
}

export default App;
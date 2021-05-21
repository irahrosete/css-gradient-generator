import { Component } from 'react'
import styled from 'styled-components'
import './App.css';

const StyledMain = styled.main`
  background-color: ${props => props.backgroundColor};
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%
`

class App extends Component {
  state = {
    backgroundColor: "#234fde"
  }

  handleColorChange = (event) => {
    const newColor = event.target.value
    // console.log(newColor)
    this.setState({ backgroundColor: newColor})
  }

	render() {
    const { backgroundColor } = this.state
		return (
			<StyledMain backgroundColor={backgroundColor}>
				<h1>CSS Gradient Generator</h1>
				<input type="color" value={backgroundColor} onChange={this.handleColorChange} />
			</StyledMain>
		)
	}
}

export default App;
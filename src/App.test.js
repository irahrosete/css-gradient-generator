import { render } from '@testing-library/react'
import App, { generateBackgroundCSS } from './App'

test('renders app', () => {
  const app = render(<App />)
  expect(app).toBeTruthy()
})

describe('generateBackgroundCSS creates correct CSS string', () => {
  test("It handles a single color", () => {
    const colors = ["#000000"]
    const output = "background: linear-gradient(#000000);"
    expect(generateBackgroundCSS(colors)).toBe(output)
  })
  test("It handles two colors", () => {
    const colors = ["#000000", "#efefef"]
    const output = "background: linear-gradient(#000000, #efefef);"
    expect(generateBackgroundCSS(colors)).toBe(output)
  })
  test("It handles multiple colors", () => {
    const colors = ["#000000", "#efefef", "#408080"]
    const output = "background: linear-gradient(#000000, #efefef, #408080);"
    expect(generateBackgroundCSS(colors)).toBe(output)
  })
})
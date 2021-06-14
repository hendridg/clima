import { render, screen } from "@testing-library/react"
import App from "./App"
import ErrorMessage from "./components/ErrorMessage"

test("renders header", () => {
  render(<App />)
  const linkElement = screen.getByText("Weather Finder")
  expect(linkElement).toBeInTheDocument()
})

test("renders search components", () => {
  render(<App />)
  const linkElement = screen.getByPlaceholderText("Location")
  expect(linkElement).toBeInTheDocument()
})

test("renders error message", () => {
  render(<ErrorMessage />)
  const linkElement = screen.getByText("Page Not Found")
  expect(linkElement).toBeInTheDocument()
})

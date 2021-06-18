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
test("test de entrada en el input Location", async () => {
  render(<App />)
  const input = screen.getByPlaceholderText("Location")
  fireEvent.change(input, { target: { location: { value: "Maracay" } } })
  expect(input.location.value).toBe("Maracay")
})

it('calls "query" prop on button click', async () => {
  const query = jest.fn()
  render(<WeatherSearch query={query} />)
  const locationInput = screen.getByPlaceholderText("Location")

  userEvent.type(locationInput, "Maracay")
  fireEvent.click(screen.getByText("boton"))

  await waitFor(() =>
    expect(query).toHaveBeenCalledWith(
      { location: "Maracay" },

      expect.anything()
    )
  )
})

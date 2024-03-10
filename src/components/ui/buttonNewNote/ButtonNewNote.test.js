import { render, screen } from '@testing-library/react'
import ButtonNewNote from './ButtonNewNote'

test('click on button', () => {
  render(<ButtonNewNote />)
  console.log('screen', screen);
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
})

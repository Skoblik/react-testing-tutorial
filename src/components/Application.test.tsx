import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
    test('renders the application form', () => {
        render(<Application />)

        const heading = screen.getByRole('heading', { name: /job application form/i })
        expect(heading).toBeInTheDocument()
        }),
    test('renders the custom HTML element', () => {
        render(<Application />)

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()
        expect(customElement).toHaveTextContent('Custom HTML element')
       }),
    test('verify text of the custom HTML element', () => {
        render(<Application />)

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toHaveTextContent('Custom HTML element')
       })         
    })
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders about', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<About />);
    const linkElement = screen.getByText(/ABOUT/i);
    expect(linkElement).toBeInTheDocument();
});
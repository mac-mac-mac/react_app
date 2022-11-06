import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<Header />);
    const linkElement = screen.getByText(/MAC BARRON/i);
    expect(linkElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience';

test('renders experience', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<Experience />);
    const linkElement = screen.getByText(/EXPERIENCE/i);
    expect(linkElement).toBeInTheDocument();
});
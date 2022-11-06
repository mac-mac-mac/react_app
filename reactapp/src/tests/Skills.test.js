import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

test('renders skills', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<Skills />);
    const linkElement = screen.getByText(/SKILLS/i);
    expect(linkElement).toBeInTheDocument();
});
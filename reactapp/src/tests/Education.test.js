import { render, screen } from '@testing-library/react';
import Education from '../components/Education';

test('renders education', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<Education />);
    const linkElement = screen.getByText(/EDUCATION/i);
    expect(linkElement).toBeInTheDocument();
});
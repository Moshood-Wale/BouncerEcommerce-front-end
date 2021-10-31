import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Laptop from '../components/register/LaptopLogo';



test('renders laptop component role', () => {
    render(<Laptop />);
    const headingElement = screen.getByRole("img")
    expect(headingElement).toBeInTheDocument();
});

test('renders navbar by laptopimg ID', () => {
    render(<Laptop />);
    const headingElement = screen.getByTestId("laptopimg")
    expect(headingElement).toBeInTheDocument();
});


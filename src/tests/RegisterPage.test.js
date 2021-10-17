import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/register/NavBar';
import Laptop from '../components/register/LaptopLogo';


test('renders navbar component role', () => {
    render(<NavBar />);
    const headingElement = screen.getByRole("img")
    expect(headingElement).toBeInTheDocument();
});


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

test('renders laptop by logo ID', () => {
    render(<NavBar />);
    const headingElement = screen.getByTestId("logo")
    expect(headingElement).toBeInTheDocument();
});
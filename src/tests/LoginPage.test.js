import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Login from '../components/login/login';


test('renders base-content', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('Become a vendor')).toBeInTheDocument();
});
test('renders base-content', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('Forgot Password')).toBeInTheDocument();
});

test('renders link', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
});

test('renders password', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('password:')).toBeInTheDocument();
});
test('renders email', () => {
    render(
        <Router>
            <Login />
        </Router>
    );
    expect(screen.getByText('email:')).toBeInTheDocument();
})

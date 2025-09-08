import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock components
import EmailVerification from '../EmailVerification';
import ForgotPassword from '../ForgotPassword';
import LoginForm from '../LoginForm';
import ResetPassword from '../ResetPassword';
import SignupForm from '../SignupForm';

// Global Mocks for external dependencies
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

// Mock all image imports
jest.mock('../../../../assets/images/jumbotron-hero.png', () => 'jumbotron-hero.png');
jest.mock('../../../../assets/images/google-logo.png', () => 'google-logo.png');
jest.mock('../../../../assets/images/Pixel-style-logo.png', () => 'Pixel-style-logo.png');

// Mock external hooks
jest.mock('../../../../hooks/useWindowSize', () => ({
    useWindowSize: () => [1000, 800],
}));

// Mock global styled components as plain divs to avoid CSS issues
jest.mock('../styles/Global.styled', () => ({
    ...jest.requireActual('../styles/Global.styled'),
    ForgotPasswordContainer: ({ children }) => <div data-testid="forgot-password-container">{children}</div>,
    ForgotPasswordWrapper: ({ children }) => <div data-testid="forgot-password-wrapper">{children}</div>,
    ForgotPasswordForm: ({ children }) => <form data-testid="forgot-password-form">{children}</form>,
    LayoutContainer: ({ children }) => <div data-testid="layout-container">{children}</div>,
    FormWrapper: ({ children }) => <div data-testid="form-wrapper">{children}</div>,
    HeroWrapper: ({ children }) => <div data-testid="hero-wrapper">{children}</div>,
    InputWrapper: ({ children }) => <div data-testid="input-wrapper">{children}</div>,
    SubmitButton: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
}));

// --- Test Suite for Auth Components ---

describe('Auth Components', () => {
    // Helper function to render components with Router
    const renderWithRouter = (component) => {
        return render(<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{component}</Router>);
    };

    describe('EmailVerification', () => {
        it('renders all elements correctly', () => {
            renderWithRouter(<EmailVerification />);
            expect(screen.getByText('Email Verification')).toBeInTheDocument();
            expect(screen.getByText('Enter Your Code.')).toBeInTheDocument();
            expect(screen.getByText(/Please enter the 4 digit code/i)).toBeInTheDocument();
            expect(screen.getByText('Resend')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
            const inputs = screen.getAllByRole('textbox');
            expect(inputs).toHaveLength(4);
        });
    });
    
    // ---

    describe('ForgotPassword', () => {
        it('renders all elements correctly', () => {
            renderWithRouter(<ForgotPassword />);
            expect(screen.getByText('Forgot Password')).toBeInTheDocument();
            expect(screen.getByText('Recover With Email')).toBeInTheDocument();
            expect(screen.getByText(/Enter your email to send verification code/i)).toBeInTheDocument();
            expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
        });

        it('handles email input change', () => {
            renderWithRouter(<ForgotPassword />);
            const emailInput = screen.getByRole('textbox', { name: /Email/i });
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            expect(emailInput.value).toBe('test@example.com');
        });
    });
    
    // ---

    describe('LoginForm', () => {
        it('renders all elements correctly', () => {
            const authProcessMock = jest.fn();
            renderWithRouter(<LoginForm authenticationProcess={authProcessMock} status="Login" />);
            expect(screen.getByText('Masuk')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
            expect(screen.getByText('Lupa Password ?')).toBeInTheDocument();
            expect(screen.getByText('Masuk')).toBeInTheDocument();
            expect(screen.getByText('Belum punya akun?')).toBeInTheDocument();
        });

        it('handles user input and calls authenticationProcess on button click', async () => {
            const authProcessMock = jest.fn();
            renderWithRouter(<LoginForm authenticationProcess={authProcessMock} status="" />);
            const emailInput = screen.getByPlaceholderText('Enter your email');
            const passwordInput = screen.getByPlaceholderText('Enter your password');
            const loginButton = screen.getByRole('button', { name: /Masuk/i });

            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password123' } });

            fireEvent.click(loginButton);

            await waitFor(() => {
                // expect(authProcessMock).toHaveBeenCalledWith('test@example.com', 'password123');
                expect(authProcessMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
            });
        });
    });
    
    // ---

    describe('ResetPassword', () => {
        it('renders all elements correctly', () => {
            renderWithRouter(<ResetPassword />);
            expect(screen.getByText('Reset Password')).toBeInTheDocument();
            expect(screen.getByText('Enter Your New Password.')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Enter your new passord')).toBeInTheDocument();
            expect(screen.getByText('Confirm Password')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /Verify and Proceed/i })).toBeInTheDocument();
        });
    });
    
    // ---

    describe('SignupForm', () => {
        it('renders all elements correctly', () => {
            const authSignupMock = jest.fn();
            renderWithRouter(<SignupForm authSignup={authSignupMock} status="" />);
            expect(screen.getByText('Daftar')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
            // expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
            expect(screen.getByText('Sudah punya akun?')).toBeInTheDocument();
        });
    });
});
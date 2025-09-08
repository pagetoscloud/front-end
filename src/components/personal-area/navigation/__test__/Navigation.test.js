import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';
import { useWindowSize } from "../../../../hooks/useWindowSize";

// Mock the react-router-dom's useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// Mock the custom useWindowSize hook
jest.mock("../../../../hooks/useWindowSize", () => ({
    useWindowSize: jest.fn(),
}));

// Mock the global fetch API
global.fetch = jest.fn();

describe('Navigation Component', () => {

    beforeEach(() => {
        // Clear all mocks before each test to ensure a clean state
        jest.clearAllMocks();
    });
    
    // Test for rendering on a large screen
    test('renders all navigation links and Logout button on a large screen', () => {
        // Mock a large window size (height > 600)
        useWindowSize.mockReturnValue([1024, 800]);

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );

        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Template')).toBeInTheDocument();
        expect(screen.getByText('Collection')).toBeInTheDocument();
        expect(screen.getByText('Analytics')).toBeInTheDocument();
        expect(screen.getByText('Setting')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    // Test for rendering on a small screen
    test('renders all navigation links and Logout button on a small screen', () => {
        // Mock a small window size (height <= 600)
        useWindowSize.mockReturnValue([500, 500]);

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );

        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Template')).toBeInTheDocument();
        expect(screen.getByText('Collection')).toBeInTheDocument();
        expect(screen.getByText('Analytics')).toBeInTheDocument();
        expect(screen.getByText('Setting')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    // Test for navigation button clicks
    test('navigates to the correct page when a link is clicked', () => {
        useWindowSize.mockReturnValue([1024, 800]);

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );
        
        // Find and click the Template link
        fireEvent.click(screen.getByText('Template'));
        expect(mockNavigate).toHaveBeenCalledWith('/template');
        
        // Find and click the Collection link
        fireEvent.click(screen.getByText('Collection'));
        expect(mockNavigate).toHaveBeenCalledWith('/collection');
    });

    // Test for a successful logout API call
    test('calls the logout API and navigates to the login page on success', async () => {
        useWindowSize.mockReturnValue([1024, 800]);
        
        // Mock a successful fetch response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ status: 'ok' }),
        });

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );
        
        // Use getByRole for a more robust test
        // const logoutButton = screen.getByRole('button', { name: /logout/i });
        const logoutButton = screen.getByTestId('logout-button');
        fireEvent.click(logoutButton);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });

    // Test for a failed logout API call
    test('does not navigate to login page on failed logout', async () => {
        useWindowSize.mockReturnValue([1024, 800]);

        // Mock a failed fetch response
        global.fetch.mockResolvedValueOnce({
            ok: false,
            json: () => Promise.resolve({ status: 'error' }),
        });

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );

        // const logoutButton = screen.getByRole('button', { name: /logout/i });
        const logoutButton = screen.getByTestId('logout-button');
        fireEvent.click(logoutButton);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(mockNavigate).not.toHaveBeenCalled();
        });
    });

    // Test for handling a network error during logout
    test('handles network errors gracefully during logout', async () => {
        useWindowSize.mockReturnValue([1024, 800]);

        // Mock a network error
        global.fetch.mockRejectedValueOnce(new Error('Network error occurred'));
        
        // Spy on console.error to check if the error is logged
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        render(
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Navigation currentPage="Dashboard" />
            </Router>
        );
        
        // const logoutButton = screen.getByRole('button', { name: /logout/i });
        const logoutButton = screen.getByTestId('logout-button');
        fireEvent.click(logoutButton);
        
        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Network error occurred'));
            expect(mockNavigate).not.toHaveBeenCalled();
        });

        consoleErrorSpy.mockRestore();
    });
});
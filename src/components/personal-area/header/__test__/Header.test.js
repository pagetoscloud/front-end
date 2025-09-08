import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

// Mock the react-router-dom useNavigate hook
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}));

// Mock the styled components to simplify the test
jest.mock('../Header.styled', () => ({
    HeaderWrapper: ({ children }) => <div>{children}</div>,
    LeftContent: ({ children }) => <div>{children}</div>,
    Logo: ({ children, onClick }) => <div data-testid="logo" onClick={onClick}>{children}</div>,
    Menu: ({ children }) => <div>{children}</div>,
    RightContent: ({ children }) => <div>{children}</div>,
    AddDesignButton: ({ children, onClick }) => <button data-testid="add-design-button" onClick={onClick}>{children}</button>,
    UpgradeButton: ({ children }) => <button data-testid="upgrade-button">{children}</button>,
    ProfilePicture: ({ children }) => <div data-testid="profile-picture">{children}</div>,
    Toggle: ({ children, onClick }) => <div data-testid="toggle-button" onClick={onClick}>{children}</div>,
}));

// Mock the image imports
jest.mock('../../../../assets/images/Pixel-style-logo.png', () => 'logo.png');
jest.mock('../../../../assets/images/togle-icon.png', () => 'toggle-icon.png');

const mockStore = configureStore([]);

describe('Header Component Unit Tests', () => {
    // Test case 1: Component renders with a profile picture
    test('renders correctly and shows a profile picture when one is available', () => {
        const store = mockStore({
            accountData: {
                personalData: {
                    username: 'TestUser',
                    profilePicture: 'profile.jpg',
                },
            },
        });

        render(
            <Provider store={store}>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Header handleShowNavigation={() => {}} />
                </Router>
            </Provider>
        );

        // Check for the presence of key elements
        expect(screen.getByTestId('toggle-button')).toBeInTheDocument();
        expect(screen.getByTestId('logo')).toBeInTheDocument();
        expect(screen.getByText('Pelajari')).toBeInTheDocument();
        expect(screen.getByText('Tentang')).toBeInTheDocument();
        expect(screen.getByText('Berlangganan')).toBeInTheDocument();
        expect(screen.getByTestId('add-design-button')).toBeInTheDocument();
        expect(screen.getByTestId('upgrade-button')).toBeInTheDocument();

        // Check if the profile picture is rendered
        const profileImage = screen.getByAltText('profile');
        expect(profileImage).toBeInTheDocument();
        expect(profileImage.src).toContain('profile.jpg');
        expect(screen.queryByText('T')).not.toBeInTheDocument();
    });

    // Test case 2: Component renders with a username initial
    test('renders the first letter of the username when no profile picture is available', () => {
        const store = mockStore({
            accountData: {
                personalData: {
                    username: 'TestUser',
                    profilePicture: '',
                },
            },
        });

        render(
            <Provider store={store}>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Header handleShowNavigation={() => {}} />
                </Router>
            </Provider>
        );

        // Check if the uppercase initial is rendered
        const profileInitial = screen.getByText('T');
        expect(profileInitial).toBeInTheDocument();
        expect(profileInitial.tagName).toBe('H2');
        expect(screen.queryByAltText('profile')).not.toBeInTheDocument();
    });

    // Test case 3: Logo navigation test
    test('navigates to the home page when the logo is clicked', () => {
        const store = mockStore({
            accountData: {
                personalData: {
                    username: 'TestUser',
                    profilePicture: '',
                },
            },
        });

        render(
            <Provider store={store}>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Header handleShowNavigation={() => {}} />
                </Router>
            </Provider>
        );

        // fireEvent.click(screen.getByTestId('logo'));
        fireEvent.click(screen.getByRole('img', { name: /logo/i }));
        expect(mockedNavigate).toHaveBeenCalledWith('/');
    });

    // Test case 4: "Add Design" button navigation test
    test('navigates to the editor page when the Add Design button is clicked', () => {
        const store = mockStore({
            accountData: {
                personalData: {
                    username: 'TestUser',
                    profilePicture: '',
                },
            },
        });

        render(
            <Provider store={store}>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Header handleShowNavigation={() => {}} />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByTestId('add-design-button'));
        expect(mockedNavigate).toHaveBeenCalledWith('/editor/*');
    });

    // Test case 5: Toggle button functionality test
    test('calls handleShowNavigation when the toggle button is clicked', () => {
        const store = mockStore({
            accountData: {
                personalData: {
                    username: 'TestUser',
                    profilePicture: '',
                },
            },
        });
        const handleShowNavigationMock = jest.fn();

        render(
            <Provider store={store}>
                <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Header handleShowNavigation={handleShowNavigationMock} />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByTestId('toggle-button'));
        expect(handleShowNavigationMock).toHaveBeenCalled();
    });
});
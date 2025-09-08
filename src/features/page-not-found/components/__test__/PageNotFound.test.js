import { render, screen } from '@testing-library/react';
import MainPage from '../MainPage';

// filepath: src/features/page-not-found/components/MainPage.test.js

describe('MainPage Component', () => {
    test('renders the 404 ERROR heading', () => {
        render(<MainPage />);
        const headingElement = screen.getByText(/404 ERROR/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the not found message', () => {
        render(<MainPage />);
        const paragraphElement = screen.getByText(/Halaman yang Anda cari tidak ditemukan./i);
        expect(paragraphElement).toBeInTheDocument();
    });
});


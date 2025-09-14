// filepath: src/features/page-not-found/components/MainPage.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import MainPage from '../MainPage';

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


// import { render, screen } from '@testing-library/react';
// import MainPage from '../MainPage';

// // filepath: src/features/page-not-found/components/MainPage.test.js

// describe('MainPage Component', () => {
//     test('renders the 404 ERROR heading', () => {
//         render(<MainPage />);
//         const headingElement = screen.getByText(/404 ERROR/i);
//         expect(headingElement).toBeInTheDocument();
//     });

//     test('renders the not found message', () => {
//         render(<MainPage />);
//         const paragraphElement = screen.getByText(/Halaman yang Anda cari tidak ditemukan./i);
//         expect(paragraphElement).toBeInTheDocument();
//     });
// });


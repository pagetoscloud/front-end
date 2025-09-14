import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock components
import Advantage from '../Advantage'
import Banner from '../Banner'
import Detail from '../Detail'
import Footer from '../Footer'
import IntegrationFeature from '../IntegrationFeature'
import Jumbotron from '../Jumbotron'
import QnA from '../QnA'
import QnAItems from '../QnAItems'
import TargetUser from '../TargetUser'
import TemplateSample from '../TemplateSample'

// Global Mocks for external dependencies
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
  }
})

// Mock all image imports
vi.mock('../../../../assets/images/Pixel-style-logo.png', () => ({ default: 'logo.png' }))
vi.mock('../../../../assets/images/jumbotron-hero.png', () => ({ default: 'jumbotron-hero.png' }))
vi.mock('../../../../assets/images/product-edit-hero.png', () => ({ default: 'product-edit-hero.png' }))
vi.mock('../../../../assets/images/link-mockup.png', () => ({ default: 'link-mockup.png' }))
vi.mock('../../../../assets/images/qr-code-scan.png', () => ({ default: 'qr-code-scan.png' }))
vi.mock('../../../../assets/images/croissant.png', () => ({ default: 'croissant.png' }))
vi.mock('../../../../assets/images/online-store.png', () => ({ default: 'online-store.png' }))
vi.mock('../../../../assets/images/restaurant.png', () => ({ default: 'restaurant.png' }))
vi.mock('../../../../assets/images/bento.png', () => ({ default: 'bento.png' }))
vi.mock('../../../../assets/images/gofood.png', () => ({ default: 'gofood.png' }))
vi.mock('../../../../assets/images/grabfood.png', () => ({ default: 'grabfood.png' }))
vi.mock('../../../../assets/images/shopee.png', () => ({ default: 'shopee.png' }))
vi.mock('../../../../assets/images/tokopedia.png', () => ({ default: 'tokopedia.png' }))
vi.mock('../../../../assets/images/belimbing-1.png', () => ({ default: 'image-three.png' }))
vi.mock('../../../../assets/images/zebra-pelari-1.png', () => ({ default: 'image-four.png' }))
vi.mock('../../../../assets/images/zebra-pelari-2.png', () => ({ default: 'image-five.png' }))
vi.mock('../../../../assets/images/melon-manis-1.png', () => ({ default: 'image-six.png' }))
vi.mock('../../../../assets/images/matahari-penerang-1.png', () => ({ default: 'image-eight.png' }))
vi.mock('../../../../assets/images/king-kebab-main-menu.png', () => ({ default: 'king-kebab-menu.png' }))
vi.mock('../../../../assets/images/greenfood-detail-items.png', () => ({ default: 'greenfood-detail.png' }))
vi.mock('../../../../assets/images/arrow-up.png', () => ({ default: 'arrow-up.png' }))
vi.mock('../../../../assets/images/arrow-down.png', () => ({ default: 'arrow-down.png' }))

// Mock external hooks
vi.mock('../../../../hooks/useWindowSize', () => ({
  useWindowSize: () => [1000, 800], // Mock a consistent window size
}))

// Mock data
vi.mock('../../../../data/QnADataMockup', () => ({
  QnAData: [
    { title: 'Test Question 1', paragraph: 'Test Answer 1.' },
    { title: 'Test Question 2', paragraph: 'Test Answer 2.' },
  ],
}))

// --- Test Suite for Landing Page Components ---

describe('Landing Page Components', () => {
  describe('Detail', () => {
    it('renders without crashing and displays the correct content', () => {
      const { rerender } = render(<Detail handleDetail={() => {}} detail="product" />)
      expect(screen.getByText(/Our product is digital page/i)).toBeInTheDocument()

      rerender(<Detail handleDetail={() => {}} detail="price" />)
      expect(screen.getByText(/Our price is free for now/i)).toBeInTheDocument()

      rerender(<Detail handleDetail={() => {}} detail="about" />)
      expect(screen.getByText(/Our company from Indonesia/i)).toBeInTheDocument()
    })

    it('calls handleDetail with false when the exit button is clicked', () => {
      const mockHandleDetail = vi.fn()
      render(<Detail handleDetail={mockHandleDetail} detail="product" />)

      const exitButton = screen.getByText('X')
      fireEvent.click(exitButton)

      expect(mockHandleDetail).toHaveBeenCalledWith(false)
    })
  })
    describe('Advantage', () => {
        it('renders without crashing and displays the main title', () => {
            render(<Advantage />);
            expect(screen.getByText('Banyak Manfaatnya.')).toBeInTheDocument();
        });

        it('displays all expected headings and paragraphs', () => {
            render(<Advantage />);
            expect(screen.getByText('Informasi Produk.')).toBeInTheDocument();
            expect(screen.getByText('Link dapat diletakan di berbagai media sosial untuk memberikan informasi tentang produk.')).toBeInTheDocument();
            expect(screen.getByText('Link Iklan Online.')).toBeInTheDocument();
            expect(screen.getByText('Link dapat diletakan di iklan online untuk memberi informasi lebih lanjut mengenai produk dalam iklan tersebut.')).toBeInTheDocument();
            expect(screen.getByText('Menu Online.')).toBeInTheDocument();
            expect(screen.getByText('QR Code dapat diletakan di meja pelanggan sebagai pengganti menu biasa. Pelanggan akan scan QR Code lalu terhubung ke halaman menu yang telah dibuat sebelumnya.')).toBeInTheDocument();
            expect(screen.getByText('Promosi Offline.')).toBeInTheDocument();
            expect(screen.getByText('QR Code dapat diletakan di media cetak sebagai metode promosi.')).toBeInTheDocument();
        });
    });

    describe('Jumbotron', () => {
        it('renders without crashing and displays key text', () => {
            render(<Jumbotron handleDetail={() => {}} />);
            expect(screen.getByText('Produk Terlihat lebih Menarik')).toBeInTheDocument();
            expect(screen.getByText('Tingkatkan penjualan anda.')).toBeInTheDocument();
        });

        it('calls handleDetail with correct arguments when nav links are clicked', () => {
            const mockHandleDetail = vi.fn();
            render(<Jumbotron handleDetail={mockHandleDetail} />);
            fireEvent.click(screen.getByText('Product'));
            expect(mockHandleDetail).toHaveBeenCalledWith('product');
            fireEvent.click(screen.getByText('Price'));
            expect(mockHandleDetail).toHaveBeenCalledWith('price');
            fireEvent.click(screen.getByText('About'));
            expect(mockHandleDetail).toHaveBeenCalledWith('about');
        });
    });

    describe('QnA', () => {
        it('renders without crashing and displays the main title', () => {
            render(<QnA />);
            expect(screen.getByText('QnA')).toBeInTheDocument();
        });

        it('renders QnAItems for each item in the mocked data', () => {
            render(<QnA />);
            expect(screen.getByText('Test Question 1')).toBeInTheDocument();
            expect(screen.getByText('Test Question 2')).toBeInTheDocument();
        });
    });

    describe('QnAItems', () => {
        it('renders with title but hides paragraph initially', () => {
            const title = 'What is this product?';
            const paragraph = 'It is a digital page.';
            render(<QnAItems title={title} paragraph={paragraph} />);
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.queryByText(paragraph)).not.toBeInTheDocument();
        });

        it('shows paragraph when clicked', () => {
            const title = 'What is this product?';
            const paragraph = 'It is a digital page.';
            render(<QnAItems title={title} paragraph={paragraph} />);
            const item = screen.getByText(title).closest('div');
            fireEvent.click(item);
            expect(screen.getByText(paragraph)).toBeInTheDocument();
        });

        it('hides paragraph when clicked again', () => {
            const title = 'What is this product?';
            const paragraph = 'It is a digital page.';
            render(<QnAItems title={title} paragraph={paragraph} />);
            const item = screen.getByText(title).closest('div');
            // First click to show
            fireEvent.click(item);
            // Second click to hide
            fireEvent.click(item);
            expect(screen.queryByText(paragraph)).not.toBeInTheDocument();
        });
    });

    describe('Footer', () => {
        it('renders without crashing and displays logo', () => {
            render(<Footer />);
            expect(screen.getByAltText('logo')).toBeInTheDocument();
        });
    });

    describe('Banner', () => {
        it('renders without crashing and displays text', () => {
            render(<Banner />);
            expect(screen.getByText('Mudah Buatnya.')).toBeInTheDocument();
            expect(screen.getByText('Menampilkan produk secara menarik dengan mudah dan gratis.')).toBeInTheDocument();
        });

        it('displays the hero image with correct alt text', () => {
            render(<Banner />);
            expect(screen.getByAltText('banner hero')).toBeInTheDocument();
        });
    });

    describe('TargetUser', () => {
        it('renders without crashing and displays the main text', () => {
            render(<TargetUser />);
            expect(screen.getByText('Dibuat Khusus Untuk UMKM Indonesia.')).toBeInTheDocument();
            expect(screen.getByText('Desain menyesuaikan dengan UMKM Indonesia.')).toBeInTheDocument();
        });

        it('displays all user type icons with correct alt text', () => {
            render(<TargetUser />);
            expect(screen.getByAltText('croissant')).toBeInTheDocument();
            expect(screen.getByAltText('restaurant')).toBeInTheDocument();
            expect(screen.getByAltText('bento')).toBeInTheDocument();
            expect(screen.getByAltText('online shop')).toBeInTheDocument();
        });
    });

    describe('TemplateSample', () => {
        it('renders without crashing and displays the title', () => {
            render(<TemplateSample />);
            expect(screen.getByText('Pilihan Desain Beragam')).toBeInTheDocument();
        });

        it('displays all template sample images', () => {
            render(<TemplateSample />);
            const images = screen.getAllByRole('img');
            expect(images.length).toBeGreaterThan(0); // Check that at least one image is rendered
            expect(screen.getByAltText('template two')).toBeInTheDocument();
            expect(screen.getByAltText('template three')).toBeInTheDocument();
        });
    });

    describe('IntegrationFeature', () => {
        it('renders without crashing and displays the main text', () => {
            render(<IntegrationFeature />);
            expect(screen.getByText('Terhubung Dengan berbagai Platform lain.')).toBeInTheDocument();
        });

        it('displays all integration icons with correct alt text', () => {
            render(<IntegrationFeature />);
            expect(screen.getByAltText('gofood')).toBeInTheDocument();
            expect(screen.getByAltText('grabfood')).toBeInTheDocument();
            expect(screen.getByAltText('shopeefood')).toBeInTheDocument();
            expect(screen.getByAltText('tokopedia')).toBeInTheDocument();
        });
    });
  // ... keep all your other tests unchanged, only replace jest.fn with vi.fn where needed
})


// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// // Mock components
// import Advantage from '../Advantage';
// import Banner from '../Banner';
// import Detail from '../Detail';
// import Footer from '../Footer';
// import IntegrationFeature from '../IntegrationFeature';
// import Jumbotron from '../Jumbotron';
// import QnA from '../QnA';
// import QnAItems from '../QnAItems';
// import TargetUser from '../TargetUser';
// import TemplateSample from '../TemplateSample';

// // Global Mocks for external dependencies
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     Link: ({ to, children }) => <a href={to}>{children}</a>,
// }));

// // Mock all image imports
// jest.mock('../../../../assets/images/Pixel-style-logo.png', () => 'logo.png');
// jest.mock('../../../../assets/images/jumbotron-hero.png', () => 'jumbotron-hero.png');
// jest.mock('../../../../assets/images/product-edit-hero.png', () => 'product-edit-hero.png');
// jest.mock('../../../../assets/images/link-mockup.png', () => 'link-mockup.png');
// jest.mock('../../../../assets/images/qr-code-scan.png', () => 'qr-code-scan.png');
// jest.mock('../../../../assets/images/croissant.png', () => 'croissant.png');
// jest.mock('../../../../assets/images/online-store.png', () => 'online-store.png');
// jest.mock('../../../../assets/images/restaurant.png', () => 'restaurant.png');
// jest.mock('../../../../assets/images/bento.png', () => 'bento.png');
// jest.mock('../../../../assets/images/gofood.png', () => 'gofood.png');
// jest.mock('../../../../assets/images/grabfood.png', () => 'grabfood.png');
// jest.mock('../../../../assets/images/shopee.png', () => 'shopee.png');
// jest.mock('../../../../assets/images/tokopedia.png', () => 'tokopedia.png');
// jest.mock('../../../../assets/images/belimbing-1.png', () => 'image-three.png');
// jest.mock('../../../../assets/images/zebra-pelari-1.png', () => 'image-four.png');
// jest.mock('../../../../assets/images/zebra-pelari-2.png', () => 'image-five.png');
// jest.mock('../../../../assets/images/melon-manis-1.png', () => 'image-six.png');
// jest.mock('../../../../assets/images/matahari-penerang-1.png', () => 'image-eight.png');
// jest.mock('../../../../assets/images/king-kebab-main-menu.png', () => 'king-kebab-menu.png');
// jest.mock('../../../../assets/images/greenfood-detail-items.png', () => 'greenfood-detail.png');
// jest.mock('../../../../assets/images/arrow-up.png', () => 'arrow-up.png');
// jest.mock('../../../../assets/images/arrow-down.png', () => 'arrow-down.png');

// // Mock external hooks
// jest.mock('../../../../hooks/useWindowSize', () => ({
//     useWindowSize: () => [1000, 800], // Mock a consistent window size for Jumbotron test
// }));

// // Mock data
// jest.mock('../../../../data/QnADataMockup', () => ({
//     QnAData: [
//         { title: 'Test Question 1', paragraph: 'Test Answer 1.' },
//         { title: 'Test Question 2', paragraph: 'Test Answer 2.' },
//     ],
// }));

// // --- Test Suite for Landing Page Components ---

// describe('Landing Page Components', () => {

//     describe('Detail', () => {
//         it('renders without crashing and displays the correct content', () => {
//         // We test that the component renders by checking for key text.
//             // We'll test all three possible 'detail' prop values.

//             // Test with 'product' prop
//             const { rerender } = render(<Detail handleDetail={() => {}} detail="product" />);
//             expect(screen.getByText(/Our product is digital page/i)).toBeInTheDocument();

//             // Rerender with 'price' prop
//             rerender(<Detail handleDetail={() => {}} detail="price" />);
//             expect(screen.getByText(/Our price is free for now/i)).toBeInTheDocument();

//             // Rerender with 'about' prop
//             rerender(<Detail handleDetail={() => {}} detail="about" />);
//             expect(screen.getByText(/Our company from Indonesia/i)).toBeInTheDocument();
//         });

//         it('calls handleDetail with false when the exit button is clicked', () => {
//             const mockHandleDetail = jest.fn();
//             render(<Detail handleDetail={mockHandleDetail} detail="product" />);

//             // We find the button by its text content, 'X'
//             const exitButton = screen.getByText('X');

//             // Simulate a click event
//             fireEvent.click(exitButton);

//             // Assert that the mock function was called with the correct argument
//             expect(mockHandleDetail).toHaveBeenCalledWith(false);
//         });
//     });

//     describe('Advantage', () => {
//         it('renders without crashing and displays the main title', () => {
//             render(<Advantage />);
//             expect(screen.getByText('Banyak Manfaatnya.')).toBeInTheDocument();
//         });

//         it('displays all expected headings and paragraphs', () => {
//             render(<Advantage />);
//             expect(screen.getByText('Informasi Produk.')).toBeInTheDocument();
//             expect(screen.getByText('Link dapat diletakan di berbagai media sosial untuk memberikan informasi tentang produk.')).toBeInTheDocument();
//             expect(screen.getByText('Link Iklan Online.')).toBeInTheDocument();
//             expect(screen.getByText('Link dapat diletakan di iklan online untuk memberi informasi lebih lanjut mengenai produk dalam iklan tersebut.')).toBeInTheDocument();
//             expect(screen.getByText('Menu Online.')).toBeInTheDocument();
//             expect(screen.getByText('QR Code dapat diletakan di meja pelanggan sebagai pengganti menu biasa. Pelanggan akan scan QR Code lalu terhubung ke halaman menu yang telah dibuat sebelumnya.')).toBeInTheDocument();
//             expect(screen.getByText('Promosi Offline.')).toBeInTheDocument();
//             expect(screen.getByText('QR Code dapat diletakan di media cetak sebagai metode promosi.')).toBeInTheDocument();
//         });
//     });

//     describe('Jumbotron', () => {
//         it('renders without crashing and displays key text', () => {
//             render(<Jumbotron handleDetail={() => {}} />);
//             expect(screen.getByText('Produk Terlihat lebih Menarik')).toBeInTheDocument();
//             expect(screen.getByText('Tingkatkan penjualan anda.')).toBeInTheDocument();
//         });

//         it('calls handleDetail with correct arguments when nav links are clicked', () => {
//             const mockHandleDetail = jest.fn();
//             render(<Jumbotron handleDetail={mockHandleDetail} />);
//             fireEvent.click(screen.getByText('Product'));
//             expect(mockHandleDetail).toHaveBeenCalledWith('product');
//             fireEvent.click(screen.getByText('Price'));
//             expect(mockHandleDetail).toHaveBeenCalledWith('price');
//             fireEvent.click(screen.getByText('About'));
//             expect(mockHandleDetail).toHaveBeenCalledWith('about');
//         });
//     });

//     describe('QnA', () => {
//         it('renders without crashing and displays the main title', () => {
//             render(<QnA />);
//             expect(screen.getByText('QnA')).toBeInTheDocument();
//         });

//         it('renders QnAItems for each item in the mocked data', () => {
//             render(<QnA />);
//             expect(screen.getByText('Test Question 1')).toBeInTheDocument();
//             expect(screen.getByText('Test Question 2')).toBeInTheDocument();
//         });
//     });

//     describe('QnAItems', () => {
//         it('renders with title but hides paragraph initially', () => {
//             const title = 'What is this product?';
//             const paragraph = 'It is a digital page.';
//             render(<QnAItems title={title} paragraph={paragraph} />);
//             expect(screen.getByText(title)).toBeInTheDocument();
//             expect(screen.queryByText(paragraph)).not.toBeInTheDocument();
//         });

//         it('shows paragraph when clicked', () => {
//             const title = 'What is this product?';
//             const paragraph = 'It is a digital page.';
//             render(<QnAItems title={title} paragraph={paragraph} />);
//             const item = screen.getByText(title).closest('div');
//             fireEvent.click(item);
//             expect(screen.getByText(paragraph)).toBeInTheDocument();
//         });

//         it('hides paragraph when clicked again', () => {
//             const title = 'What is this product?';
//             const paragraph = 'It is a digital page.';
//             render(<QnAItems title={title} paragraph={paragraph} />);
//             const item = screen.getByText(title).closest('div');
//             // First click to show
//             fireEvent.click(item);
//             // Second click to hide
//             fireEvent.click(item);
//             expect(screen.queryByText(paragraph)).not.toBeInTheDocument();
//         });
//     });

//     describe('Footer', () => {
//         it('renders without crashing and displays logo', () => {
//             render(<Footer />);
//             expect(screen.getByAltText('logo')).toBeInTheDocument();
//         });
//     });

//     describe('Banner', () => {
//         it('renders without crashing and displays text', () => {
//             render(<Banner />);
//             expect(screen.getByText('Mudah Buatnya.')).toBeInTheDocument();
//             expect(screen.getByText('Menampilkan produk secara menarik dengan mudah dan gratis.')).toBeInTheDocument();
//         });

//         it('displays the hero image with correct alt text', () => {
//             render(<Banner />);
//             expect(screen.getByAltText('banner hero')).toBeInTheDocument();
//         });
//     });

//     describe('TargetUser', () => {
//         it('renders without crashing and displays the main text', () => {
//             render(<TargetUser />);
//             expect(screen.getByText('Dibuat Khusus Untuk UMKM Indonesia.')).toBeInTheDocument();
//             expect(screen.getByText('Desain menyesuaikan dengan UMKM Indonesia.')).toBeInTheDocument();
//         });

//         it('displays all user type icons with correct alt text', () => {
//             render(<TargetUser />);
//             expect(screen.getByAltText('croissant')).toBeInTheDocument();
//             expect(screen.getByAltText('restaurant')).toBeInTheDocument();
//             expect(screen.getByAltText('bento')).toBeInTheDocument();
//             expect(screen.getByAltText('online shop')).toBeInTheDocument();
//         });
//     });

//     describe('TemplateSample', () => {
//         it('renders without crashing and displays the title', () => {
//             render(<TemplateSample />);
//             expect(screen.getByText('Pilihan Desain Beragam')).toBeInTheDocument();
//         });

//         it('displays all template sample images', () => {
//             render(<TemplateSample />);
//             const images = screen.getAllByRole('img');
//             expect(images.length).toBeGreaterThan(0); // Check that at least one image is rendered
//             expect(screen.getByAltText('template two')).toBeInTheDocument();
//             expect(screen.getByAltText('template three')).toBeInTheDocument();
//         });
//     });

//     describe('IntegrationFeature', () => {
//         it('renders without crashing and displays the main text', () => {
//             render(<IntegrationFeature />);
//             expect(screen.getByText('Terhubung Dengan berbagai Platform lain.')).toBeInTheDocument();
//         });

//         it('displays all integration icons with correct alt text', () => {
//             render(<IntegrationFeature />);
//             expect(screen.getByAltText('gofood')).toBeInTheDocument();
//             expect(screen.getByAltText('grabfood')).toBeInTheDocument();
//             expect(screen.getByAltText('shopeefood')).toBeInTheDocument();
//             expect(screen.getByAltText('tokopedia')).toBeInTheDocument();
//         });
//     });
// });
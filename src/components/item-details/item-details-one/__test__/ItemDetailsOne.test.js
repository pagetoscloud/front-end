import { render, screen, fireEvent } from '@testing-library/react';
import ItemDetailsOneEdit from '../ItemDetailsOneEdit';
import ItemDetailsOnePreview from '../ItemDetailsOnePreview';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('../../../../hooks/useWindowSize', () => ({
    useWindowSize: () => [1000, 800], // Mock window size for consistent testing
}));

describe('ItemDetailsOne Components', () => {
    let mockDispatch;
    let mockHandleEditMode;
    let mockHandleChangePage;
    let mockCurrentItems;
    let mockStyleData;
    let mockContentData;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
        mockHandleEditMode = jest.fn();
        mockHandleChangePage = jest.fn();
        mockCurrentItems = {
            name: 'Test Product',
            description: 'This is a test description.',
            price: 'Rp. 50.000',
            image: 'test-image.jpg',
        };
        mockStyleData = {
            itemDetails: {
                style: {
                    background: {},
                    image: {},
                    title: {},
                    paragraph: {},
                    price: {},
                }
            }
        };
        mockContentData = {
            product: [{
                listItems: [mockCurrentItems]
            }]
        };
    });

    describe('ItemDetailsOneEdit', () => {
        it('renders when page is "page two" and displays correct content', () => {
            render(
                <ItemDetailsOneEdit
                    page="page two"
                    styleData={mockStyleData}
                    contentData={mockContentData}
                    handleEditMode={mockHandleEditMode}
                />
            );
            expect(screen.getByDisplayValue(mockCurrentItems.name)).toBeInTheDocument();
            expect(screen.getByDisplayValue(mockCurrentItems.description)).toBeInTheDocument();
            expect(screen.getByDisplayValue(mockCurrentItems.price)).toBeInTheDocument();
        });

        it('calls handleEditMode with correct parameters when title is clicked', () => {
            render(
                <ItemDetailsOneEdit
                    page="page two"
                    styleData={mockStyleData}
                    contentData={mockContentData}
                    handleEditMode={mockHandleEditMode}
                />
            );
            fireEvent.click(screen.getByDisplayValue(mockCurrentItems.name));
            expect(mockHandleEditMode).toHaveBeenCalledWith({ mode: 'Text', type: 'title', component: 'itemDetails' });
        });
    });

    describe('ItemDetailsOnePreview', () => {
        it('renders when page is "page two" and displays correct content', () => {
            render(
                <ItemDetailsOnePreview
                    page="page two"
                    styleData={mockStyleData}
                    currentItems={mockCurrentItems}
                    handleChangePage={mockHandleChangePage}
                />
            );
            expect(screen.getByText(mockCurrentItems.name)).toBeInTheDocument();
            expect(screen.getByText(mockCurrentItems.description)).toBeInTheDocument();
            expect(screen.getByText(mockCurrentItems.price)).toBeInTheDocument();
        });

        it('calls handleChangePage when button is clicked', () => {
            render(
                <ItemDetailsOnePreview
                    page="page two"
                    styleData={mockStyleData}
                    currentItems={mockCurrentItems}
                    handleChangePage={mockHandleChangePage}
                />
            );
            fireEvent.click(screen.getByAltText('arrow down'));
            expect(mockHandleChangePage).toHaveBeenCalledWith('page three');
        });
    });
});
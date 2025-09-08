import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemTwoEdit from '../ItemTwoEdit';
import ItemTwoPreview from '../ItemTwoPreview';
import { useDispatch } from 'react-redux';
import { editProductText } from '../../../../features/template-editor/templateProductSlice';

// Mock Redux hooks and actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../../features/template-editor/templateProductSlice', () => ({
  editProductText: jest.fn(),
}));

const mockStyleData = {
  product: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      price: { color: 'green' },
      background: { background: 'white' },
      image: { objectFit: 'cover' },
    },
  },
};

const mockContentData = {
  name: 'Mock Item',
  description: 'This is a mock description for the item.',
  price: 'IDR 50.000',
  image: 'mock-item.jpg',
  id: 'item-2',
};

const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

describe('ItemTwo Components', () => {
    // Test suite for ItemTwoEdit.js
    describe('ItemTwoEdit', () => {
        const mockHandleEditMode = jest.fn();
        const mockHandleShow = jest.fn();
        const mockHandleChangeTitle = jest.fn();
        const mockHandleChangeDescription = jest.fn();
        const mockHandleChangePrice = jest.fn();

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('renders correctly and displays initial content in "edit" mode', () => {
            render(
                <ItemTwoEdit
                    items={mockContentData}
                    styleData={mockStyleData}
                    title={mockContentData.name}
                    description={mockContentData.description}
                    price={mockContentData.price}
                    data={mockContentData}
                    paragraphShorter={mockParagraphShorter}
                    handleEditMode={mockHandleEditMode}
                    handleShow={mockHandleShow}
                    handleChangeTitle={mockHandleChangeTitle}
                    handleChangeDescription={mockHandleChangeDescription}
                    handleChangePrice={mockHandleChangePrice}
                    onEdit={true}
                    showDetail={true}
                />
            );

            expect(screen.getByDisplayValue('Mock Item')).toBeInTheDocument();
            expect(screen.getByDisplayValue('This is a mock description for the item.')).toBeInTheDocument();
            expect(screen.getByDisplayValue('IDR 50.000')).toBeInTheDocument();
        });

        it('calls the correct change handler when the title is changed', () => {
            render(
                <ItemTwoEdit
                    items={mockContentData}
                    styleData={mockStyleData}
                    title={mockContentData.name}
                    description={mockContentData.description}
                    price={mockContentData.price}
                    data={mockContentData}
                    paragraphShorter={mockParagraphShorter}
                    handleEditMode={mockHandleEditMode}
                    handleShow={mockHandleShow}
                    handleChangeTitle={mockHandleChangeTitle}
                    handleChangeDescription={mockHandleChangeDescription}
                    handleChangePrice={mockHandleChangePrice}
                    onEdit={true}
                    showDetail={true}
                />
            );
            const titleInput = screen.getByDisplayValue('Mock Item');
            fireEvent.change(titleInput, { target: { value: 'New Title' } });
            expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title');
        });

        it('calls handleEditMode when the title input is clicked', () => {
            render(
                <ItemTwoEdit
                    items={mockContentData}
                    styleData={mockStyleData}
                    title={mockContentData.name}
                    description={mockContentData.description}
                    price={mockContentData.price}
                    data={mockContentData}
                    paragraphShorter={mockParagraphShorter}
                    handleEditMode={mockHandleEditMode}
                    handleShow={mockHandleShow}
                    handleChangeTitle={mockHandleChangeTitle}
                    handleChangeDescription={mockHandleChangeDescription}
                    handleChangePrice={mockHandleChangePrice}
                    onEdit={true}
                    showDetail={true}
                />
            );
            const titleInput = screen.getByDisplayValue('Mock Item');
            fireEvent.click(titleInput);
            expect(mockHandleEditMode).toHaveBeenCalledWith({
                mode: 'Text',
                type: 'title',
                component: 'product',
            });
        });
    });

    // Test suite for ItemTwoPreview.js
    describe('ItemTwoPreview', () => {
        const mockHandleChangeCurrentItems = jest.fn();
        const mockHandleChangePage = jest.fn();

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('renders correctly and displays the content', () => {
            render(
                <ItemTwoPreview
                    styleData={mockStyleData}
                    data={mockContentData}
                    title={mockContentData.name}
                    price={mockContentData.price}
                    description={mockContentData.description}
                    paragraphShorter={mockParagraphShorter}
                    handleChangeCurrentItems={mockHandleChangeCurrentItems}
                    handleChangePage={mockHandleChangePage}
                />
            );
            expect(screen.getByText('Mock Item')).toBeInTheDocument();
            expect(screen.getByText('This is a mock description for the item.')).toBeInTheDocument();
            expect(screen.getByText('IDR 50.000')).toBeInTheDocument();
            expect(screen.getByAltText('Mock Item')).toHaveAttribute('src', 'mock-item.jpg');
        });

        it('calls the correct functions when clicked', () => {
            render(
                <ItemTwoPreview
                    styleData={mockStyleData}
                    data={mockContentData}
                    title={mockContentData.name}
                    price={mockContentData.price}
                    description={mockContentData.description}
                    paragraphShorter={mockParagraphShorter}
                    handleChangeCurrentItems={mockHandleChangeCurrentItems}
                    handleChangePage={mockHandleChangePage}
                />
            );
            const itemWrapper = screen.getByText('Mock Item').closest('div');
            fireEvent.click(itemWrapper);
            expect(mockHandleChangePage).toHaveBeenCalledWith('page two');
            expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData);
        });
    });
});
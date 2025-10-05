// ItemFour.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, beforeEach, expect } from 'vitest';

import ItemFourEdit from '../ItemFourEdit';
import ItemFourPreview from '../ItemFourPreview';

// Mock Redux hooks and actions
vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));

vi.mock('../../../../features/template-editor/templateProductSlice', () => ({
  editProductText: vi.fn(),
}));

const mockStyleData = {
  specialItems: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      price: { color: 'green' },
      background: { background: 'white' },
      image: { objectFit: 'cover' },
      circle: { background: 'blue' },
    },
  },
};

const mockContentData = {
  name: 'Mock Item Four',
  description: 'This is a mock description for the fourth item.',
  price: 75000,
  image: 'mock-item-four.jpg',
  id: 'item-4',
};

const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

describe('ItemFour Components', () => {
  // Test suite for ItemFourEdit.js
  describe('ItemFourEdit', () => {
    const mockHandleEditMode = vi.fn();
    const mockHandleChangeTitle = vi.fn();
    const mockHandleChangePrice = vi.fn();
    const mockHandleChangeDescription = vi.fn();
    const mockHandleClickActiveBox = vi.fn();
    const mockHandleClickActiveImageBox = vi.fn();
    const mockHandleDeleteProduct = vi.fn();
    const mockHandleShow = vi.fn();

    // Mock the 'items' prop
    const mockItems = { name: 'Mock Category' };

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('renders correctly and allows text changes when in edit mode', () => {
      render(
        <ItemFourEdit
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          price={mockContentData.price}
          description={mockContentData.description}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleEditMode={mockHandleEditMode}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          handleShow={mockHandleShow}
          onEdit={true}
          items={mockItems}
        />
      );

      const titleInput = screen.getByDisplayValue(mockContentData.name);
      const priceInput = screen.getByDisplayValue('Rp75.000');
      const descriptionInput = screen.getByDisplayValue(
        mockParagraphShorter(mockContentData.description)
      );

      fireEvent.change(titleInput, { target: { value: 'New Title' } });
      expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title');

      fireEvent.change(priceInput, { target: { value: 100000 } });
      expect(mockHandleChangePrice).toHaveBeenCalledWith('100000');

      fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
      expect(mockHandleChangeDescription).toHaveBeenCalledWith('New Description');
    });

    it('calls the correct functions when interacting with the component', () => {
      render(
        <ItemFourEdit
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          price={mockContentData.price}
          description={mockContentData.description}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleEditMode={mockHandleEditMode}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          handleShow={mockHandleShow}
          onEdit={true}
          activeBox={true}
          activeImageBox={true}
          items={mockItems}
        />
      );

      const deleteButton = screen.getByRole('button', { name: /x/i });
      fireEvent.click(deleteButton);
      expect(mockHandleDeleteProduct).toHaveBeenCalled();

      const imageClickArea = screen.getByAltText('Mock Item Four').closest('div');
      fireEvent.click(imageClickArea);
      expect(mockHandleClickActiveImageBox).toHaveBeenCalledWith(true);
      expect(mockHandleEditMode).toHaveBeenCalledWith(expect.objectContaining({ mode: 'Image' }));

      const backgroundClickArea = screen.getByTestId('background-click-area');
      fireEvent.click(backgroundClickArea);
      expect(mockHandleClickActiveBox).toHaveBeenCalledWith(true);
      expect(mockHandleEditMode).toHaveBeenCalledWith(expect.objectContaining({ mode: 'Background' }));
    });
  });

  // Test suite for ItemFourPreview.js
  describe('ItemFourPreview', () => {
    const mockHandleChangeCurrentItems = vi.fn();
    const mockHandleChangePage = vi.fn();

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('renders correctly and displays the content', () => {
      render(
        <ItemFourPreview
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

      expect(screen.getByText('Mock Item Four')).toBeInTheDocument();
      expect(screen.getByText('This...')).toBeInTheDocument();
      expect(screen.getByText('Rp 75.000,00')).toBeInTheDocument();
      expect(screen.getByAltText('Mock Item Four')).toHaveAttribute('src', 'mock-item-four.jpg');
    });

    it('calls the correct functions when clicked', () => {
      render(
        <ItemFourPreview
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

      const itemWrapper = screen.getByText('Mock Item Four').closest('div');
      fireEvent.click(itemWrapper);
      expect(mockHandleChangePage).toHaveBeenCalledWith('page two');
      expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData);
    });
  });
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ItemFourEdit from '../ItemFourEdit';
// import ItemFourPreview from '../ItemFourPreview';

// import { useDispatch } from 'react-redux';
// import { editProductText } from '../../../../features/template-editor/templateProductSlice';

// const mockStyleData = {
//   specialItems: {
//     style: {
//       title: { color: 'black' },
//       paragraph: { color: 'gray' },
//       price: { color: 'green' },
//       background: { background: 'white' },
//       image: { objectFit: 'cover' },
//       circle: { background: 'blue' },
//     },
//   },
// };

// const mockContentData = {
//   name: 'Mock Item Four',
//   description: 'This is a mock description for the fourth item.',
//   price: 'IDR 75.000',
//   image: 'mock-item-four.jpg',
//   id: 'item-4',
// };

// const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

// describe('ItemFour Components', () => {
//     // Test suite for ItemFourEdit.js
//     describe('ItemFourEdit', () => {
//         const mockHandleEditMode = jest.fn();
//         const mockHandleChangeTitle = jest.fn();
//         const mockHandleChangePrice = jest.fn();
//         const mockHandleChangeDescription = jest.fn();
//         const mockHandleClickActiveBox = jest.fn();
//         const mockHandleClickActiveImageBox = jest.fn();
//         const mockHandleDeleteProduct = jest.fn();
//         const mockHandleShow = jest.fn();

//         // Mock the 'items' prop which was causing the TypeError
//         const mockItems = { name: 'Mock Category' };

//         beforeEach(() => {
//             jest.clearAllMocks();
//         });

//         it('renders correctly and allows text changes when in edit mode', () => {
//             render(
//                 <ItemFourEdit
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     price={mockContentData.price}
//                     description={mockContentData.description}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleEditMode={mockHandleEditMode}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangePrice={mockHandleChangePrice}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleClickActiveBox={mockHandleClickActiveBox}
//                     handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                     handleDeleteProduct={mockHandleDeleteProduct}
//                     handleShow={mockHandleShow}
//                     onEdit={true}
//                     items={mockItems} // Pass the mock items prop here
//                 />
//             );

//             const titleInput = screen.getByDisplayValue(mockContentData.name);
//             const priceInput = screen.getByDisplayValue(mockContentData.price);
//             const descriptionInput = screen.getByDisplayValue(mockParagraphShorter(mockContentData.description));

//             fireEvent.change(titleInput, { target: { value: 'New Title' } });
//             expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title');

//             fireEvent.change(priceInput, { target: { value: 'IDR 100.000' } });
//             expect(mockHandleChangePrice).toHaveBeenCalledWith('IDR 100.000');

//             fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
//             expect(mockHandleChangeDescription).toHaveBeenCalledWith('New Description');
//         });

//         it('calls the correct functions when interacting with the component', () => {
//             render(
//                 <ItemFourEdit
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     price={mockContentData.price}
//                     description={mockContentData.description}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleEditMode={mockHandleEditMode}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangePrice={mockHandleChangePrice}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleClickActiveBox={mockHandleClickActiveBox}
//                     handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                     handleDeleteProduct={mockHandleDeleteProduct}
//                     handleShow={mockHandleShow}
//                     onEdit={true}
//                     activeBox={true}
//                     activeImageBox={true}
//                     items={mockItems} // Pass the mock items prop here
//                 />
//             );

//             const deleteButton = screen.getByRole('button', { name: /x/i });
//             fireEvent.click(deleteButton);
//             expect(mockHandleDeleteProduct).toHaveBeenCalled();

//             const imageClickArea = screen.getByAltText('Mock Item Four').closest('div');
//             fireEvent.click(imageClickArea);
//             expect(mockHandleClickActiveImageBox).toHaveBeenCalledWith(true);
//             expect(mockHandleEditMode).toHaveBeenCalledWith(expect.objectContaining({ mode: 'Image' }));

//             // const backgroundClickArea = screen.getByRole('button', { name: '' }).closest('div');
//             // const backgroundClickArea = screen.getByRole('button', { name: 'X' }).closest('div');
//             const backgroundClickArea = screen.getByTestId('background-click-area');
//             fireEvent.click(backgroundClickArea);
//             expect(mockHandleClickActiveBox).toHaveBeenCalledWith(true);
//             expect(mockHandleEditMode).toHaveBeenCalledWith(expect.objectContaining({ mode: 'Background' }));
//         });
//     });

//     // Test suite for ItemThreePreview.js
//     describe('ItemFourPreview', () => {
//         const mockHandleChangeCurrentItems = jest.fn();
//         const mockHandleChangePage = jest.fn();

//         beforeEach(() => {
//             jest.clearAllMocks();
//         });

//         it('renders correctly and displays the content', () => {
//             render(
//                 <ItemFourPreview
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     price={mockContentData.price}
//                     description={mockContentData.description}
//                     paragraphShorter={mockParagraphShorter}
//                     handleChangeCurrentItems={mockHandleChangeCurrentItems}
//                     handleChangePage={mockHandleChangePage}
//                 />
//             );

//             expect(screen.getByText('Mock Item Four')).toBeInTheDocument();
//             expect(screen.getByText('This...')).toBeInTheDocument();
//             expect(screen.getByText('IDR 75.000')).toBeInTheDocument();
//             expect(screen.getByAltText('Mock Item Four')).toHaveAttribute('src', 'mock-item-four.jpg');
//         });

//         it('calls the correct functions when clicked', () => {
//             render(
//                 <ItemFourPreview
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     price={mockContentData.price}
//                     description={mockContentData.description}
//                     paragraphShorter={mockParagraphShorter}
//                     handleChangeCurrentItems={mockHandleChangeCurrentItems}
//                     handleChangePage={mockHandleChangePage}
//                 />
//             );
//             const itemWrapper = screen.getByText('Mock Item Four').closest('div');
//             fireEvent.click(itemWrapper);
//             expect(mockHandleChangePage).toHaveBeenCalledWith('page two');
//             expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData);
//         });
//     });
// });
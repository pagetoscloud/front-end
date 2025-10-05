// ItemFive.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, beforeEach, expect } from 'vitest';

import { useDispatch } from 'react-redux';
import { changeItemsText } from '../../../../features/template-editor/templateContentSlice';
import ItemFiveEdit from '../ItemFiveEdit';
import ItemFivePreview from '../ItemFivePreview';

// Mock react-redux
vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));

// Mock slice
vi.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeItemsText: vi.fn(),
}));

describe('ItemFive Components', () => {
  let mockDispatch;
  let mockHandleEditMode;
  let mockHandleShow;
  let mockHandleChangeTitle;
  let mockHandleChangePrice;
  let mockHandleChangeDescription;
  let mockHandleClickActiveBox;
  let mockHandleClickActiveImageBox;
  let mockHandleDeleteProduct;
  let mockParagraphShorter;
  let mockData;
  let mockItems;
  let mockStyleData;

  beforeEach(() => {
    mockDispatch = vi.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockHandleEditMode = vi.fn();
    mockHandleShow = vi.fn();
    mockHandleChangeTitle = vi.fn();
    mockHandleChangePrice = vi.fn();
    mockHandleChangeDescription = vi.fn();
    mockHandleClickActiveBox = vi.fn();
    mockHandleClickActiveImageBox = vi.fn();
    mockHandleDeleteProduct = vi.fn();
    mockParagraphShorter = vi.fn((text) => text.slice(0, 10) + '...');
    mockData = {
      id: '1',
      name: 'Test Item',
      description: 'This is a long description for the test item.',
      price: 10000,
      image: 'test-image.jpg',
    };
    mockItems = {
      id: '5',
      name: 'Special Items',
      items: [mockData],
    };
    mockStyleData = {
      product: {
        style: {
          title: {},
          paragraph: {},
          price: {},
          background: {},
          image: {},
        },
      },
      specialItems: {
        style: {
          title: {},
          paragraph: {},
          price: {},
          image: { borderRadius: '5px' },
          background: {},
          button: {},
        },
      },
    };
  });

  describe('ItemFiveEdit', () => {
    it('renders without crashing and displays the correct content', () => {
      render(
        <ItemFiveEdit
          styleData={mockStyleData}
          data={mockData}
          items={mockItems}
          title={mockData.name}
          description={mockData.description}
          price={mockData.price}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          activeBox={false}
          activeImageBox={false}
        />
      );
      expect(screen.getByDisplayValue(mockData.name)).toBeInTheDocument();
      expect(screen.getByDisplayValue("Rp10.000")).toBeInTheDocument();
      expect(
        screen.getByDisplayValue(mockParagraphShorter(mockData.description))
      ).toBeInTheDocument();
      // expect(screen.getByAltText('cross')).toBeInTheDocument();
    });

    it('calls the handleEditMode function with correct parameters when text areas are clicked', () => {
      render(
        <ItemFiveEdit
          styleData={mockStyleData}
          data={mockData}
          items={mockItems}
          title={mockData.name}
          description={mockData.description}
          price={mockData.price}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          activeBox={false}
          activeImageBox={false}
        />
      );
      fireEvent.click(screen.getByDisplayValue(mockData.name));
      expect(mockHandleEditMode).toHaveBeenCalledWith({
        mode: 'Text',
        type: 'title',
        component: 'specialItems',
      });
    });

    it('calls the handleDeleteProduct function when the delete button is clicked', () => {
      render(
        <ItemFiveEdit
          styleData={mockStyleData}
          data={mockData}
          items={mockItems}
          title={mockData.name}
          description={mockData.description}
          price={mockData.price}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          activeBox={true}
          activeImageBox={false}
        />
      );
      fireEvent.click(screen.getByText('X'));
      expect(mockHandleDeleteProduct).toHaveBeenCalled();
    });
  });

  describe('ItemFivePreview', () => {
    it('renders without crashing and displays the correct content', () => {
      render(
        <ItemFivePreview
          styleData={mockStyleData}
          data={mockData}
          title={mockData.name}
          description={mockData.description}
          price={mockData.price}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleShow={() => {}}
          handleChangeCurrentItems={() => {}}
          handleChangePage={() => {}}
        />
      );
      expect(screen.getByText(mockData.name)).toBeInTheDocument();
      expect(screen.getByText('Rp 10.000,00')).toBeInTheDocument();
      expect(
        screen.getByText(mockParagraphShorter(mockData.description))
      ).toBeInTheDocument();
      expect(screen.getByAltText(mockData.name)).toBeInTheDocument();
    });

    it('calls handleChangePage and handleChangeCurrentItems on click', () => {
      const handleChangePage = vi.fn();
      const handleChangeCurrentItems = vi.fn();
      render(
        <ItemFivePreview
          styleData={mockStyleData}
          data={mockData}
          title={mockData.name}
          description={mockData.description}
          price={mockData.price}
          paragraphShorter={mockParagraphShorter}
          showDetail={false}
          handleShow={() => {}}
          handleChangeCurrentItems={handleChangeCurrentItems}
          handleChangePage={handleChangePage}
        />
      );
      fireEvent.click(screen.getByText(mockData.name));
      expect(handleChangePage).toHaveBeenCalledWith('page two');
      expect(handleChangeCurrentItems).toHaveBeenCalledWith(mockData);
    });
  });
});


// import { render, screen, fireEvent } from '@testing-library/react';
// import { useDispatch } from 'react-redux';
// import { changeItemsText } from '../../../../features/template-editor/templateContentSlice';
// import ItemFiveEdit from '../ItemFiveEdit';
// import ItemFivePreview from '../ItemFivePreview';

// jest.mock('react-redux', () => ({
//     useDispatch: jest.fn(),
// }));

// describe('ItemFive Components', () => {
//     let mockDispatch;
//     let mockHandleEditMode;
//     let mockHandleShow;
//     let mockHandleChangeTitle;
//     let mockHandleChangePrice;
//     let mockHandleChangeDescription;
//     let mockHandleClickActiveBox;
//     let mockHandleClickActiveImageBox;
//     let mockHandleDeleteProduct;
//     let mockParagraphShorter;
//     let mockData;
//     let mockItems;
//     let mockStyleData;

//     beforeEach(() => {
//         mockDispatch = jest.fn();
//         useDispatch.mockReturnValue(mockDispatch);
//         mockHandleEditMode = jest.fn();
//         mockHandleShow = jest.fn();
//         mockHandleChangeTitle = jest.fn();
//         mockHandleChangePrice = jest.fn();
//         mockHandleChangeDescription = jest.fn();
//         mockHandleClickActiveBox = jest.fn();
//         mockHandleClickActiveImageBox = jest.fn();
//         mockHandleDeleteProduct = jest.fn();
//         mockParagraphShorter = jest.fn(text => text.slice(0, 10) + '...');
//         mockData = {
//             id: '1',
//             name: 'Test Item',
//             description: 'This is a long description for the test item.',
//             price: 'Rp. 10.000',
//             image: 'test-image.jpg',
//         };
//         mockItems = {
//             id: '5',
//             name: 'Special Items',
//             items: [mockData],
//         };
//         mockStyleData = {
//             product: {
//                 style: {
//                     title: {},
//                     paragraph: {},
//                     price: {},
//                     background: {},
//                     image: {},
//                 }
//             },
//             specialItems: {
//                 style: {
//                     title: {},
//                     paragraph: {},
//                     price: {},
//                     image: {borderRadius: '5px'},
//                     background: {},
//                     button: {},
//                 }
//             }
//         };
//     });

//     describe('ItemFiveEdit', () => {
//         it('renders without crashing and displays the correct content', () => {
//             render(
//                 <ItemFiveEdit
//                     styleData={mockStyleData}
//                     data={mockData}
//                     items={mockItems}
//                     title={mockData.name}
//                     description={mockData.description}
//                     price={mockData.price}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangePrice={mockHandleChangePrice}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleClickActiveBox={mockHandleClickActiveBox}
//                     handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                     handleDeleteProduct={mockHandleDeleteProduct}
//                     onEdit={true}
//                     activeBox={false}
//                     activeImageBox={false}
//                 />
//             );
//             expect(screen.getByDisplayValue(mockData.name)).toBeInTheDocument();
//             expect(screen.getByDisplayValue(mockData.price)).toBeInTheDocument();
//             expect(screen.getByDisplayValue(mockParagraphShorter(mockData.description))).toBeInTheDocument();
//             expect(screen.getByAltText('cross')).toBeInTheDocument();
//         });

//         it('calls the handleEditMode function with correct parameters when text areas are clicked', () => {
//             render(
//                 <ItemFiveEdit
//                     styleData={mockStyleData}
//                     data={mockData}
//                     items={mockItems}
//                     title={mockData.name}
//                     description={mockData.description}
//                     price={mockData.price}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangePrice={mockHandleChangePrice}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleClickActiveBox={mockHandleClickActiveBox}
//                     handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                     handleDeleteProduct={mockHandleDeleteProduct}
//                     onEdit={true}
//                     activeBox={false}
//                     activeImageBox={false}
//                 />
//             );
//             fireEvent.click(screen.getByDisplayValue(mockData.name));
//             expect(mockHandleEditMode).toHaveBeenCalledWith({ mode: 'Text', type: 'title', component: 'specialItems' });
//         });
        
//         it('calls the handleDeleteProduct function when the delete button is clicked', () => {
//             render(
//                 <ItemFiveEdit
//                     styleData={mockStyleData}
//                     data={mockData}
//                     items={mockItems}
//                     title={mockData.name}
//                     description={mockData.description}
//                     price={mockData.price}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangePrice={mockHandleChangePrice}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleClickActiveBox={mockHandleClickActiveBox}
//                     handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                     handleDeleteProduct={mockHandleDeleteProduct}
//                     onEdit={true}
//                     activeBox={true}
//                     activeImageBox={false}
//                 />
//             );
//             fireEvent.click(screen.getByText('X'));
//             expect(mockHandleDeleteProduct).toHaveBeenCalled();
//         });
//     });

//     describe('ItemFivePreview', () => {
//         it('renders without crashing and displays the correct content', () => {
//             render(
//                 <ItemFivePreview
//                     styleData={mockStyleData}
//                     data={mockData}
//                     title={mockData.name}
//                     description={mockData.description}
//                     price={mockData.price}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleShow={() => {}}
//                     handleChangeCurrentItems={() => {}}
//                     handleChangePage={() => {}}
//                 />
//             );
//             expect(screen.getByText(mockData.name)).toBeInTheDocument();
//             expect(screen.getByText(mockData.price)).toBeInTheDocument();
//             expect(screen.getByText(mockParagraphShorter(mockData.description))).toBeInTheDocument();
//             expect(screen.getByAltText(mockData.name)).toBeInTheDocument();
//         });

//         it('calls handleChangePage and handleChangeCurrentItems on click', () => {
//             const handleChangePage = jest.fn();
//             const handleChangeCurrentItems = jest.fn();
//             render(
//                 <ItemFivePreview
//                     styleData={mockStyleData}
//                     data={mockData}
//                     title={mockData.name}
//                     description={mockData.description}
//                     price={mockData.price}
//                     paragraphShorter={mockParagraphShorter}
//                     showDetail={false}
//                     handleShow={() => {}}
//                     handleChangeCurrentItems={handleChangeCurrentItems}
//                     handleChangePage={handleChangePage}
//                 />
//             );
//             fireEvent.click(screen.getByText(mockData.name));
//             expect(handleChangePage).toHaveBeenCalledWith('page two');
//             expect(handleChangeCurrentItems).toHaveBeenCalledWith(mockData);
//         });
//     });
// });
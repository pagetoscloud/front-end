import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import ItemThreeEdit from '../ItemThreeEdit'
import ItemThreePreview from '../ItemThreePreview'
import { useDispatch } from 'react-redux'
import { editProductText } from '../../../../features/template-editor/templateProductSlice'

// --- Mock Redux hooks and actions ---
vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}))

vi.mock('../../../../features/template-editor/templateProductSlice', () => ({
  editProductText: vi.fn(),
}))

const mockStyleData = {
  product: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      price: { color: 'green' },
      background: { background: 'white' },
      image: { objectFit: 'cover' },
      circle: { background: 'blue' },
    },
  },
}

const mockContentData = {
  name: 'Mock Item',
  description: 'This is a mock description for the item.',
  price: 'IDR 50.000',
  image: 'mock-item.jpg',
  id: 'item-3',
}

const mockParagraphShorter = (text) => text.split(' ')[0] + '...'

// --- Test Suites ---
describe('ItemThree Components', () => {
  // Test suite for ItemThreeEdit.js
  describe('ItemThreeEdit', () => {
    const mockHandleEditMode = vi.fn()
    const mockHandleShow = vi.fn()
    const mockHandleChangeTitle = vi.fn()
    const mockHandleChangeDescription = vi.fn()
    const mockHandleChangePrice = vi.fn()
    const mockDispatch = vi.fn()

    beforeEach(() => {
      useDispatch.mockReturnValue(mockDispatch)
      vi.clearAllMocks()
    })

    it('renders correctly and displays initial content in "edit" mode', () => {
      render(
        <ItemThreeEdit
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          items={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangeDescription={mockHandleChangeDescription}
          handleChangePrice={mockHandleChangePrice}
          onEdit={true}
          showDetail={true}
        />
      )

      expect(screen.getByDisplayValue('Mock Item')).toBeInTheDocument()
      expect(screen.getByDisplayValue('This is a mock description for the item.')).toBeInTheDocument()
      expect(screen.getByDisplayValue('IDR 50.000')).toBeInTheDocument()
    })

    it('calls the correct change handler when the title is changed', () => {
      render(
        <ItemThreeEdit
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          items={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangeDescription={mockHandleChangeDescription}
          handleChangePrice={mockHandleChangePrice}
          onEdit={true}
          showDetail={true}
        />
      )
      const titleInput = screen.getByDisplayValue('Mock Item')
      fireEvent.change(titleInput, { target: { value: 'New Title' } })
      expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title')
    })

    it('calls handleEditMode when the image is clicked', () => {
      render(
        <ItemThreeEdit
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          items={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleShow={mockHandleShow}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangeDescription={mockHandleChangeDescription}
          handleChangePrice={mockHandleChangePrice}
          onEdit={true}
          showDetail={true}
        />
      )
      const image = screen.getByAltText('Mock Item')
      fireEvent.click(image)
      expect(mockHandleEditMode).toHaveBeenCalledWith({
        mode: 'Image',
        type: 'image',
        component: 'product',
        id: mockContentData.id,
        image: mockContentData.image,
        category: mockContentData.name,
      })
    })
  })

  // Test suite for ItemThreePreview.js
  describe('ItemThreePreview', () => {
    const mockHandleChangeCurrentItems = vi.fn()
    const mockHandleChangePage = vi.fn()

    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('renders correctly and displays the content', () => {
      render(
        <ItemThreePreview
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          price={mockContentData.price}
          description={mockContentData.description}
          paragraphShorter={mockParagraphShorter}
          handleChangeCurrentItems={mockHandleChangeCurrentItems}
          handleChangePage={mockHandleChangePage}
        />
      )

      expect(screen.getByText('Mock Item')).toBeInTheDocument()
      expect(screen.getByText('This...')).toBeInTheDocument()
      expect(screen.getByText('IDR 50.000')).toBeInTheDocument()
      expect(screen.getByAltText('Mock Item')).toHaveAttribute('src', 'mock-item.jpg')
    })

    it('calls the correct functions when clicked', () => {
      render(
        <ItemThreePreview
          styleData={mockStyleData}
          data={mockContentData}
          title={mockContentData.name}
          price={mockContentData.price}
          description={mockContentData.description}
          paragraphShorter={mockParagraphShorter}
          handleChangeCurrentItems={mockHandleChangeCurrentItems}
          handleChangePage={mockHandleChangePage}
        />
      )
      const itemWrapper = screen.getByText('Mock Item').closest('div')
      fireEvent.click(itemWrapper)
      expect(mockHandleChangePage).toHaveBeenCalledWith('page two')
      expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData)
    })
  })
})



// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ItemThreeEdit from '../ItemThreeEdit';
// import ItemThreePreview from '../ItemThreePreview';
// import { useDispatch } from 'react-redux';
// import { editProductText } from '../../../../features/template-editor/templateProductSlice';

// // Mock Redux hooks and actions
// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// jest.mock('../../../../features/template-editor/templateProductSlice', () => ({
//   editProductText: jest.fn(),
// }));

// const mockStyleData = {
//   product: {
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
//   name: 'Mock Item',
//   description: 'This is a mock description for the item.',
//   price: 'IDR 50.000',
//   image: 'mock-item.jpg',
//   id: 'item-3',
// };

// const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

// describe('ItemThree Components', () => {
//     // Test suite for ItemThreeEdit.js
//     describe('ItemThreeEdit', () => {
//         const mockHandleEditMode = jest.fn();
//         const mockHandleShow = jest.fn();
//         const mockHandleChangeTitle = jest.fn();
//         const mockHandleChangeDescription = jest.fn();
//         const mockHandleChangePrice = jest.fn();
//         const mockDispatch = jest.fn();

//         beforeEach(() => {
//             useDispatch.mockReturnValue(mockDispatch);
//             jest.clearAllMocks();
//         });

//         it('renders correctly and displays initial content in "edit" mode', () => {
//             render(
//                 <ItemThreeEdit
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     description={mockContentData.description}
//                     price={mockContentData.price}
//                     items={mockContentData}
//                     paragraphShorter={mockParagraphShorter}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleChangePrice={mockHandleChangePrice}
//                     onEdit={true}
//                     showDetail={true}
//                 />
//             );

//             expect(screen.getByDisplayValue('Mock Item')).toBeInTheDocument();
//             expect(screen.getByDisplayValue('This is a mock description for the item.')).toBeInTheDocument();
//             expect(screen.getByDisplayValue('IDR 50.000')).toBeInTheDocument();
//         });

//         it('calls the correct change handler when the title is changed', () => {
//             render(
//                 <ItemThreeEdit
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     description={mockContentData.description}
//                     price={mockContentData.price}
//                     items={mockContentData}
//                     paragraphShorter={mockParagraphShorter}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleChangePrice={mockHandleChangePrice}
//                     onEdit={true}
//                     showDetail={true}
//                 />
//             );
//             const titleInput = screen.getByDisplayValue('Mock Item');
//             fireEvent.change(titleInput, { target: { value: 'New Title' } });
//             expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title');
//         });

//         it('calls handleEditMode when the image is clicked', () => {
//             render(
//                 <ItemThreeEdit
//                     styleData={mockStyleData}
//                     data={mockContentData}
//                     title={mockContentData.name}
//                     description={mockContentData.description}
//                     price={mockContentData.price}
//                     items={mockContentData}
//                     paragraphShorter={mockParagraphShorter}
//                     handleEditMode={mockHandleEditMode}
//                     handleShow={mockHandleShow}
//                     handleChangeTitle={mockHandleChangeTitle}
//                     handleChangeDescription={mockHandleChangeDescription}
//                     handleChangePrice={mockHandleChangePrice}
//                     onEdit={true}
//                     showDetail={true}
//                 />
//             );
//             const image = screen.getByAltText('Mock Item');
//             fireEvent.click(image);
//             expect(mockHandleEditMode).toHaveBeenCalledWith({
//                 mode: 'Image',
//                 type: 'image',
//                 component: 'product',
//                 id: mockContentData.id,
//                 image: mockContentData.image,
//                 category: mockContentData.name,
//             });
//         });
//     });

//     // Test suite for ItemThreePreview.js
//     describe('ItemThreePreview', () => {
//         const mockHandleChangeCurrentItems = jest.fn();
//         const mockHandleChangePage = jest.fn();

//         beforeEach(() => {
//             jest.clearAllMocks();
//         });

//         it('renders correctly and displays the content', () => {
//             render(
//                 <ItemThreePreview
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

//             expect(screen.getByText('Mock Item')).toBeInTheDocument();
//             expect(screen.getByText('This...')).toBeInTheDocument();
//             expect(screen.getByText('IDR 50.000')).toBeInTheDocument();
//             expect(screen.getByAltText('Mock Item')).toHaveAttribute('src', 'mock-item.jpg');
//         });

//         it('calls the correct functions when clicked', () => {
//             render(
//                 <ItemThreePreview
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
//             const itemWrapper = screen.getByText('Mock Item').closest('div');
//             fireEvent.click(itemWrapper);
//             expect(mockHandleChangePage).toHaveBeenCalledWith('page two');
//             expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData);
//         });
//     });
// });
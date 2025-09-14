import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import ItemOneEdit from '../ItemOneEdit'
import ItemOnePreview from '../ItemOnePreview'
import { editProductText } from '../../../../features/template-editor/templateProductSlice'

// ---- Mock Redux hooks ----
const mockDispatch = vi.fn()
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

// ---- Mock slice actions ----
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
    },
  },
}

const mockContentData = {
  name: 'Mock Item',
  description: 'This is a mock description for the item.',
  price: 'IDR 50.000',
  image: 'mock-item.jpg',
  id: 'item-1',
}

const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

describe('ItemOne Components', () => {
  describe('ItemOneEdit', () => {
    const mockHandleEditMode = vi.fn()
    const mockHandleShow = vi.fn()
    const mockHandleChangeTitle = vi.fn()
    const mockHandleChangePrice = vi.fn()
    const mockHandleChangeDescription = vi.fn()
    const mockHandleClickActiveBox = vi.fn()
    const mockHandleClickActiveImageBox = vi.fn()
    const mockHandleDeleteProduct = vi.fn()

    beforeEach(() => {
      mockDispatch.mockClear()
      vi.clearAllMocks()
    })

    it('renders correctly and displays initial content in "edit" mode', () => {
      render(
        <ItemOneEdit
          items={mockContentData}
          styleData={mockStyleData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          data={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          showDetail={true}
        />
      )

      expect(screen.getByDisplayValue('Mock Item')).toBeInTheDocument()
      expect(
        screen.getByDisplayValue('This is a mock description for the item.')
      ).toBeInTheDocument()
      expect(screen.getByDisplayValue('IDR 50.000')).toBeInTheDocument()
    })

    it('dispatches the correct action when the title is changed', () => {
      render(
        <ItemOneEdit
          items={mockContentData}
          styleData={mockStyleData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          data={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          showDetail={true}
        />
      )

      const titleInput = screen.getByDisplayValue('Mock Item')
      fireEvent.change(titleInput, { target: { value: 'New Title' } })

      expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title')
    })

    it('calls handleDeleteProduct when the delete button is clicked', () => {
      render(
        <ItemOneEdit
          items={mockContentData}
          styleData={mockStyleData}
          title={mockContentData.name}
          description={mockContentData.description}
          price={mockContentData.price}
          data={mockContentData}
          paragraphShorter={mockParagraphShorter}
          handleEditMode={mockHandleEditMode}
          handleChangeTitle={mockHandleChangeTitle}
          handleChangePrice={mockHandleChangePrice}
          handleChangeDescription={mockHandleChangeDescription}
          handleClickActiveBox={mockHandleClickActiveBox}
          handleClickActiveImageBox={mockHandleClickActiveImageBox}
          handleDeleteProduct={mockHandleDeleteProduct}
          onEdit={true}
          activeBox={true}
          showDetail={true}
        />
      )
      const deleteButton = screen.getByText('X')
      fireEvent.click(deleteButton)
      expect(mockHandleDeleteProduct).toHaveBeenCalled()
    })
  })

  describe('ItemOnePreview', () => {
    const mockHandleChangeCurrentItems = vi.fn()
    const mockHandleChangePage = vi.fn()

    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('renders correctly and displays the content', () => {
      render(
        <ItemOnePreview
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

      expect(
        screen.getByRole('heading', { level: 4, name: 'Mock Item' })
      ).toBeInTheDocument()
      expect(screen.getByText('This...')).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 5, name: 'IDR 50.000' })
      ).toBeInTheDocument()
      expect(screen.getByAltText('Mock Item')).toHaveAttribute(
        'src',
        'mock-item.jpg'
      )
    })

    it('calls the correct functions when clicked', () => {
      render(
        <ItemOnePreview
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
      const itemWrapper = screen
        .getByRole('heading', { level: 4, name: 'Mock Item' })
        .closest('div')
      // fireEvent.click(itemWrapper!)
      if (itemWrapper) {
        fireEvent.click(itemWrapper);
      }
      expect(mockHandleChangePage).toHaveBeenCalledWith('page two')
      expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData)
    })
  })
})


// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ItemOneEdit from '../ItemOneEdit';
// import ItemOnePreview from '../ItemOnePreview';
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
//     },
//   },
// };

// const mockContentData = {
//   name: 'Mock Item',
//   description: 'This is a mock description for the item.',
//   price: 'IDR 50.000',
//   image: 'mock-item.jpg',
//   id: 'item-1',
// };

// const mockParagraphShorter = (text) => text.split(' ')[0] + '...';

// describe('ItemOne Components', () => {
//   describe('ItemOneEdit', () => {
//     const mockHandleEditMode = jest.fn();
//     const mockHandleShow = jest.fn();
//     const mockHandleChangeTitle = jest.fn();
//     const mockHandleChangePrice = jest.fn();
//     const mockHandleChangeDescription = jest.fn();
//     const mockHandleClickActiveBox = jest.fn();
//     const mockHandleClickActiveImageBox = jest.fn();
//     const mockHandleDeleteProduct = jest.fn();
//     const mockDispatch = jest.fn();

//     beforeEach(() => {
//       useDispatch.mockReturnValue(mockDispatch);
//       jest.clearAllMocks();
//     });

//     it('renders correctly and displays initial content in "edit" mode', () => {
//       render(
//         <ItemOneEdit
//           items={mockContentData}
//           styleData={mockStyleData}
//           title={mockContentData.name}
//           description={mockContentData.description}
//           price={mockContentData.price}
//           data={mockContentData}
//           paragraphShorter={mockParagraphShorter}
//           handleEditMode={mockHandleEditMode}
//           handleChangeTitle={mockHandleChangeTitle}
//           handleChangePrice={mockHandleChangePrice}
//           handleChangeDescription={mockHandleChangeDescription}
//           handleClickActiveBox={mockHandleClickActiveBox}
//           handleClickActiveImageBox={mockHandleClickActiveImageBox}
//           handleDeleteProduct={mockHandleDeleteProduct}
//           onEdit={true}
//           showDetail={true}
//         />
//       );

//       expect(screen.getByDisplayValue('Mock Item')).toBeInTheDocument();
//       expect(screen.getByDisplayValue('This is a mock description for the item.')).toBeInTheDocument();
//       expect(screen.getByDisplayValue('IDR 50.000')).toBeInTheDocument();
//     });

//     it('dispatches the correct action when the title is changed', () => {
//       render(
//         <ItemOneEdit
//           items={mockContentData}
//           styleData={mockStyleData}
//           title={mockContentData.name}
//           description={mockContentData.description}
//           price={mockContentData.price}
//           data={mockContentData}
//           paragraphShorter={mockParagraphShorter}
//           handleEditMode={mockHandleEditMode}
//           handleChangeTitle={mockHandleChangeTitle}
//           handleChangePrice={mockHandleChangePrice}
//           handleChangeDescription={mockHandleChangeDescription}
//           handleClickActiveBox={mockHandleClickActiveBox}
//           handleClickActiveImageBox={mockHandleClickActiveImageBox}
//           handleDeleteProduct={mockHandleDeleteProduct}
//           onEdit={true}
//           showDetail={true}
//         />
//       );

//       const titleInput = screen.getByDisplayValue('Mock Item');
//       fireEvent.change(titleInput, { target: { value: 'New Title' } });

//       expect(mockHandleChangeTitle).toHaveBeenCalledWith('New Title');
//     });

//     it('calls handleDeleteProduct when the delete button is clicked', () => {
//         render(
//             <ItemOneEdit
//                 items={mockContentData}
//                 styleData={mockStyleData}
//                 title={mockContentData.name}
//                 description={mockContentData.description}
//                 price={mockContentData.price}
//                 data={mockContentData}
//                 paragraphShorter={mockParagraphShorter}
//                 handleEditMode={mockHandleEditMode}
//                 handleChangeTitle={mockHandleChangeTitle}
//                 handleChangePrice={mockHandleChangePrice}
//                 handleChangeDescription={mockHandleChangeDescription}
//                 handleClickActiveBox={mockHandleClickActiveBox}
//                 handleClickActiveImageBox={mockHandleClickActiveImageBox}
//                 handleDeleteProduct={mockHandleDeleteProduct}
//                 onEdit={true}
//                 activeBox={true}
//                 showDetail={true}
//             />
//         );
//         const deleteButton = screen.getByText('X');
//         fireEvent.click(deleteButton);
//         expect(mockHandleDeleteProduct).toHaveBeenCalled();
//     });
//   });

//   describe('ItemOnePreview', () => {
//     const mockHandleChangeCurrentItems = jest.fn();
//     const mockHandleChangePage = jest.fn();

//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     it('renders correctly and displays the content', () => {
//       render(
//         <ItemOnePreview
//           styleData={mockStyleData}
//           data={mockContentData}
//           title={mockContentData.name}
//           price={mockContentData.price}
//           description={mockContentData.description}
//           paragraphShorter={mockParagraphShorter}
//           handleChangeCurrentItems={mockHandleChangeCurrentItems}
//           handleChangePage={mockHandleChangePage}
//         />
//       );

//       expect(screen.getByRole('heading', { level: 4, name: 'Mock Item' })).toBeInTheDocument();
//       expect(screen.getByText('This...')).toBeInTheDocument();
//       expect(screen.getByRole('heading', { level: 5, name: 'IDR 50.000' })).toBeInTheDocument();
//       expect(screen.getByAltText('Mock Item')).toHaveAttribute('src', 'mock-item.jpg');
//     });

//     it('calls the correct functions when clicked', () => {
//         render(
//             <ItemOnePreview
//               styleData={mockStyleData}
//               data={mockContentData}
//               title={mockContentData.name}
//               price={mockContentData.price}
//               description={mockContentData.description}
//               paragraphShorter={mockParagraphShorter}
//               handleChangeCurrentItems={mockHandleChangeCurrentItems}
//               handleChangePage={mockHandleChangePage}
//             />
//           );
//         const itemWrapper = screen.getByRole('heading', { level: 4, name: 'Mock Item' }).closest('div');
//         fireEvent.click(itemWrapper);
//         expect(mockHandleChangePage).toHaveBeenCalledWith('page two');
//         expect(mockHandleChangeCurrentItems).toHaveBeenCalledWith(mockContentData);
//     });
//   });
// });
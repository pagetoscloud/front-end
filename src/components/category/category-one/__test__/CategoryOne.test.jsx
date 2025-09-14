import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoryOne from '../CategoryOne'
import { vi } from 'vitest'
import { changeCategoryName } from '../../../../features/template-editor/templateContentSlice'
import { editCategory } from '../../../../features/template-editor/templateProductSlice'

// ---- Mock Redux hooks ----
const mockDispatch = vi.fn()
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

// ---- Mock slice actions ----
vi.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeCategoryName: vi.fn(),
}))
vi.mock('../../../../features/template-editor/templateProductSlice', () => ({
  editCategory: vi.fn(),
}))

const mockStyleData = {
  product: {
    style: {
      category: { color: 'black' },
    },
  },
}

const mockContentData = {
  name: 'Mock Category',
  id: '4',
}

describe('CategoryOne Component', () => {
  const handleEditMode = vi.fn()

  beforeEach(() => {
    mockDispatch.mockClear()
    handleEditMode.mockClear()
  })

  it('renders a textarea in "edit" mode and displays the initial text', () => {
    render(
      <CategoryOne
        mode="edit"
        styleData={mockStyleData}
        data={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Category')
    expect(textarea).toBeInTheDocument()
  })

  it('renders an h3 in "preview" mode and displays the initial text', () => {
    render(
      <CategoryOne
        mode="preview"
        styleData={mockStyleData}
        data={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const heading = screen.getByRole('heading', {
      level: 3,
      name: 'Mock Category',
    })
    expect(heading).toBeInTheDocument()
  })

  it('dispatches the correct actions when the text in "edit" mode is changed', () => {
    render(
      <CategoryOne
        mode="edit"
        styleData={mockStyleData}
        data={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Category')
    fireEvent.change(textarea, { target: { value: 'New Category' } })

    expect(mockDispatch).toHaveBeenCalledWith(
      editCategory({ id: '4', data: 'New Category' })
    )
    expect(mockDispatch).toHaveBeenCalledWith(
      changeCategoryName({ id: '4', data: 'New Category' })
    )
  })

  it('calls handleEditMode when the textarea in "edit" mode is clicked', () => {
    render(
      <CategoryOne
        mode="edit"
        styleData={mockStyleData}
        data={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Category')
    fireEvent.click(textarea)

    expect(handleEditMode).toHaveBeenCalledWith({
      mode: 'Text',
      type: 'category',
      component: 'product',
    })
  })
})


// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import CategoryOne from '../CategoryOne';
// import { useDispatch } from 'react-redux';
// import { changeCategoryName } from '../../../../features/template-editor/templateContentSlice';
// import { editCategory } from '../../../../features/template-editor/templateProductSlice';

// // Mock Redux hooks and actions
// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// jest.mock('../../../../features/template-editor/templateContentSlice', () => ({
//   changeCategoryName: jest.fn(),
// }));

// jest.mock('../../../../features/template-editor/templateProductSlice', () => ({
//     editCategory: jest.fn(),
// }));

// const mockStyleData = {
//   product: {
//     style: {
//       category: { color: 'black' },
//     },
//   },
// };

// const mockContentData = {
//     name: 'Mock Category',
//     id: '4',
// };

// describe('CategoryOne Component', () => {
//   const mockDispatch = jest.fn();
//   const handleEditMode = jest.fn();

//   beforeEach(() => {
//     useDispatch.mockReturnValue(mockDispatch);
//     mockDispatch.mockClear();
//     handleEditMode.mockClear();
//   });

//   it('renders a textarea in "edit" mode and displays the initial text', () => {
//     render(
//       <CategoryOne
//         mode="edit"
//         styleData={mockStyleData}
//         data={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Category');
//     expect(textarea).toBeInTheDocument();
//   });

//   it('renders an h3 in "preview" mode and displays the initial text', () => {
//     render(
//       <CategoryOne
//         mode="preview"
//         styleData={mockStyleData}
//         data={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const heading = screen.getByRole('heading', { level: 3, name: 'Mock Category' });
//     expect(heading).toBeInTheDocument();
//   });

//   it('dispatches the correct actions when the text in "edit" mode is changed', () => {
//     render(
//       <CategoryOne
//         mode="edit"
//         styleData={mockStyleData}
//         data={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Category');
//     fireEvent.change(textarea, { target: { value: 'New Category' } });

//     expect(mockDispatch).toHaveBeenCalledWith(editCategory({ id: '4', data: 'New Category' }));
//     expect(mockDispatch).toHaveBeenCalledWith(changeCategoryName({ id: '4', data: 'New Category' }));
//   });

//   it('calls handleEditMode when the textarea in "edit" mode is clicked', () => {
//     render(
//       <CategoryOne
//         mode="edit"
//         styleData={mockStyleData}
//         data={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Category');
//     fireEvent.click(textarea);

//     expect(handleEditMode).toHaveBeenCalledWith({
//       mode: 'Text',
//       type: 'category',
//       component: 'product',
//     });
//   });
// });
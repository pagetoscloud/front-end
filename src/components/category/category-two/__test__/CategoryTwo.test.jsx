import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import CategoryTwoEdit from '../CategoryTwoEdit'
import CategoryTwoPreview from '../CategoryTwoPreview'
import CategoryTwo from '../CategoryTwo';
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

describe('Category Two Components', () => {
    describe('CategoryTwo', () => {
      const handleEditMode = vi.fn()
      const handleChangeCategory = vi.fn()
      beforeEach(() => {
        handleEditMode.mockClear()
        handleChangeCategory.mockClear()
        mockDispatch.mockClear()
      })

      it('renders edit mode', () => {
        render(
          <CategoryTwo
            mode={'edit'}
            data={mockContentData}
            styleData={mockStyleData}
            handleEditMode={handleEditMode}
            handleChangeCategory={handleChangeCategory}
          />
        )
        const textarea = screen.getByDisplayValue('Mock Category')
        expect(textarea).toBeInTheDocument()
      })

      it('render preview mode', () => {
        render(
          <CategoryTwo
            mode={'preview'}
            data={mockContentData}
            styleData={mockStyleData}
            category={mockContentData.name}
          />
        )
        const textarea = screen.getByText('Mock Category')
        expect(textarea).toBeInTheDocument()
      })
  })
  // ---- CategoryTwoEdit tests ----
  describe('CategoryTwoEdit', () => {
    const handleEditMode = vi.fn()
    const handleChangeCategory = vi.fn()

    beforeEach(() => {
      handleEditMode.mockClear()
      handleChangeCategory.mockClear()
      mockDispatch.mockClear()
    })

    it('renders a textarea and displays the initial text', () => {
      render(
        <CategoryTwoEdit
          styleData={mockStyleData}
          category={mockContentData.name}
          handleEditMode={handleEditMode}
          handleChangeCategory={handleChangeCategory}
        />
      )
      const textarea = screen.getByDisplayValue('Mock Category')
      expect(textarea).toBeInTheDocument()
    })

    it('calls handleChangeCategory when the text is changed', () => {
      render(
        <CategoryTwoEdit
          styleData={mockStyleData}
          category={mockContentData.name}
          handleEditMode={handleEditMode}
          handleChangeCategory={handleChangeCategory}
        />
      )
      const textarea = screen.getByDisplayValue('Mock Category')
      fireEvent.change(textarea, { target: { value: 'New Category' } })
      expect(handleChangeCategory).toHaveBeenCalledWith('New Category')
    })

    it('calls handleEditMode when the textarea is clicked', () => {
      render(
        <CategoryTwoEdit
          styleData={mockStyleData}
          category={mockContentData.name}
          handleEditMode={handleEditMode}
          handleChangeCategory={handleChangeCategory}
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

  // ---- CategoryTwoPreview tests ----
  describe('CategoryTwoPreview', () => {
    it('renders an h3 and displays the category text', () => {
      render(
        <CategoryTwoPreview
          styleData={mockStyleData}
          category={mockContentData.name}
        />
      )
      const heading = screen.getByRole('heading', {
        level: 3,
        name: 'Mock Category',
      })
      expect(heading).toBeInTheDocument()
    })
  })
});


// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import CategoryTwoEdit from '../CategoryTwoEdit';
// import CategoryTwoPreview from '../CategoryTwoPreview';
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
//   editCategory: jest.fn(),
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

// describe('Category Two Components', () => {
//     // Test suite for CategoryTwoEdit.js
//     describe('CategoryTwoEdit', () => {
//         const handleEditMode = jest.fn();
//         const handleChangeCategory = jest.fn();
//         beforeEach(() => {
//             handleEditMode.mockClear();
//             handleChangeCategory.mockClear();
//         });

//         it('renders a textarea and displays the initial text', () => {
//             render(
//                 <CategoryTwoEdit
//                     styleData={mockStyleData}
//                     category={mockContentData.name}
//                     handleEditMode={handleEditMode}
//                     handleChangeCategory={handleChangeCategory}
//                 />
//             );
//             const textarea = screen.getByDisplayValue('Mock Category');
//             expect(textarea).toBeInTheDocument();
//         });

//         it('calls handleChangeCategory when the text is changed', () => {
//             render(
//                 <CategoryTwoEdit
//                     styleData={mockStyleData}
//                     category={mockContentData.name}
//                     handleEditMode={handleEditMode}
//                     handleChangeCategory={handleChangeCategory}
//                 />
//             );
//             const textarea = screen.getByDisplayValue('Mock Category');
//             fireEvent.change(textarea, { target: { value: 'New Category' } });
//             expect(handleChangeCategory).toHaveBeenCalledWith('New Category');
//         });

//         it('calls handleEditMode when the textarea is clicked', () => {
//             render(
//                 <CategoryTwoEdit
//                     styleData={mockStyleData}
//                     category={mockContentData.name}
//                     handleEditMode={handleEditMode}
//                     handleChangeCategory={handleChangeCategory}
//                 />
//             );
//             const textarea = screen.getByDisplayValue('Mock Category');
//             fireEvent.click(textarea);
//             expect(handleEditMode).toHaveBeenCalledWith({
//                 mode: 'Text',
//                 type: 'category',
//                 component: 'product',
//             });
//         });
//     });

//     // Test suite for CategoryTwoPreview.js
//     describe('CategoryTwoPreview', () => {
//         it('renders an h3 and displays the category text', () => {
//             render(
//                 <CategoryTwoPreview
//                     styleData={mockStyleData}
//                     category={mockContentData.name}
//                 />
//             );
//             const heading = screen.getByRole('heading', { level: 3, name: 'Mock Category' });
//             expect(heading).toBeInTheDocument();
//         });
//     });
// });
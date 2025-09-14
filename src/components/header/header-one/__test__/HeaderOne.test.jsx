import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import HeaderOne from '../HeaderOne'
import { changeLogoText } from '../../../../features/template-editor/templateContentSlice'

// ---- Mock Redux hooks ----
const mockDispatch = vi.fn()
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

// ---- Mock slice actions ----
vi.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeLogoText: vi.fn(),
}))

const mockStyleData = {
  header: {
    style: {
      title: { color: 'black' },
    },
  },
}

const mockContentData = {
  header: {
    logo: {
      text: 'Mock Logo',
    },
  },
}

describe('HeaderOne Component', () => {
  const handleEditMode = vi.fn()

  beforeEach(() => {
    mockDispatch.mockClear()
    handleEditMode.mockClear()
  })

  it('renders a textarea in "edit" mode and displays the initial text', () => {
    render(
      <HeaderOne
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Logo')
    expect(textarea).toBeInTheDocument()
  })

  it('renders an h1 in "preview" mode and displays the initial text', () => {
    render(
      <HeaderOne
        mode="preview"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const heading = screen.getByRole('heading', { level: 1, name: 'Mock Logo' })
    expect(heading).toBeInTheDocument()
  })

  it('dispatches the correct action when the text in "edit" mode is changed', () => {
    render(
      <HeaderOne
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Logo')
    fireEvent.change(textarea, { target: { value: 'New Logo' } })

    expect(mockDispatch).toHaveBeenCalledWith(changeLogoText('New Logo'))
  })

  it('calls handleEditMode when the textarea in "edit" mode is clicked', () => {
    render(
      <HeaderOne
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    )
    const textarea = screen.getByDisplayValue('Mock Logo')
    fireEvent.click(textarea)

    expect(handleEditMode).toHaveBeenCalledWith({
      mode: 'Text',
      type: 'title',
      component: 'header',
    })
  })
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import HeaderOne from '../HeaderOne';
// import { useDispatch } from 'react-redux';
// import { changeLogoText } from '../../../../features/template-editor/templateContentSlice';

// // Mock Redux hooks and actions
// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
// }));

// jest.mock('../../../../features/template-editor/templateContentSlice', () => ({
//   changeLogoText: jest.fn(),
// }));

// const mockStyleData = {
//   header: {
//     style: {
//       title: { color: 'black' },
//     },
//   },
// };

// const mockContentData = {
//   header: {
//     logo: {
//       text: 'Mock Logo',
//     },
//   },
// };

// describe('HeaderOne Component', () => {
//   const mockDispatch = jest.fn();
//   const handleEditMode = jest.fn();

//   beforeEach(() => {
//     useDispatch.mockReturnValue(mockDispatch);
//     mockDispatch.mockClear();
//     handleEditMode.mockClear();
//   });

//   it('renders a textarea in "edit" mode and displays the initial text', () => {
//     render(
//       <HeaderOne
//         mode="edit"
//         styleData={mockStyleData}
//         contentData={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Logo');
//     expect(textarea).toBeInTheDocument();
//   });

//   it('renders an h1 in "preview" mode and displays the initial text', () => {
//     render(
//       <HeaderOne
//         mode="preview"
//         styleData={mockStyleData}
//         contentData={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const heading = screen.getByRole('heading', { level: 1, name: 'Mock Logo' });
//     expect(heading).toBeInTheDocument();
//   });

//   it('dispatches the correct action when the text in "edit" mode is changed', () => {
//     render(
//       <HeaderOne
//         mode="edit"
//         styleData={mockStyleData}
//         contentData={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Logo');
//     fireEvent.change(textarea, { target: { value: 'New Logo' } });

//     expect(mockDispatch).toHaveBeenCalledWith(changeLogoText('New Logo'));
//   });

//   it('calls handleEditMode when the textarea in "edit" mode is clicked', () => {
//     render(
//       <HeaderOne
//         mode="edit"
//         styleData={mockStyleData}
//         contentData={mockContentData}
//         handleEditMode={handleEditMode}
//       />
//     );
//     const textarea = screen.getByDisplayValue('Mock Logo');
//     fireEvent.click(textarea);

//     expect(handleEditMode).toHaveBeenCalledWith({
//       mode: 'Text',
//       type: 'title',
//       component: 'header',
//     });
//   });
// });
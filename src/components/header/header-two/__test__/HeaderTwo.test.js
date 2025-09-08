import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderTwo from '../HeaderTwo';
import { useDispatch } from 'react-redux';
import { changeLogoText } from '../../../../features/template-editor/templateContentSlice';

// Mock Redux hooks and actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeLogoText: jest.fn(),
}));

const mockStyleData = {
  header: {
    style: {
      title: { color: 'black' },
      background: { background: 'white' },
    },
  },
};

const mockContentData = {
  header: {
    logo: {
      text: 'Mock Logo',
    },
  },
};

describe('HeaderTwo Component', () => {
  const mockDispatch = jest.fn();
  const handleEditMode = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    mockDispatch.mockClear();
    handleEditMode.mockClear();
  });

  it('renders a textarea in "edit" mode and displays the initial text', () => {
    render(
      <HeaderTwo
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    );
    const textarea = screen.getByDisplayValue('Mock Logo');
    expect(textarea).toBeInTheDocument();
  });

  it('renders an h1 in "preview" mode and displays the initial text', () => {
    render(
      <HeaderTwo
        mode="preview"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    );
    const heading = screen.getByRole('heading', { level: 1, name: 'Mock Logo' });
    expect(heading).toBeInTheDocument();
  });

  it('dispatches the correct action when the text in "edit" mode is changed', () => {
    render(
      <HeaderTwo
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    );
    const textarea = screen.getByDisplayValue('Mock Logo');
    fireEvent.change(textarea, { target: { value: 'New Logo' } });

    expect(mockDispatch).toHaveBeenCalledWith(changeLogoText('New Logo'));
  });

  it('calls handleEditMode when the textarea in "edit" mode is clicked', () => {
    render(
      <HeaderTwo
        mode="edit"
        styleData={mockStyleData}
        contentData={mockContentData}
        handleEditMode={handleEditMode}
      />
    );
    const textarea = screen.getByDisplayValue('Mock Logo');
    fireEvent.click(textarea);

    expect(handleEditMode).toHaveBeenCalledWith({
      mode: 'Text',
      type: 'title',
      component: 'header',
    });
  });
});
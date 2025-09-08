import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerTwoEdit from '../BannerTwoEdit';
import BannerTwoPreview from '../BannerTwoPreview';
import { useDispatch } from 'react-redux';
import { changeBannerText } from '../../../../features/template-editor/templateContentSlice';

// Mock Redux hooks and actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeBannerText: jest.fn(),
}));

// Mock the useRef hook without referencing the `document` object
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => ({ current: null }),
}));

const mockStyleData = {
  banner: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      background: { background: 'white', opacity: 1, filter: 'none', backdropFilter: 'none' },
    },
  },
};

const mockContentData = {
  banner: {
    title: 'Mock Title\nWith Newline',
    paragraph: 'Mock Paragraph',
  },
};

describe('Banner Two Components', () => {
  // Test suite for BannerTwoEdit.js
  describe('BannerTwoEdit', () => {
    const mockDispatch = jest.fn();
    const handleEditMode = jest.fn();

    beforeEach(() => {
      useDispatch.mockReturnValue(mockDispatch);
      mockDispatch.mockClear();
      handleEditMode.mockClear();
    });

    it('renders correctly and displays initial content', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      );

      expect(screen.getByDisplayValue('Mock Title With Newline')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument();
    });

    it('dispatches the correct action when the title is changed', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      );

      const titleInput = screen.getByDisplayValue('Mock Title With Newline');
      fireEvent.change(titleInput, { target: { value: 'New Title' } });

      expect(mockDispatch).toHaveBeenCalledWith(changeBannerText({ type: 'title', value: 'New Title' }));
    });

    it('dispatches the correct action when the paragraph is changed', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      );

      const paragraphInput = screen.getByDisplayValue('Mock Paragraph');
      fireEvent.change(paragraphInput, { target: { value: 'New Paragraph' } });

      expect(mockDispatch).toHaveBeenCalledWith(changeBannerText({ type: 'paragraph', value: 'New Paragraph' }));
    });

    // Note: No image click test as the image is commented out in the component code.
  });

  // Test suite for BannerTwoPreview.js
  describe('BannerTwoPreview', () => {
    it('renders correctly and displays the content with newlines', () => {
      render(<BannerTwoPreview styleData={mockStyleData} contentData={mockContentData} />);

      expect(screen.getByText('Mock Title')).toBeInTheDocument();
      expect(screen.getByText('With Newline')).toBeInTheDocument();
      expect(screen.getByText('Mock Paragraph')).toBeInTheDocument();
    });
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerOneEdit from '../BannerOneEdit';
import BannerOnePreview from '../BannerOnePreview';
import { useDispatch } from 'react-redux';
import { changeBannerText } from '../../../../features/template-editor/templateContentSlice';

// Mock Redux hooks and actions
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeBannerText: jest.fn(),
}));

// CORRECTED: Mock the useRef hook without referencing the `document` object
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => ({ current: null }),
}));

const mockStyleData = {
  banner: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      image: { objectFit: 'cover' },
      background: { background: 'white', opacity: 1, filter: 'none', backdropFilter: 'none' },
    },
  },
};

const mockContentData = {
  banner: {
    title: 'Mock Title',
    paragraph: 'Mock Paragraph',
    image: 'mock-image.jpg',
  },
};

describe('Banner Components', () => {
  // Test suite for BannerOneEdit.js
  describe('BannerOneEdit', () => {
    const mockDispatch = jest.fn();
    const handleEditMode = jest.fn();

    beforeEach(() => {
      useDispatch.mockReturnValue(mockDispatch);
      mockDispatch.mockClear();
      handleEditMode.mockClear();
    });

    it('renders correctly and displays initial content', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      );

      expect(screen.getByDisplayValue('Mock Title')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument();
      expect(screen.getByAltText('hero')).toBeInTheDocument();
    });

    it('dispatches the correct action when the title is changed', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      );

      const titleInput = screen.getByDisplayValue('Mock Title');
      fireEvent.change(titleInput, { target: { value: 'New Title' } });
      expect(mockDispatch).toHaveBeenCalledWith(changeBannerText({ type: 'title', value: 'New Title' }));
    });

    it('dispatches the correct action when the paragraph is changed', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      );

      const paragraphInput = screen.getByDisplayValue('Mock Paragraph');
      fireEvent.change(paragraphInput, { target: { value: 'New Paragraph' } });

      expect(mockDispatch).toHaveBeenCalledWith(changeBannerText({ type: 'paragraph', value: 'New Paragraph' }));
    });

    it('calls handleEditMode when the image is clicked', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      );

      const image = screen.getByAltText('hero');
      fireEvent.click(image);

      expect(handleEditMode).toHaveBeenCalledWith({
        mode: 'Image',
        type: 'image',
        component: 'banner',
        image: mockContentData.banner.image,
      });
    });
  });

  // Test suite for BannerOnePreview.js
  describe('BannerOnePreview', () => {
    it('renders correctly and displays the content', () => {
      render(<BannerOnePreview styleData={mockStyleData} contentData={mockContentData} />);

      expect(screen.getByText('Mock Title')).toBeInTheDocument();
    //   expect(screen.getByText('Mock Paragraph')).toBeInTheDocument();
      expect(screen.getByAltText('hero')).toHaveAttribute('src', 'mock-image.jpg');
    });
  });
});
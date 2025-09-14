import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import BannerOne from "../BannerOne";
import BannerOneEdit from '../BannerOneEdit'
import BannerOnePreview from '../BannerOnePreview';
import { changeBannerText } from '../../../../features/template-editor/templateContentSlice'
import { vi } from 'vitest'
// import { useDispatch } from 'react-redux';

// Mock child components

// ---- Mock Redux hooks ----
const mockDispatch = vi.fn()
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

// ---- Mock slice action ----
vi.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeBannerText: vi.fn(),
}))

// ---- Mock React useRef ----
// vi.mock('react', async () => {
  //   const actual = await vi.importActual<typeof import('react')>('react')
  //   return {
    //     ...actual,
    //     useRef: () => ({ current: null }),
    //   }
    // })

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useRef: () => ({ current: null }),
  }
})

const mockStyleData = {
  banner: {
    style: {
      title: { color: 'black' },
      paragraph: { color: 'gray' },
      image: { objectFit: 'cover' },
      background: {
        background: 'white',
        opacity: 1,
        filter: 'none',
        backdropFilter: 'none',
      },
    },
  },
}

const mockContentData = {
  banner: {
    title: 'Mock Title',
    paragraph: 'Mock Paragraph',
    image: 'mock-image.jpg',
  },
}

describe('Banner Components', () => {
  describe("BannerOne Component", () => {
    const mockHandleEditMode = vi.fn();
    const mockOnEdit = vi.fn();

    it("renders BannerOneEdit when mode is 'edit'", () => {
      render(
        <BannerOne
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={mockHandleEditMode}
          mode="edit"
          onEdit={mockOnEdit}
        />
      );
        expect(screen.getByDisplayValue('Mock Title')).toBeInTheDocument()
        expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument()
        expect(screen.getByAltText('hero')).toBeInTheDocument()
    });

    it("renders BannerOnePreview when mode is not 'edit'", () => {
      render(
        <BannerOne
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={mockHandleEditMode}
          mode="preview"
          onEdit={mockOnEdit}
        />
      );
      // expect(screen.getByTestId("banner-preview")).toHaveTextContent(
      //   "Preview Mode: Test Banner"
      // );
      // expect(screen.queryByTestId("banner-edit")).toBeNull();
      // expect(screen.getByText('Mock Paragraph')).toBeInTheDocument()
        expect(screen.getByText('Mock Title')).toBeInTheDocument()
        expect(screen.getByAltText('hero')).toHaveAttribute(
          'src',
          'mock-image.jpg'
        )
    });
  });
  describe('BannerOneEdit', () => {
    const handleEditMode = vi.fn()

    beforeEach(() => {
      mockDispatch.mockClear()
      handleEditMode.mockClear()
    })

    it('renders correctly and displays initial content', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      )

      expect(screen.getByDisplayValue('Mock Title')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument()
      expect(screen.getByAltText('hero')).toBeInTheDocument()
    })

    it('dispatches the correct action when the title is changed', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      )

      const titleInput = screen.getByDisplayValue('Mock Title')
      fireEvent.change(titleInput, { target: { value: 'New Title' } })

      expect(mockDispatch).toHaveBeenCalledWith(
        changeBannerText({ type: 'title', value: 'New Title' })
      )
    })

    it('dispatches the correct action when the paragraph is changed', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      )

      const paragraphInput = screen.getByDisplayValue('Mock Paragraph')
      fireEvent.change(paragraphInput, { target: { value: 'New Paragraph' } })

      expect(mockDispatch).toHaveBeenCalledWith(
        changeBannerText({ type: 'paragraph', value: 'New Paragraph' })
      )
    })

    it('calls handleEditMode when the image is clicked', () => {
      render(
        <BannerOneEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
          onEdit={true}
        />
      )

      const image = screen.getByAltText('hero')
      fireEvent.click(image)

      expect(handleEditMode).toHaveBeenCalledWith({
        mode: 'Image',
        type: 'image',
        component: 'banner',
        image: mockContentData.banner.image,
      })
    })
  })

  describe('BannerOnePreview', () => {
    it('renders correctly and displays the content', () => {
      render(
        <BannerOnePreview
          styleData={mockStyleData}
          contentData={mockContentData}
        />
      )

      expect(screen.getByText('Mock Title')).toBeInTheDocument()
      // expect(screen.getByText('Mock Paragraph')).toBeInTheDocument()
      expect(screen.getByAltText('hero')).toHaveAttribute(
        'src',
        'mock-image.jpg'
      )
    })
  })
})
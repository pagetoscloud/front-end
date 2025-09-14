import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import BannerOne from '../../banner-one/BannerOne'
import BannerTwoEdit from '../BannerTwoEdit'
import BannerTwoPreview from '../BannerTwoPreview'
import { useDispatch } from 'react-redux'
import { changeBannerText } from '../../../../features/template-editor/templateContentSlice'
import { vi } from 'vitest'

// Mock Redux hooks and actions
vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}))

vi.mock('../../../../features/template-editor/templateContentSlice', () => ({
  changeBannerText: vi.fn(),
}))

// Mock the useRef hook without referencing the `document` object
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
      background: { background: 'white', opacity: 1, filter: 'none', backdropFilter: 'none' },
    },
  },
}

const mockContentData = {
  banner: {
    title: 'Mock Title\nWith Newline',
    paragraph: 'Mock Paragraph',
  },
}

describe('Banner Two Components', () => {
    describe("BannerTwo Component", () => {
      const mockHandleEditMode = vi.fn();
      const mockOnEdit = vi.fn();
      const mockDispatch = vi.fn()
      // const handleEditMode = vi.fn()
      beforeEach(() => {
        vi.mocked(useDispatch).mockReturnValue(mockDispatch)
        mockDispatch.mockClear()
        mockOnEdit.mockClear()
      })
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
          expect(screen.getByDisplayValue('Mock Title With Newline')).toBeInTheDocument()
          expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument()
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
          expect(screen.getByText('Mock Title With Newline')).toBeInTheDocument()
          expect(screen.getByText('Mock Paragraph')).toBeInTheDocument()
      });
  });
  describe('BannerTwoEdit', () => {
    const mockDispatch = vi.fn()
    const handleEditMode = vi.fn()

    beforeEach(() => {
      vi.mocked(useDispatch).mockReturnValue(mockDispatch)
      mockDispatch.mockClear()
      handleEditMode.mockClear()
    })

    it('renders correctly and displays initial content', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      )

      expect(screen.getByDisplayValue('Mock Title With Newline')).toBeInTheDocument()
      expect(screen.getByDisplayValue('Mock Paragraph')).toBeInTheDocument()
    })

    it('dispatches the correct action when the title is changed', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      )

      const titleInput = screen.getByDisplayValue('Mock Title With Newline')
      fireEvent.change(titleInput, { target: { value: 'New Title' } })

      expect(mockDispatch).toHaveBeenCalledWith(
        changeBannerText({ type: 'title', value: 'New Title' })
      )
    })

    it('dispatches the correct action when the paragraph is changed', () => {
      render(
        <BannerTwoEdit
          styleData={mockStyleData}
          contentData={mockContentData}
          handleEditMode={handleEditMode}
        />
      )

      const paragraphInput = screen.getByDisplayValue('Mock Paragraph')
      fireEvent.change(paragraphInput, { target: { value: 'New Paragraph' } })

      expect(mockDispatch).toHaveBeenCalledWith(
        changeBannerText({ type: 'paragraph', value: 'New Paragraph' })
      )
    })
  })

  describe('BannerTwoPreview', () => {
    it('renders correctly and displays the content with newlines', () => {
      render(<BannerTwoPreview styleData={mockStyleData} contentData={mockContentData} />)

      expect(screen.getByText('Mock Title')).toBeInTheDocument()
      expect(screen.getByText('With Newline')).toBeInTheDocument()
      expect(screen.getByText('Mock Paragraph')).toBeInTheDocument()
    })
  })
})
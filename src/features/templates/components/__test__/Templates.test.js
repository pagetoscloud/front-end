import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import DetailTemplate from '../detail-template/DetailTemplate';
import TemplateList from '../template-list/TemplateList';
// import MainTemplates from '../MainTemplates';
// import { templateListData } from '../../../../data/TemplateListData';

// Mock the useNavigate hook from react-router-dom for DetailTemplate tests
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// Mock the template list data for consistency
const mockTemplateListData = [
  { id: 1, name: 'Template 1', image: 'image1.jpg', type: 'Type 1' },
  { id: 2, name: 'Template 2', image: 'image2.jpg', type: 'Type 2' },
];

describe('Unit Tests for Templates Components', () => {
  // Test Suite for DetailTemplate.js
  describe('DetailTemplate', () => {
    const mockDetail = { name: 'Test Template', image: 'test-image.jpg', type: 'Test Type' };
    const handleShowDetail = jest.fn();
    const handleLocalStorage = jest.fn();

    it('renders correctly with provided props', () => {
      render(
        <BrowserRouter>
          <DetailTemplate
            currentDetail={mockDetail}
            handleShowDetail={handleShowDetail}
            handleLocalStorage={handleLocalStorage}
          />
        </BrowserRouter>
      );

      // Check for presence of the detail content
      expect(screen.getByText('Test Template')).toBeInTheDocument();
      expect(screen.getByText('#Test Type')).toBeInTheDocument();
      expect(screen.getByAltText('template detail')).toBeInTheDocument();
    });

    it('calls handleShowDetail when close button is clicked', () => {
      render(
        <BrowserRouter>
          <DetailTemplate
            currentDetail={mockDetail}
            handleShowDetail={handleShowDetail}
            handleLocalStorage={handleLocalStorage}
          />
        </BrowserRouter>
      );

      fireEvent.click(screen.getByAltText('close icon'));
      expect(handleShowDetail).toHaveBeenCalledTimes(1);
    });

    it('calls handleLocalStorage and navigates to /preview when Preview button is clicked', () => {
      render(
        <BrowserRouter>
          <DetailTemplate
            currentDetail={mockDetail}
            handleShowDetail={handleShowDetail}
            handleLocalStorage={handleLocalStorage}
          />
        </BrowserRouter>
      );

      fireEvent.click(screen.getByText('Preview'));
      expect(handleLocalStorage).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith('/preview');
    });

    it('calls handleLocalStorage and navigates to /editor/* when Edit button is clicked', () => {
      render(
        <BrowserRouter>
          <DetailTemplate
            currentDetail={mockDetail}
            handleShowDetail={handleShowDetail}
            handleLocalStorage={handleLocalStorage}
          />
        </BrowserRouter>
      );

      fireEvent.click(screen.getByText('Edit'));
      expect(handleLocalStorage).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith('/editor/*');
    });
  });

  // Test Suite for TemplateList.js
  describe('TemplateList', () => {
    const handleCurrentDetail = jest.fn();
    const handleShowDetail = jest.fn();

    it('renders the correct number of templates from the list data', () => {
      render(
        <TemplateList
          templateListData={mockTemplateListData}
          handleCurrentDetail={handleCurrentDetail}
          handleShowDetail={handleShowDetail}
        />
      );

      const templateThumbnails = screen.getAllByRole('img', { name: /template thumbnail/i });
      expect(templateThumbnails).toHaveLength(mockTemplateListData.length);
      expect(screen.getByText('Template 1')).toBeInTheDocument();
      expect(screen.getByText('Template 2')).toBeInTheDocument();
    });

    it('calls handler functions on thumbnail click', () => {
      render(
        <TemplateList
          templateListData={mockTemplateListData}
          handleCurrentDetail={handleCurrentDetail}
          handleShowDetail={handleShowDetail}
        />
      );

      fireEvent.click(screen.getByText('Template 1'));
      expect(handleCurrentDetail).toHaveBeenCalledWith(mockTemplateListData[0]);
      expect(handleShowDetail).toHaveBeenCalledTimes(1);
    });
  });

  // Test Suite for MainTemplates.js
//   describe('MainTemplates', () => {
//     const handleShowDetail = jest.fn();
//     const handleCurrentDetail = jest.fn();

//     // Mock the data import to control test data
//     jest.mock('../../../../data/TemplateListData', () => ({
//       templateListData: mockTemplateListData,
//     }));

//     it('renders the main title and the TemplateList component', () => {
//       render(
//         <MainTemplates
//           showNavigation={true}
//           handleShowDetail={handleShowDetail}
//           handleCurrentDetail={handleCurrentDetail}
//         />
//       );

//       // Check for the main title
//       expect(screen.getByText('New Template')).toBeInTheDocument();

//       // Check if TemplateList is rendered by looking for its content
//       expect(screen.getByText('Template 1')).toBeInTheDocument();
//     });
//   });
});
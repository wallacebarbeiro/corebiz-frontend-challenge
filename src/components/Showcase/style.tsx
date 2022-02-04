import styled from 'styled-components';

export const ShowcaseWrapper = styled.ul`
  display: flex;
  overflow: hidden;
  overflow-x: visible;
  padding: 15px 0px;
  ::-webkit-scrollbar {
    width: 3px; /* width of the entire scrollbar */
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    height: 5px;
    background: transparent; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    height: 5px;
    background-color: #ccc; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 0px; /* creates padding around scroll thumb */
  }
`;

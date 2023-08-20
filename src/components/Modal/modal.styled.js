import styled from 'styled-components';

export const BackDrob = styled.div`
display: none;
background: rgba(0, 0, 0, 0.8);
position: fixed;
width: 100%;
height: 100%;
cursor: pointer;
z-index: 1;
`;

export const ModalActive = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 80%;
max-height: 80%;
overflow: hidden;
background-color: rgb(255, 255, 255);
cursor: default;
`;
export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CloseModal = styled.button`
font-family: var(--font-regular);

`;
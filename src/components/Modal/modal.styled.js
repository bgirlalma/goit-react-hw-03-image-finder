import styled from 'styled-components';

export const BackDrop = styled.div`
display: none;
background: rgba(0, 0, 0, 0.8);

position: fixed;
display: flex;
justify-content: center;
align-items: center;

top: 0;
left: 0;
width: 100%;
height: 100%;
cursor: pointer;
z-index: 1;
`;

export const ModalActive = styled.div`
width: 1000px;
height: auto;
background-color: white;
border: 3px outset #C010F0;
border-right: outset #D919C5;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const ModalImage = styled.img`
position: relative;
width: 100%;
height: 700px;
object-fit: cover;
display: block;
`;

export const CloseModal = styled.button`
position: absolute;
margin-top: 10px;
margin-left: 10px;
z-index: 1;
border: none;
cursor: pointer;
font-size: 24px; 
color: #fff;
background-color: transparent;
`;

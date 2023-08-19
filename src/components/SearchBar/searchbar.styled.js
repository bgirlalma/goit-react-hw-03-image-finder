import styled from 'styled-components';

export const Container = styled.div`
margin-left: 0;
margin-right: 0;
padding-left: 20px;
padding-right: 20px;
background-color: blue;
`;

export const Form = styled.form`
max-width: 480px;
margin-left: auto;
    margin-right: auto;
padding-top: 20px;
padding-bottom: 20px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`;

export const Span = styled.span`
position: absolute;
top: 50%;
transform: translateY(-50%);
border: none;
background-color: none;
fill: blue;
`;

export const Input = styled.input`
width: 100%;
height: 48px;
border-radius: 20px;
padding-left: 30px;
border: none;
`;




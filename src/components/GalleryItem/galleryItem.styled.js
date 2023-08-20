import styled from 'styled-components';

export const ListItem = styled.ul`
padding: 0;
display: grid;
gap:10px;
grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.li`
display: flex;
`;

export const Images = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`;
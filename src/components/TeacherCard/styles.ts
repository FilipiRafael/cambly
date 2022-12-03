import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 220px;

  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 1rem;

  border: 1px solid ${props => props.theme.colors.cardBorderColor};
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
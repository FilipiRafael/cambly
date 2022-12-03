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

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;

  position: relative;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const OnlineIcon = styled.div`
  width: 13px;
  height: 13px;

  background-color: #96C45E;
  border-radius: 0.15rem;

  border: 2px solid #FFF;
  
  position: absolute;
  left: -4px;
  bottom: -4px;
`;
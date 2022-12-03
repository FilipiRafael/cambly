import styled from 'styled-components';

export const Banner = styled.div`
  width: 100vw;
  height: 390px;
  background-image: url('/images/yellow-banner.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #FFF;
`;

export const Container = styled.main`
  width: 100vw;
  padding: 1rem 6rem;
  background-color: ${props => props.theme.colors.backgroundColor};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 0;
  color: ${props => props.theme.colors.boldText};
`;

export const OnlineTag = styled.span`
  font-size: 0.90rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.colors.boldTextColored};
`;

export const FavoritesTag = styled.span`
  font-size: 0.90rem;
  font-weight: 300;
  cursor: pointer;
  color: ${props => props.theme.colors.normalText};
`;
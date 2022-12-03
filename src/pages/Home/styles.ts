import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';

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
  padding: 1.5rem 4rem;
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

export const SearchField = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundColor};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  height: 38px;
  padding: 0 1rem;

  border-radius: 0.2rem;

  &:hover {
    border: 1px solid ${props => props.theme.colors.boldTextColored};
  };
`;

export const InputField = styled.input`
  &::placeholder {
    color: ${props => props.theme.colors.placeholderText};
    font-weight: 400;
  }
`;

export const SearchIconField = styled(SearchIcon)`
  color: ${props => props.theme.colors.placeholderText};
  margin-right: 0.5rem;
`;
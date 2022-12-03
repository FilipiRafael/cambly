import { useState } from 'react';
import { 
  Banner,
  Title,
  Wrapper,
  Subtitle,
  Container,
  OnlineTag,
  FavoritesTag,
  SearchField,
  SearchIconField,
  InputField
} from './styles';
import { Navbar } from '../../components/Navbar';
import { SupportButton } from '../../components/SupportButton';

import { ThemeProvider } from 'styled-components';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

export const Home = () => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Navbar isDarkTheme={isDarkTheme} changeTheme={setIsDarkTheme} />
      <Banner>
        <Title>Welcome back, Filipi</Title>
      </Banner>

      <Container>
        <Wrapper>
          <Subtitle>Encontre um professor</Subtitle>
          <OnlineTag>On-line</OnlineTag>
          <FavoritesTag>Favoritos</FavoritesTag>
        </Wrapper>
        <Wrapper>
          <SearchField>
            <SearchIconField />
            <InputField
              placeholder='Nome, idioma, hobby'
            />
          </SearchField>
        </Wrapper>
      </Container>

      <SupportButton />
    </ThemeProvider>
  )
}
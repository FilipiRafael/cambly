import { useState } from 'react';
import { Banner, Title } from './styles';
import { Navbar } from '../../components/Navbar';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';

export const Home = () => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
      <Navbar isDarkTheme={isDarkTheme} changeTheme={setIsDarkTheme} />
      <Banner>
        <Title>Welcome back, Filipi</Title>
      </Banner>
    </ThemeProvider>
  )
}
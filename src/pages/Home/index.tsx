import { Banner, Title } from './styles';
import { Navbar } from '../../components/Navbar';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <Title>Welcome back, Filipi</Title>
      </Banner>
    </>
  )
}
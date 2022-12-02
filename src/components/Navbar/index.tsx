import { Container, Brand, Menu, Wrapper } from './styles';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Brand src="/images/brand.png" alt="Cambly Brand" />
        <Menu>
          <span>Professores</span>
          <span>Currículos</span>
          <span>Progresso</span>
        </Menu>
      </Wrapper>
    </Container>
  )
}
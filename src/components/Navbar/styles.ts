import styled from 'styled-components';

export const Container = styled.nav`
  width: 100vw;
  height: 70px;
  background-color: var(--light-background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 6px solid #EEEEEE;
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Brand = styled.img`
  width: 150px;
`;

export const Menu = styled.div`
  color: --light-text-color;
  display: flex;
  gap: 1.8rem;

  span {
    color: var(--light-text-color);
    text-transform: uppercase;
    font-size: 0.90rem;
    cursor: pointer;
  }
`;
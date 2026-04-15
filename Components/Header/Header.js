import styled from "styled-components";

export default function Header({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  color: var(--title-color);
`;

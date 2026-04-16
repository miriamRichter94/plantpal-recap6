import styled from "styled-components";

export default function Header({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  color: var(--text-color);
  align-self: center;
  font-size: 2.5rem;
`;

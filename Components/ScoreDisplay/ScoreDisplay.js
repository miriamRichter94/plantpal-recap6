import styled from "styled-components";

export default function ScoreDisplay({ value, max, ActiveIcon, InactiveIcon }) {
  return (
    <ScoreDisplayContainer>
      {[...Array(value)].map((_, index) => (
        <ActiveIcon key={index} />
      ))}
      {[...Array(max - value)].map((_, index) => (
        <InactiveIcon key={index} />
      ))}
    </ScoreDisplayContainer>
  );
}

const ScoreDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
`;

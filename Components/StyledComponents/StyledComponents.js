import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  overflow: hidden;
`;

export const EmptyResult = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
`;

export const ToolTip = styled.div`
  width: 80px;
  height: 28px;
  text-align: center;
  border-radius: 5%;
  background: var(--tooltip-background);
  color: var(--tooltip-text-color);
  position: relative;
  opacity: 0;
  font-size: 1rem;
`;

import styled from "styled-components";

export default function DarkModeSwitch({ isDarkMode, onToggleDarkMode }) {
  return (
    <Label>
      <Input type="checkbox" checked={isDarkMode} onChange={onToggleDarkMode} />
      <Slider />
    </Label>
  );
}

const Label = styled.label`
  position: absolute;
  right: 10px;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
`;

const Slider = styled.span`
  position: absolute;
  inset: 0;
  background-color: #ccc;
  border-radius: 30px;
  transition: 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 4px;
    top: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  &::after {
    content: "🌙";
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 14px;
    line-height: 22px;
    transition: 0.3s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2a2a2a;
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px);
  }

  &:checked + ${Slider}::after {
    content: "☀️";
    right: unset;
    left: 4px;
  }
`;

import { useState } from "react";
import styled from "styled-components";

export default function FilterForm({}) {
  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formDataObj = new FormData(form);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SubmitButton type="submit"></SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  padding: 8px;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 10px 0;

  legend {
    font-weight: bold;
    margin-bottom: 6px;
  }

  label {
    display: block;
    margin-bottom: 4px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin: 0;
`;

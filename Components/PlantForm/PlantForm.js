import { useState } from "react";
import styled from "styled-components";
import { mutate } from "swr";

export default function PlantForm({ onCancel }) {
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [errors, setErrors] = useState({});
  const remaining = 225 - descriptionLength;

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    setSubmitError(null);

    const formDataObj = new FormData(form);
    const fertiliserSeason = formDataObj.getAll("fertiliserSeason");

    const data = Object.fromEntries(formDataObj);
    data.fertiliserSeason = fertiliserSeason;

    const newErrors = {};
    if (!data.name?.trim()) newErrors.name = "Name is required";
    if (!data.botanicalName?.trim())
      newErrors.botanicalName = "Botanical Name is required";
    if (!data.lightNeed) newErrors.lightNeed = "Light Need is required";
    if (!data.waterNeed) newErrors.waterNeed = "Water Need is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch("/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add plant");

      await res.json();
      await mutate("/api/plants");

      setErrors({});
      setDescriptionLength(0);
      form.reset();
      onCancel();
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to save plant. Please try again.");
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CloseButton type="button" onClick={onCancel}>
        ✕
      </CloseButton>
      <h2>Add a New Plant</h2>

      {/* Image URL */}
      <label htmlFor="imageUrl">
        Plant Image URL (only from https://www.pexels.com)
      </label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="https://www.pexels.com"
      />

      {/* Name */}
      <label htmlFor="name">Plant Name *</label>
      <input id="name" name="name" />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}

      {/* Botanical Name */}
      <label htmlFor="botanicalName">Botanical Name *</label>
      <input id="botanicalName" name="botanicalName" />
      {errors.botanicalName && <ErrorText>{errors.botanicalName}</ErrorText>}

      {/* Description */}
      <label htmlFor="description">Description</label>
      <StyledTextarea
        id="description"
        name="description"
        maxLength={225}
        onChange={(e) => setDescriptionLength(e.target.value.length)}
      />
      <CharacterCount warning={remaining < 20}>
        {remaining} characters remaining
      </CharacterCount>

      {/* Light Needs */}
      <StyledFieldset>
        <legend>Light Needs *</legend>
        {["Full Sun", "Partial Shade", "Full Shade"].map((option) => (
          <label key={option}>
            <input type="radio" name="lightNeed" value={option} />
            {option}
          </label>
        ))}
      </StyledFieldset>
      {errors.lightNeed && <ErrorText>{errors.lightNeed}</ErrorText>}

      {/* Water Needs */}
      <StyledFieldset>
        <legend>Water Needs *</legend>
        {["Low", "Medium", "High"].map((option) => (
          <label key={option}>
            <input type="radio" name="waterNeed" value={option} />
            {option}
          </label>
        ))}
      </StyledFieldset>
      {errors.waterNeed && <ErrorText>{errors.waterNeed}</ErrorText>}

      {/* Fertiliser Season */}
      <StyledFieldset>
        <legend>Fertiliser Season</legend>
        {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
          <label key={season}>
            <input type="checkbox" name="fertiliserSeason" value={season} />
            {season}
          </label>
        ))}
      </StyledFieldset>

      <SubmitButton type="submit">Add Plant</SubmitButton>
    </FormContainer>
  );
}

// --- Styled Components ---
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

const CharacterCount = styled.p`
  font-size: 12px;
  color: ${({ warning }) => (warning ? "red" : "#666")};
  margin-top: -6px;
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

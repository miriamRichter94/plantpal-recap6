import { useState } from "react";
import styled from "styled-components";
import { mutate } from "swr";

export default function PlantForm({ onCancel, plant }) {
  console.log("FormPlant", plant);
  const isEditMode = Boolean(plant);

  const MAX_DESCRIPTION_LENGTH = 225;

  const [descriptionLength, setDescriptionLength] = useState(
    plant?.description?.length || 0
  );

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError(null);

    const form = event.target;
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

    if (data.imageUrl && !data.imageUrl.includes("pexels.com")) {
      newErrors.imageUrl = "Only images from pexels.com are allowed";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const url = isEditMode ? `/api/plants/${plant._id}` : "/api/plants";

      const method = isEditMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(
          isEditMode ? "Failed to update plant" : "Failed to add plant"
        );
      }

      await res.json();

      await mutate("/api/plants");

      if (isEditMode) {
        await mutate(`/api/plants/${plant._id}`);
      }

      setErrors({});
      setDescriptionLength(0);
      form.reset();
      onCancel();
    } catch (error) {
      console.error(error);
      setSubmitError(
        isEditMode
          ? "Failed to update plant. Please try again."
          : "Failed to add plant. Please try again."
      );
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CloseButton type="button" onClick={onCancel}>
        ✕
      </CloseButton>

      <h2>{isEditMode ? "Edit Plant" : "Add a New Plant"}</h2>

      {/* Image URL */}
      <label htmlFor="imageUrl">
        Plant Image URL (only from https://www.pexels.com)
      </label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        defaultValue={plant?.imageUrl}
      />
      {errors.imageUrl && <ErrorText>{errors.imageUrl}</ErrorText>}

      <label htmlFor="name">Plant Name *</label>
      <input id="name" name="name" defaultValue={plant?.name} />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}

      <label htmlFor="botanicalName">Botanical Name *</label>
      <input
        id="botanicalName"
        name="botanicalName"
        defaultValue={plant?.botanicalName}
      />
      {errors.botanicalName && <ErrorText>{errors.botanicalName}</ErrorText>}

      <label htmlFor="description">Description</label>
      <StyledTextarea
        id="description"
        name="description"
        maxLength={MAX_DESCRIPTION_LENGTH}
        defaultValue={plant?.description}
        onChange={(e) => setDescriptionLength(e.target.value.length)}
      />

      <CharacterCount
        $warning={descriptionLength > MAX_DESCRIPTION_LENGTH - 20}
      >
        {descriptionLength} / {MAX_DESCRIPTION_LENGTH} characters
      </CharacterCount>

      <label>Light Needs *</label>
      <StyledFieldset>
        {["Full Sun", "Partial Shade", "Full Shade"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="lightNeed"
              value={option}
              defaultChecked={plant?.lightNeed === option}
            />
            {option}
          </label>
        ))}
      </StyledFieldset>
      {errors.lightNeed && <ErrorText>{errors.lightNeed}</ErrorText>}

      <label>Water Needs *</label>
      <StyledFieldset>
        {["Low", "Medium", "High"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="waterNeed"
              value={option}
              defaultChecked={plant?.waterNeed === option}
            />
            {option}
          </label>
        ))}
      </StyledFieldset>
      {errors.waterNeed && <ErrorText>{errors.waterNeed}</ErrorText>}

      <label>Fertiliser Season</label>
      <StyledFieldset>
        {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
          <label key={season}>
            <input
              type="checkbox"
              name="fertiliserSeason"
              value={season}
              defaultChecked={plant?.fertiliserSeason?.includes(season)}
            />
            {season}
          </label>
        ))}
      </StyledFieldset>

      <SubmitButton type="submit">
        {isEditMode ? "Save Changes" : "Add Plant"}
      </SubmitButton>

      {submitError && <ErrorText>{submitError}</ErrorText>}
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

const CharacterCount = styled.p`
  font-size: 12px;
  color: ${({ $warning }) => ($warning ? "red" : "#666")};
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

import { useState } from "react";
import styled from "styled-components";
import { mutate } from "swr";

export default function PlantFormContent({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    botanicalName: "",
    description: "",
    lightNeed: "",
    waterNeed: "",
    fertiliserSeason: [],
  });

  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  {
    {/*for future implementation of Uploading Pictures*/}
    /* 
    function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreview(null);
    }
  }*/

  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const newArray = prev.fertiliserSeason.includes(value)
          ? prev.fertiliserSeason.filter((item) => item !== value)
          : [...prev.fertiliserSeason, value];
        return { ...prev, fertiliserSeason: newArray };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const remaining = 225 - formData.description.length;

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.botanicalName.trim())
      newErrors.botanicalName = "Botanical Name is required";
    if (!formData.lightNeed) newErrors.lightNeed = "Light Need is required";
    if (!formData.waterNeed) newErrors.waterNeed = "Water Need is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = { ...formData };
    if (imageFile) {
      payload.imageUrl = preview;
    }

    try {
      const res = await fetch("/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add plant");

      const newPlant = await res.json();

      mutate("/api/plants", (plants = []) => [newPlant, ...plants], false);

      setFormData({
        name: "",
        botanicalName: "",
        description: "",
        lightNeed: "",
        waterNeed: "",
        fertiliserSeason: [],
      });
      setImageFile(null);
      setPreview(null);
      setErrors({});
      closeModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CloseButton onClick={closeModal}>✕</CloseButton>
      <h2>Add a New Plant</h2>

      {/* Image URL */}
      <label htmlFor="imageUrl">Plant Image URL</label>
      <input
        type="text"
        id="imageUrl"
        placeholder="https://paxels.com/image.jpg"
        value={formData.imageUrl || ""}
        onChange={(event) => setFormData({ ...formData, imageUrl: event.target.value })}
      />

      {/* a feature that may be implemented and was specified in advance */}
      {/* Image Upload 
      <label htmlFor="image">Plant Image</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
      />*/}

      {preview && <ImagePreview src={preview} alt="Preview" />}
      {/* Name */}
      <label htmlFor="name">Plant Name *</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}

      {/* Botanical Name */}
      <label htmlFor="botanicalName">Botanical Name *</label>
      <input
        id="botanicalName"
        name="botanicalName"
        value={formData.botanicalName}
        onChange={handleChange}
      />
      {errors.botanicalName && <ErrorText>{errors.botanicalName}</ErrorText>}

      {/* Description */}
      <label htmlFor="description">Description</label>
      <StyledTextarea
        id="description"
        name="description"
        maxLength={225}
        value={formData.description}
        onChange={handleChange}
      />
      <CharacterCount warning={remaining < 20}>
        {remaining} characters remaining
      </CharacterCount>

      {/* Light Needs */}
      <StyledFieldset>
        <legend>Light Needs *</legend>
        {["Full Sun", "Partial Shade", "Full Shade"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="lightNeed"
              value={option}
              checked={formData.lightNeed === option}
              onChange={handleChange}
            />
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
            <input
              type="radio"
              name="waterNeed"
              value={option}
              checked={formData.waterNeed === option}
              onChange={handleChange}
            />
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
            <input
              type="checkbox"
              name="fertiliserSeason"
              value={season}
              checked={formData.fertiliserSeason.includes(season)}
              onChange={handleChange}
            />
            {season}
          </label>
        ))}
      </StyledFieldset>

      <SubmitButton type="submit">Add Plant</SubmitButton>
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

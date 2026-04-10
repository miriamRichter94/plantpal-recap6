import styled from "styled-components";
import { deletePlant } from "@/services/plantService";
import { useRouter } from "next/router";

export default function DeleteConfirmation({ onCancel, plantId }) {
  const router = useRouter();
  return (
    <ConfirmationDiv>
      <p>Are you sure you want to delete the Plant?</p>
      <button
        onClick={async () => {
          await deletePlant(plantId);
          router.push("/");
        }}
      >
        ❌Delete Plant
      </button>
      <button onClick={onCancel}>Cancel</button>
    </ConfirmationDiv>
  );
}

// --- Styled Components ---
const ConfirmationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

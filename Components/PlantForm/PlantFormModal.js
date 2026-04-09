import { useState } from "react";
import styled from "styled-components";
import PlantFormContent from "./PlantForm";

export default function PlantForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <OpenButton onCancel={() => setShowForm(true)}>Create Plant</OpenButton>

      {showForm && (
        <Overlay onCancel={() => setShowForm(false)}>
          <Modal onCancel={(e) => e.stopPropagation()}>
            <PlantFormContent closeModal={() => setShowForm(false)} />
          </Modal>
        </Overlay>
      )}
    </>
  );
}

const OpenButton = styled.button`
  margin: 16px;
  padding: 10px 14px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  position: relative;
  z-index: 10000;
`;

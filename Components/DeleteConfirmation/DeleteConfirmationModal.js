import { useState } from "react";
import styled from "styled-components";
import DeleteConfirmation from "./DeleteConfirmation";

export default function DeleteConfirmationModal({ children, plantId }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <>
      <OpenButton onClick={() => setShowConfirmModal(true)}>
        {children}
      </OpenButton>

      {showConfirmModal && (
        <Overlay onClick={() => setShowConfirmModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <DeleteConfirmation
              onCancel={() => setShowConfirmModal(false)}
              plantId={plantId}
            />
          </Modal>
        </Overlay>
      )}
    </>
  );
}

const OpenButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
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

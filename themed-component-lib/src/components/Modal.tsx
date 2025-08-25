import styled from "styled-components";
import type { ModalOverlayProps } from "./ModalOverlay.types";
import { Button } from "./Button";
const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const Modal = styled.div`
  background: var(--background);
  color: var(--text-color);
  border-radius: 12px;
  padding: 20px;
  width: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ModalOverlay = ({ isOpen, isClose }: ModalOverlayProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <Modal>
        <h2>This Overlay Modal Created using styled-components</h2>
        <Button onClick={isClose}>Close</Button>
      </Modal>
    </Overlay>
  );
};

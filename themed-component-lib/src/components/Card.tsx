import styled from "styled-components";

export const Card = styled.div`
  background: var(--background);
  padding: 12px;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.1);
  font-size: var(--font-size-md);
  width: 25%;
  height: 25%;
  margin: 20px;

  &:hover {
    transform: translateY(-10px);
    background: rgba(249, 163, 203, 0.3);
  }
`;

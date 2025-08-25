import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  background-color: ${({ $primary }) =>
    $primary ? "var(--color-primary)" : "var(--color-secondary)"};
  color: var(--text-color);
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $primary }) =>
      $primary ? "var(--color-secondary)" : "var(--color-primary)"};
    transform: translateY(-5px);
    color: white;
  }
`;

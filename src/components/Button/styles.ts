import styled from "styled-components";

interface IButtonDefaultProps {
  background: string;
  color: string;
}

export const ButtonDefault = styled.button<IButtonDefaultProps>`
  padding: 0.875rem;
  font-weight: 700;
  background-color: ${props => props.background};
  color: ${props => props.color};
  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    filter: brightness(1.1);
  }
`;

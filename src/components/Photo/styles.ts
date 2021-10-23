import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 18.31rem;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    overflow: hidden;
    transition: transform 0.2s;
    cursor: pointer;
    border-radius: 0.312rem;

    &:hover {
      transform: translateY(-0.187rem);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 14.375rem;
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

  button {
    padding: 0.875rem;
    background-color: #df2e2e;
    color: #ffffff;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;

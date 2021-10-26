import styled from "styled-components";

export const Container = styled.div`
  max-width: 18.31rem;
  height: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    .icon-close {
      top: 0;
      opacity: 1;
      visibility: visible;
    }
  }

  .photo {
    height: 100%;
    width: 100%;
    object-fit: cover;

    overflow: hidden;
    transition: transform 0.2s;
    border-radius: 0.312rem;
  }

  .icon-close {
    position: absolute;
    top: -0.625rem;
    right: 0.625rem;

    opacity: 0;
    visibility: hidden;

    cursor: pointer;
    transition: all 0.2s;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

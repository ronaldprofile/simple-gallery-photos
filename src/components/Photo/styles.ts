import styled, { css } from "styled-components";

interface IContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<IContainerProps>`
  height: 100%;
  position: relative;

  &:hover {
    header {
      top: 0;
      opacity: 1;
      visibility: visible;
    }
  }

  ${props =>
    props.isDragging &&
    css`
      &:hover {
        header {
          opacity: 0;
          visibility: hidden;
        }
      }

      border: 0.125rem dashed #ffffff;
      background: transparent;
      cursor: grabbing;

      .photo {
        opacity: 0;
      }
    `}

  header {
    width: 100%;
    padding: 0.4rem;
    position: absolute;
    top: -0.625rem;

    opacity: 0;
    visibility: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: all 0.2s;

    svg {
      width: 2rem;
      background-color: #121214;
      color: #ffffff;

      clip-path: circle();
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        filter: brightness(1.5);
      }
    }
  }

  .photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

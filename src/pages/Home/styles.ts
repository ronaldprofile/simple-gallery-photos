import styled, { keyframes } from "styled-components";

const animationLoading = keyframes`
  to { transform: rotate(360deg) }
`;

export const Container = styled.div`
  width: min(90vw, 57.5rem);
  padding: 2rem 0;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: #ffffff;
  }

  form {
    width: 100%;
    margin-top: 4rem;
    padding: 2rem;
    background-color: #121214;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      label,
      button {
        border-radius: 0.312rem;
      }

      label {
        padding: 0.875rem;
        font-size: 1.125rem;
        font-weight: 500;

        background-color: #1a1a1d;
        color: #ffffff;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(1.1);
        }

        input[type="file"] {
          display: none;
        }
      }

      button {
        width: 11.25rem;
        padding: 0.875rem;
        font-weight: 700;
        background-color: #8257e5;
        color: #ffffff;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(1.1);
        }
      }
    }

    .result {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      span {
        font-size: 1.125rem;
        color: #ffffff;
      }

      .animation-loading {
        width: 3.125rem;
        height: 3.125rem;
        border: 0.187rem solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: ${animationLoading} 1s ease-in-out infinite;
      }
    }

    @media (max-width: 480px) {
      div:first-child {
        flex-direction: column;

        label,
        button {
          width: 100%;
        }
      }
    }
  }
`;

export const Grid = styled.div`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const Warning = styled.div`
  color: #ffffff;
  text-align: center;
`;

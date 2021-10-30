import styled from "styled-components";

export const Container = styled.div`
  width: min(90vw, 58.437rem);
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

    > div {
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
  margin-top: 1.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

export const Warning = styled.div`
  margin-top: 2rem;

  opacity: 0.8;
  color: #ffffff;
  text-align: center;

  p {
    font-size: 1.125rem;
  }
`;

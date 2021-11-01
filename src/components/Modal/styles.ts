import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  height: 100%;
  padding: 0.75rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
    }

    svg {
      color: #ffffff;
      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    header .fileName {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const GallerySlider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .photo-modal {
    max-width: 57.5rem;
    padding: 0 0.75rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;

    &:hover {
      .modal-content {
        opacity: 1;
        visibility: visible;
        transform: scaleY(1);
        transform-origin: left;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }

    .modal-content {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      visibility: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;

      transform: scaleY(0);
      transition: transform 0.3s ease-in-out;
      transform-origin: right;

      .details {
        margin-top: 2rem;
        ul {
          list-style: none;

          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          li {
            span {
              margin-left: 0.75rem;
              padding: 0.75rem;
              display: inline-block;
              font-size: 0.75rem;
              background-color: #388bfd;
              border-radius: 1.5rem;
              transition: background-color 0.2s;
              &:hover {
                background-color: #58a6ff;
              }
            }
          }
        }
      }
    }
  }

  .button {
    padding: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #121214;

    clip-path: circle();
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #8257e5;
    }

    svg {
      color: #ffffff;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  }

  .buttons-mobile {
    display: none;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    .photo-modal {
      padding: 0;
    }

    > .button {
      display: none;
    }

    .buttons-mobile {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

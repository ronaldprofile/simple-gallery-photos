import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

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
`;

export const GallerySlider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .button {
    height: 3.125rem;
    width: 3.75rem;

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
`;

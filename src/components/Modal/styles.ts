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
  width: 100%;
  height: 100%;
  padding: 0.875rem;

  header {
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
    }

    button {
      padding: 0.5rem 0.875rem;
      transform: translate(-50%, 0);
    }

    img {
      cursor: pointer;
    }
  }
`;

export const GallerySlider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .full-image {
    width: 100%;
    height: 100%;
    padding: 0 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
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

    img {
      transform: rotate(-90deg);
    }
  }

  .arrow {
    width: 1.125rem;
  }
`;

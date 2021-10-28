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
  padding: 0.875rem;

  header {
    margin-bottom: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
    }

    button {
      padding: 0.5rem 0.875rem;
    }

    img {
      cursor: pointer;
    }
  }
`;

export const GallerySlider = styled.div`
  /* width: 100%;
  img {
    margin: 0 auto;

    width: 100%;
    height: 100%;
  } */
`;
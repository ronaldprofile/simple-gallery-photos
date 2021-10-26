import styled, { keyframes } from "styled-components";

const animationLoading = keyframes`
  to {
    transform: scaleY(2);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 1rem;
    height: 3.125rem;
    margin: 0 0.125rem;
    background-color: #5bff71;

    display: inline-block;
  }

  span:nth-child(1) {
    animation: ${animationLoading} 0.5s -0.45s ease-in-out alternate infinite;
  }
  span:nth-child(2) {
    animation: ${animationLoading} 0.5s -0.3s ease-in-out alternate infinite;
  }
  span:nth-child(3) {
    animation: ${animationLoading} 0.5s -0.15s ease-in-out alternate infinite;
  }
  span:nth-child(4) {
    animation: ${animationLoading} 0.5s 0s ease-in-out alternate infinite;
  }
`;

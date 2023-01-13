import styled from "styled-components";

export const TextField = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background-color: #ffaeae;
  padding: 20px;
  font-size: 18px;
  resize: vertical;
`;

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;

  &.FS {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ${TextField} {
      min-height: 80vh;
    }
  }
`;

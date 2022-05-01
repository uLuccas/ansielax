import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 90px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: whitesmoke;
  width: 70%;
  height: 100%;

  margin: 10px;
  padding: 10px 40px;
  border-radius: 15px;
  box-shadow: 2px 5px 5px #ccc;
`;

export const Title = styled.h1`
  margin: 25px 0px;
`;
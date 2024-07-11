import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  font-family: "Nunito", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  color: #4d4d4d;

  p {
    width: 300px;
  }
`;

export const Checkbox = styled.div<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 2px solid #e5e5e5;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;

  span.checkmark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50px;
    border: none;
    transform-origin: bottom right;
    background-color: #03d69d;
    opacity: ${(props) => (props.checked ? "1" : "0")};
  }

  span.checkmark:after {
    content: "✔";
    position: absolute;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50px;
    color: #fff;
  }
`;

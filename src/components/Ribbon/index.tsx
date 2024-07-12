import React, { ReactNode } from "react";
import styled from "styled-components";

const RibbonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #133a6f;
  width: 337px;
  height: 33px;
  color: #fff;
  font-family: "Nunito", Arial, sans-serif;
  padding: 0 10px;

  &:after {
    content: "";
    position: absolute;
    right: 0px;
    top: 3%;
    transform: translateY(-50%);
    transform: rotate(180deg);
    border-width: 18px 0 15px 18px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
  }
`;

const Emoji = styled.span`
  margin-right: 5px;
`;

const RibbonText = styled.span`
  display: inline-block;
`;

interface RibbonProps {
  text: ReactNode;
  emoji?: string;
}

const Ribbon: React.FC<RibbonProps> = ({ emoji, text }) => (
  <RibbonContainer>
    {emoji && <Emoji>{emoji}</Emoji>}
    <RibbonText>{text}</RibbonText>
  </RibbonContainer>
);

export default Ribbon;

import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  font-family: "Nunito", Arial, sans-serif;
`;

export const Header = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const OptionWithQuota = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;

  > * {
    &:first-child {
      border-radius: 8px 8px 0 0; // Border radius no primeiro filho
    }
    &:last-child {
      border-radius: 0 0 8px 8px; // Border radius no último filho
    }
  }
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid ${({ selected }) => (selected ? "#03D69D" : "#ddd")};
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#F4FBF9" : "#fff")};
  height: 105px;
`;

export const LabelOption = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -28px;
  height: 27px;
  border-radius: 100px;
  background-color: #e5e5e5;
  font-size: 18px;
  font-weight: 800;
  color: #4d4d4d;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
`;

export const RadioButton = styled.input`
  margin-right: 8px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  align-items: start;
  font-family: "Nunito", Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Cashback = styled.div`
  color: #03d69d;
  font-size: 0.9rem;
  font-family: "Nunito", Arial, sans-serif;
`;

export const Total = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: start;
  width: 328px;
  color: #afafaf;
`;

export const CashbackAmount = styled.div`
  font-size: 0.8rem;
  color: #fff;
  margin-top: 4px;
`;

export const BestOption = styled.div`
  font-size: 0.8rem;
  color: #fff;
  margin-top: 4px;
`;

export const SecurePayment = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const BlueRibbon = styled.div`
  background-color: #133a6f;
  width: 337px;
  height: 33px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", Arial, sans-serif;
`;

export const Value = styled.div`
  display: flex;
  gap: 4px;
`;

export const Span = styled.span`
  font-weight: 600;
`;

export const Checkbox = styled.div<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
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
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: none;
    transform-origin: bottom right;
    background-color: #03d69d;
    opacity: ${(props) => (props.checked ? "1" : "0")};
  }

  span.checkmark:after {
    content: "✔";
    position: absolute;
    top: 18%;
    left: 43%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50px;
    color: #fff;
`;

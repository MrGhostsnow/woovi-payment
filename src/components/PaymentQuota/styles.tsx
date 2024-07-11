import styled from "styled-components";

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

export const Quotas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e5e5e5;
`;

export const Quota = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;

  p {
    font-weight: 600;
    font-size: 18px;
    color: #4d4d4d;
    margin: 0;
  }

  span {
    font-weight: 800;
  }
`;

export const FirstQuota = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
`;

export const SecondQuota = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 8px;
`;

export const ButtonCopyQrcode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 39px;
  border-radius: 8px;
  background-color: #133a6f;
  color: #fff;
  gap: 8px;
  margin-top: 16px;
`;

export const PaymentTerm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 184px;
  height: 44px;
  font-size: 16px;
  margin: 20px 0;

  p {
    font-weight: 600;
    margin: 0;
    color: #afafaf;
  }

  span {
    font-weight: 800;
    color: #4d4d4d;
  }
`;

export const Tax = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  font-weight: 400;
  height: 44px;
  border-bottom: 2px solid #e5e5e5;

  p {
    margin: 0;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }
`;

export const Tutorial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  font-size: 18px;
  font-weight: 800;
  height: 44px;
  border-bottom: 2px solid #e5e5e5;
  color: #4d4d4d;
`;

export const Identifier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 14px;

  p {
    margin: 0;
    font-weight: 600;
    color: #b2b2b2;
  }

  span {
    font-weight: 800;
    color: #4d4d4d;
  }
`;

export const Line = styled.img`
  position: relative;
  top: 1px;
  left: -2px;
  width: 23px;
  height: 2px;
  transform: rotate(90deg);
`;

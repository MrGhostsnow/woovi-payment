import React, { useState } from "react";
import {
  Option,
  Container,
  Header,
  Options,
  LabelOption,
  RadioButton,
  Label,
  Cashback,
  Total,
  CashbackAmount,
  BestOption,
  SecurePayment,
  FirstRow,
  Value,
  BlueRibbon,
  Span,
  OptionWithQuota,
  Checkbox,
} from "./styles";

import img from "../../assets/logo.png";
import footerLogo from "../../assets/footerLogo.png";
import shieldIcon from "../../assets/shield.png";
import Ribbon from "../Ribbon";

const PaymentOptions: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const options = [
    {
      id: 2,
      quota: "2x",
      label: "R$ 15.300,00",
      total: "Total: R$ 30.600,00",
      pix: true,
      pixOption: "Pix Parcelado",
      width: "157px",
    },
    { id: 3, quota: "3x", label: "R$ 10.196,66", total: "Total: R$ 30.620,00" },
    {
      id: 4,
      quota: "4x",
      label: "R$ 7.725,00",
      total: "Total: R$ 30.900,00",
      amount: "-3% de juros",
      cashbackAmount: ": Melhor opção de parcelamento",
    },
    { id: 5, quota: "5x", label: "R$ 6.300,00", total: "Total: R$ 31.500,00" },
    { id: 6, quota: "6x", label: "R$ 5.283,33", total: "Total: R$ 31.699,98" },
    { id: 7, quota: "7x", label: "R$ 4.542,85", total: "Total: R$ 31.800,00" },
  ];

  const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => (
    <Checkbox checked={checked}>
      <span className="checkmark"></span>
    </Checkbox>
  );

  return (
    <Container>
      <img src={img} alt="logo" />
      <Header>João, como você quer pagar?</Header>
      <Options>
        <Option
          style={{ height: "137px", gap: "8px", borderRadius: "8px" }}
          key={1}
          selected={selectedOption === 1}
          onClick={() => handleOptionChange(1)}
        >
          <LabelOption style={{ width: "67px", top: "-38px" }}>Pix</LabelOption>
          <FirstRow>
            <Label>
              <Value>
                <Span>1x</Span>
                R$ 30.500,00
              </Value>
              <Cashback>Ganhe 3% de Cashback</Cashback>
            </Label>
            <CustomCheckbox checked={selectedOption === 1} />
          </FirstRow>
          {/* <BlueRibbon>
            <CashbackAmount>
              <Span>R$ 300,00 </Span>
              de volta no seu Pix na hora
            </CashbackAmount>
          </BlueRibbon> */}
          <Ribbon emoji="🤑" text="R$ 300,00 de volta no seu Pix na hora" />
        </Option>
      </Options>
      <OptionWithQuota>
        {options.map((option) => (
          <Option
            key={option.id}
            selected={selectedOption === option.id}
            onClick={() => handleOptionChange(option.id)}
          >
            {option.pix ? (
              <LabelOption style={{ width: option.width }}>
                {option.pixOption}
              </LabelOption>
            ) : null}

            <FirstRow>
              <Label>
                <Value>
                  <Span>{option.quota}</Span>
                  {option.label}
                </Value>
              </Label>
              <CustomCheckbox checked={selectedOption === option.id} />
            </FirstRow>
            <Total>{option.total}</Total>
            {option.cashbackAmount && (
              // <BlueRibbon>
              //   <CashbackAmount>
              //
              //   </CashbackAmount>
              // </BlueRibbon>
              <Ribbon
                text={
                  <>
                    <Span>{option.amount}</Span>
                    {option.cashbackAmount}
                  </>
                }
              />
            )}
          </Option>
        ))}
      </OptionWithQuota>
      <SecurePayment>
        <img src={shieldIcon} alt="icon" /> Pagamento 100% seguro via:{" "}
        <img src={footerLogo} alt="logo" />
      </SecurePayment>
    </Container>
  );
};

export default PaymentOptions;

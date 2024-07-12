import React, { useState } from "react";
import { Container, Header, Checkbox } from "./styles";

import img from "../../assets/logo.png";
import footerLogo from "../../assets/footerLogo.png";
import shieldIcon from "../../assets/shield.png";
import qrCode from "../../assets/qrCode.png";
import paperIcon from "../../assets/paper.png";
import arrow from "../../assets/arrow.png";
import line from "../../assets/line.png";
import PaymentQuota from "../PaymentQuota";
import Form from "../Form";

const PaymentCard: React.FC = () => {
  const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => (
    <Checkbox checked={checked}>
      <span className="checkmark"></span>
    </Checkbox>
  );

  return (
    <Container>
      <img src={img} alt="logo" />
      <Header>
        <p>João, pague o restante em 1x no cartão</p>
      </Header>
      <Form />
      <PaymentQuota
        total="Total: R$ 31.500,00"
        card={true}
        pix
        card2={false}
        pix2
      />
    </Container>
  );
};

export default PaymentCard;

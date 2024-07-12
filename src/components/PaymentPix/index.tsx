import React, { useState } from "react";
import {
  Container,
  Header,
  QrCode,
  SecurePayment,
  Checkbox,
  Quotas,
  Quota,
  FirstQuota,
  SecondQuota,
  ButtonCopyQrcode,
  PaymentTerm,
  Tax,
  Tutorial,
  Identifier,
  Line,
} from "./styles";

import img from "../../assets/logo.png";
import footerLogo from "../../assets/footerLogo.png";
import shieldIcon from "../../assets/shield.png";
import qrCode from "../../assets/qrCode.png";
import paperIcon from "../../assets/paper.png";
import arrow from "../../assets/arrow.png";
import line from "../../assets/line.png";
import PaymentQuota from "../PaymentQuota";

const PaymentPix: React.FC = () => {
  const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => (
    <Checkbox checked={checked}>
      <span className="checkmark"></span>
    </Checkbox>
  );

  return (
    <Container>
      <img src={img} alt="logo" />
      <Header>
        <p>João, pague a entrada de R$ 15.300,00 pelo Pix</p>
      </Header>
      <QrCode>
        <img src={qrCode} alt="QrCode" />
      </QrCode>
      <ButtonCopyQrcode>
        Clique para copiar QR CODE <img src={paperIcon} alt="icon" />
      </ButtonCopyQrcode>
      <PaymentQuota
        total="Total: R$ 31.500,00"
        card={false}
        pix={true}
        card2={false}
        pix2={false}
      />
    </Container>
  );
};

export default PaymentPix;

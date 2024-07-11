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
        Clique Aqui Para copiar QR CODE <img src={paperIcon} alt="icon" />
      </ButtonCopyQrcode>
      <PaymentTerm>
        <p>Prazo de pagamento:</p>
        <span>15/12/2021 - 08:17</span>
      </PaymentTerm>
      <Quotas>
        <Quota>
          <FirstQuota>
            <CustomCheckbox checked={false} />
            <p>1° entrada no Pix</p>
          </FirstQuota>
          <span>R$ 15.300,00</span>
        </Quota>
        <Line src={line} alt="icon" />
        <Quota>
          <SecondQuota>
            <CustomCheckbox checked={false} />
            <p>2° entrada no Cartão</p>
          </SecondQuota>
          <span>R$ 15.300,00</span>
        </Quota>
      </Quotas>
      <Tax>
        <span>CET 0,5%</span>
        <p>Total: R$ 30.600,00</p>
      </Tax>
      <Tutorial>
        <p>Como funciona?</p>
        <img src={arrow} alt="icon" />
      </Tutorial>
      <Identifier>
        <p>Identificador:</p>
        <span>2c1b951f356c4680b13ba1c9fc889c47</span>
      </Identifier>
      <SecurePayment>
        <img src={shieldIcon} alt="icon" /> Pagamento 100% seguro via:{" "}
        <img src={footerLogo} alt="logo" />
      </SecurePayment>
    </Container>
  );
};

export default PaymentPix;

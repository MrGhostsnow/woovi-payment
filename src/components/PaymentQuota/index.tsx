import React from "react";
import {
  SecurePayment,
  Checkbox,
  Quotas,
  Quota,
  FirstQuota,
  SecondQuota,
  PaymentTerm,
  Tax,
  Tutorial,
  Identifier,
  Line,
} from "./styles";

import footerLogo from "../../assets/footerLogo.png";
import shieldIcon from "../../assets/shield.png";
import arrow from "../../assets/arrow.png";
import line from "../../assets/line.png";

interface PaymentQuotaProps {
  total: string;
}

const PaymentQuota: React.FC<PaymentQuotaProps> = ({ total }) => {
  const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => (
    <Checkbox checked={checked}>
      <span className="checkmark"></span>
    </Checkbox>
  );

  return (
    <>
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
        <Line src={line} alt="line" />
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
        <p>{total}</p>
      </Tax>
      <Tutorial>
        <p>Como funciona?</p>
        <img src={arrow} alt="arrow" />
      </Tutorial>
      <Identifier>
        <p>Identificador:</p>
        <span>2c1b951f356c4680b13ba1c9fc889c47</span>
      </Identifier>
      <SecurePayment>
        <img src={shieldIcon} alt="shield" /> Pagamento 100% seguro via:{" "}
        <img src={footerLogo} alt="logo" />
      </SecurePayment>
    </>
  );
};

export default PaymentQuota;

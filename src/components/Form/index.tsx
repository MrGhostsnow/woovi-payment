import styled from "styled-components";
import InputMask from "react-input-mask";

const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FormGroupDouble = styled.div`
  margin-bottom: 15px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Label = styled.label`
  display: block;
  position: relative;
  top: 10px;
  left: 12px;
  font-weight: 600;
  font-size: 14px;
  font-family: "Nunito", Arial, sans-serif;
  color: #4d4d4d;
`;

const Input = styled.input`
  width: 350px;
  height: 30px;
  padding: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-family: "Nunito", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
`;

const DateInput = styled(InputMask)`
  width: 150px;
  height: 30px;
  padding: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-family: "Nunito", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
  padding-left: 10px;
`;

const Select = styled.select`
  width: 350px;
  height: 44px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: "Nunito", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
  outline: none;
`;

const Button = styled.button`
  background-color: #133a6f;
  width: 350px;
  height: 39px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Form = () => {
  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="fullName">Nome completo</Label>
        <Input type="text" id="fullName" name="fullName" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="cpf">CPF</Label>
        <Input type="text" id="cpf" name="cpf" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="cardNumber">Número do cartão</Label>
        <Input type="text" id="cardNumber" name="cardNumber" required />
      </FormGroup>

      <FormGroupDouble>
        <div>
          <Label htmlFor="expirationDate" style={{ left: "-30px" }}>
            Vencimento
          </Label>
          <DateInput mask={"99/99"} placeholder="MM/AA" maskChar={null} />
        </div>

        <div>
          <Label htmlFor="cvv" style={{ left: "-50px" }}>
            CVV
          </Label>
          <Input
            type="text"
            id="cvv"
            name="cvv"
            required
            style={{ width: "150px" }}
          />
        </div>
      </FormGroupDouble>

      <FormGroup>
        <Label htmlFor="installments">Parcelas</Label>
        <Select id="installments" name="installments" required>
          <option value="1">1x de R$ 15.300,00</option>
        </Select>
      </FormGroup>

      <Button type="submit">Pagar</Button>
    </FormContainer>
  );
};

export default Form;

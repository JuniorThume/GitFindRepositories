import { InputContainer } from "./styles";

function Input({ value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="@usuario/repositorio" type="text" />
    </InputContainer>
  )
}

export default Input;

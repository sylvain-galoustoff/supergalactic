import { useState } from "react";
import style from "./ConfirmPassword.module.scss";
import { useEffect } from "react";

function InputPassword({ label, id, password }) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState("danger");

  useEffect(() => {
    function evaluateConfirm(password) {
      password === inputValue ? true : false;
    }

    const confirmValidation = evaluateConfirm(inputValue);
    setValidation(confirmValidation);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`${style.inputWrapper}`}>
      <label htmlFor={id}>{label}</label>
      <input type="password" className="sg-input-password" id={id} onChange={handleChange} value={inputValue} />
    </div>
  );
}

export default InputPassword;
